// 'use strict';
// const faker = require('faker');

// function pickRole() {
//   let x=Math.floor(Math.random()*3);
//   if(x==0) return 'Admin';
//   if(x==1) return 'Author';
//   if(x==2) return 'Guest';
// }

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     var data = [];
//     for(let i=0;i<20;i++) {
//       data.push({
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//         role: pickRole(),
//         createdAt: new Date(),
//         updatedAt: new Date()
//       });
//     }
//     await queryInterface.bulkInsert('users', data, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('users', null, {});
//   }
// };