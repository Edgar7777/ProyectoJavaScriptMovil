/**
 * Seccion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     descripionSeccion:{
       type: 'string',
       required: true
     },

     lugarIdFK:{//TODO//lugar es su padre
       model: 'Lugar'
     },

     lasers: {//// TODO: laser es hijo de secciòn
       collection: 'Laser',
       via: 'seccionIdFK'
     },
   },

 };
