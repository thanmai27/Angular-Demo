let loggin =function (req,res,next)
{
    console.log("loggin");
    next();
}

module.exports = loggin