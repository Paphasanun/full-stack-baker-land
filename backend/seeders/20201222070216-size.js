"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Size", [
      {
        name: "1 Pound",
        img_url: "url",
        price: "0",
      },
      {
        name: "2 Pound",
        img_url: "url",
        price: "100",
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Size', null, {});
  },
};
