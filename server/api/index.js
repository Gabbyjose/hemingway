const Router = require('express').Router();
const childProcess= require("child_process")

Router.use('/begin', (req, res, next) => {
  console.log('here we are')
  const {spawn} = childProcess
  const pythonProcess = spawn('python', ["./markov.py"])
  pythonProcess.stdout.on('data', (data) => {
    res.json('complete')
  })
})

Router.use('/:name', (req, res, next) => {
  const authorName = req.params.name
  const {spawn} = childProcess
  const pythonProcess = spawn('python', ["./ernest.py", authorName])
  pythonProcess.stdout.on('data', function (data){
    res.json(data.toString('utf8').trim())
  });
})

module.exports = Router;
