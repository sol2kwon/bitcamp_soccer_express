const db = require('../models/index')
const BoardSchema = db.board
exports.boardform = (req, res) => {
    new BoardSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'})
    })
}
exports.boardlist = (req,res) => {
    console.log('### boardController access ')
    BoardSchema.find()
    .exec((err, board) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success : true, board})
    })
}

