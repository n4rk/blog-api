'use strict';
const User = require('../repositories/users');
const Tag = require('../repositories/tags');
const Article = require('../repositories/articles');
const faker = require('faker');

var userData = [];
var tagsData = [];
var articlesData = [];
var articleTagsData = [];
var commentsData = [];

function pickRole() {
  let x=Math.floor(Math.random()*3);
  if(x==0) return 'Admin';
  if(x==1) return 'Author';
  if(x==2) return 'Guest';
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 20 utilisateurs créés entre 2000 et 2021
    for(let i=0;i<20;i++) {
      var year=Math.floor(Math.random() * 20) + 2000;
      var month=Math.floor(Math.random() * 12) + 1;
      userData.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: pickRole(),
        createdAt: faker.date.between('2000-01-01', '2021-12-31'),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('users', userData, {});

    // 10 tags constitués chacune de trois mots aléatoires
    for(let j=0;j<10;j++) {
      tagsData.push({
        name: faker.lorem.words(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('tags', tagsData, {});

    // Chaque utilisateur aura créé au moins 2 articles et au plus 5 articles
    const allUsers = await User.getAllUsers();
    let rand = faker.datatype.number({min:2, max:5});
    for(let k=0; k<rand;k++) {
      for(let l=0; l<allUsers.length; l++) {
        articlesData.push({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(),
          published: Math.floor(Math.random()*2),
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: allUsers[l].id
        });
      }
    }
    await queryInterface.bulkInsert('articles', articlesData, {});

    const allTags = await Tag.getAllTags();
    const allArticles = await Article.getAllArticles();
    // Chaque article est taggé avec entre 2 et 6 tags
    for(let m=0; m<allArticles.length; m++) {
      let rnd = faker.datatype.number({min:2, max:6});
      for(let n=0; n<rnd; n++)
      articleTagsData.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        ArticleId: allArticles[m].id,
        TagId: allTags[n].id
      });
    }
    await queryInterface.bulkInsert('articletags', articleTagsData, {});

    // Chaque article est commenté avec entre 0 et 3 commentaires
    let rndm = faker.datatype.number({min:1, max:3});
    for(let o=0;o<allArticles.length;o++) {
      for(let p=0;p<rndm;p++) {
        commentsData.push({
          content: faker.lorem.paragraph(),
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: allArticles[o].id,
          UserId: allArticles[o].UserId
        }); 
      }
    }
    await queryInterface.bulkInsert('comments', commentsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('articles', null, {});
    await queryInterface.bulkDelete('articletags', null, {});
    await queryInterface.bulkDelete('comments', null, {});
  }
};