const db = require('../models/index')
const todoSchema = db.todo
exports.addTodo = (req, res) => {
  console.log(' ### 진행 4: 노드서버에 진입함 '+ JSON.stringify(req.body))
  new todoSchema(req.body).save(()=>{
    res.status(200).json({'result':'OK'})
  })
}
exports.getTodo = (req, res) => {
  console.log(`### todoController access ### `)
  todoSchema.find()
  .exec((err, todos) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({ success : true, todos})
    console.log(todos)
  })
}
exports.profile = (req, res) => {
  console.log(`### user profile access ### `)
  todoSchema.find({task: req.params.id})
  .exec((err, todo) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, todo })
  })
}