const express = require('express');
const { index , show , store , update , destroy} = require('../controller/notes-controller');

let noteRoutes = express.Router();

/**
 * @httpMethod get
 * @controller note-controller
 * @controllerMethod index
 */
 router.get('/',index);
 /**
  * @httpMethod get
  * @controller note-controller
  * @controllerMethod show
  */
 router.get('/:id',show);
 /**
  * @httpMethod post
  * @controller note-controller
  * @controllerMethod store
  */
 router.post('/',store);
 /**
  * @httpMethod put
  * @controller note-controller
  * @controllerMethod update
  */
 router.put('/:id',update);
 /**
  * @httpMethod delete
  * @controller note-controller
  * @controllerMethod destroy
  */
 router.delete('/:id',destroy);


module.exports = noteRoutes;