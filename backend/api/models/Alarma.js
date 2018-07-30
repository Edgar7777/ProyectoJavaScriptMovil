/**
 * Alarma.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

    module.exports = {

  attributes: {

    horaInicio:{
      type: 'string',
      required: true
    },

    minutoInicio:{
      type: 'string',
      required: true
    },

    horaFin:{
      type: 'string',
      required: true
    },

    minutoFin:{
      type: 'string',
      required: true
    },

    estado:{
      type: 'string',
      required: true
    },

    laserIdFK:{//// TODO: //Alarma es hija de Laser
      model: 'Laser'
    },


    alarmasDias: {//// TODO: //alarma es Padre  de AlarmaDia
      collection: 'AlarmaDia',
      via: 'alarmaIdFK'
    },
  },

};
