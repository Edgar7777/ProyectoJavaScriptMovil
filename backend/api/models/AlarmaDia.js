/**
 * AlarmaDia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {

     nombreDia:{
       type: 'string',
       required: true
     },

     alarmaIdFK:{//// TODO: alarmaDia es hija de Alarma
       model: 'Alarma'
     },

     diaIdFK:{//// TODO: //AlarmaDia es hija de Dia
       model: 'Dia'
     },

   },

 };
