const express = require('express');
const axios = require('axios');

var request = require('request');

// exports.usecheck = (req,res) =>
// {
//     axios({​​​​​​​​
//         method:'post',
//         url:`https://www.facebook.com/v9.0/dialog/oauth?client_id=${process.env.client_id}&redirect_uri=${process.env.redirect_uri}&scope=public_profile,email`,
//         headers:{​​​​​​​​
//         accept:"application/json"
//             }​​​​​​​​
//         }​​​​​​​​).then( response=>{​​​​​​​​
//         res.send(response.data)
//          }​​​​​​​​)
// }
  


exports.usecheck = (req,res) =>
{
  
//res.send("welcome")

var options = {
  'method': 'get',
  'url': `https://www.facebook.com/v9.0/dialog/oauth?client_id=${process.env.client_id}&redirect_uri=${process.env.redirect_uri}&scope=public_profile,email`,
  'headers': {
    'accept':"application/json"  }
};
request(options, function (error, response) {
  if (error)
  {
    throw new Error(error);
  } 
  else
  {
    res.send(response);
  }
});

}



