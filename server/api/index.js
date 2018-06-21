const Router = require('express').Router();

Router.use('/', (req, res, next) => {
  const {spawn} = require("child_process");
  const pythonProcess = spawn('python', ["./ernest.py"])
  console.log('we get here')
  pythonProcess.stdout.on('data', function (data){
    console.log('please?')
    res.json(data.toString('utf8').trim())
  });
  pythonProcess.stdout.on('end', function(){
    console.log('we are done!');
  })
})

module.exports = Router;
