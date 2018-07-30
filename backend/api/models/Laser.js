/**
 * Laser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {

     codigoLaser:{
       type: 'string',
       required: true
     },

     nombreLaser:{
       type: 'string',
       required: true
     },

     estado:{
       type: 'string',
       required: true
     },

     usuarioIdFK:{//TODO//Laser tambien es hijo de usuario
       model: 'Usuario'
     },

     seccionIdFK:{ //TODO// laser es hijo de seccion
       model: 'Seccion'
     },

     alarmas: { //TODO// laser tambien es padre de alarmas
       collection: 'Alarma',
       via: 'laserIdFK'
     },

     alertas: {//TODO//laser tambien es padre de alertas
       collection: 'Alerta',
       via: 'laserIdFK'
     },
   },

 };
