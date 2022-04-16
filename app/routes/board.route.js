const { boardform,boardlist } = require('../controllers/board.controller');
module.exports = x => {x.app.post(`${x.url}/board-form`, boardform)
                       x.app.get(`${x.url}/list`, boardlist)} ;
