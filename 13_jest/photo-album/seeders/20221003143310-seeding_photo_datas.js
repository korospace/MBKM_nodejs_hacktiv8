'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos',[{
      UserId:6,
      title:"gambar 1",
      caption:"ini gambar 1",
      image_url:"https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId:6,
      title:"gambar 2",
      caption:"ini gambar 2",
      image_url:"https://images.unsplash.com/photo-1664730302624-3cba2a181006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
