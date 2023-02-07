//require modules
const express = require("express");
const { index, show, store, update, destroy } = require("../controllers/note-controller");

//express: Router instanse
const router = express.Router();

//router: routes
router.get('/',index);
router.get('/:note',show);
router.post('/',store);
router.put('/:note',update);
router.delete('/:note',destroy);
//module: export
module.exports = router;

/**
 * Routes Naming:
 * index     GET        http://127.0.0.1:5000/api/notes
 * show      GET        http://127.0.0.1:5000/api/notes/{:note}
 * creat     GET        http://127.0.0.1:5000/api/notes/create
 * store     POST       http://127.0.0.1:5000/api/notes
 * edit      GET        http://127.0.0.1:5000/api/notes{:note}/edit
 * updat     PUT        http://127.0.0.1:5000/api/notes/{:note}
 * destroy   DELETE     http://127.0.0.1:5000/api/notes/{:note}
 */