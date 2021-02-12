
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const axios = require('axios');
const { json } = require('body-parser');
const accessTokens = new Set();


var app = express();
app.use(bodyParser.json());

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOption));

app.get('/', (req, res) => {
    
    res.send(`
      <html>
        <body>
          <a href="https://www.facebook.com/v9.0/dialog/oauth?client_id=${process.env.client_id}&redirect_uri=${encodeURIComponent(process.env.redirect_uri)}&scope=public_profile,email">
            Log In With Facebook
          </a>
        </body>
      </html>
    `);
  })


  app.get('/oauth-redirect', async (req, res) => {
    try {
      const authCode = req.query.code;
        
      console.log("code is",authCode)

      const accessTokenUrl = 'https://graph.facebook.com/v9.0/oauth/access_token?' +
        `client_id=${process.env.client_id}&` +
        `client_secret=${process.env.appSecret}&` +
        `redirect_uri=${encodeURIComponent(process.env.redirect_uri)}&` +
        `code=${encodeURIComponent(authCode)}`;
  
      // Make an API request to exchange `authCode` for an access token
      const accessToken = await axios.get(accessTokenUrl).then(res => res.data['access_token']);
      // Store the token in memory 
      console.log('Access token is', accessToken);
      accessTokens.add(accessToken);
  
      res.redirect(`/me?accessToken=${encodeURIComponent(accessToken)}`);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.response.data || err.message });
    }
  })

  app.get('/me', async (req, res) => {
    try {
      const accessToken = req.query.accessToken;
      if (!accessTokens.has(accessToken)) {
        throw new Error(`Invalid access token "${accessToken}"`);
      }
  
      // Get the name and user id of the Facebook user associated with the
      // access token.
      const data = await axios.get(`https://graph.facebook.com/me?access_token=${encodeURIComponent(accessToken)}&fields=id,name,first_name,last_name,email,gender`).
        then(res => res.data);
  
      return res.send(`
        <html>
          <body>Hello.. ${data.name}.You are successfully logged!!!!
          <img src= "http://graph.facebook.com/${data.id}/picture?type=large&redirect=true&width=150&height=150">

          <p> your user id is :${data.id}</p>
          <p> your first name is :${data.first_name}</p>
          <p> your last name is :${data.last_name}</p>
          <p> your email :${data.email}</p>
          <p> your email :${data.gender}</p>



          <a href=" https://www.facebook.com/logout.php?next=${process.env.redirect_uri}&access_token=${accessToken}">Logout</a>

          </body>
        </html>
      `);

    } catch (err) {
      console.log("Error is :",err.message);
      return res.status(500).json({ message: err.response.data || err.message });
    }
  })
const port = process.env.PORT ;

app.listen(port, () => console.log(`Server running on port ${port}`));

