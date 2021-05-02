'use strict';

const workouts = require('../mocks/workouts');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workouts', workouts.items, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts', null, {});
  }
};
