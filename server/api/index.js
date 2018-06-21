const Router = require('express').Router();

Router.use('/:name', (req, res, next) => {
  const authorName = req.params.name
  const {spawn} = require("child_process");
  const pythonProcess = spawn('python', ["./ernest.py", authorName])

  pythonProcess.stdout.on('data', function (data){
    res.json(data.toString('utf8').trim())
  });

})

module.exports = Router;
