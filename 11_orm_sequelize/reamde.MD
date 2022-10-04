1- npx sequelize init
2- npx sequelize db:create
3- npx sequelize model:generate --name Photos --attributes title:string,caption:string,image_url:text
4- npx sequelize db:migrate
5- npx sequelize seed:generate --name seeding_photo_datas
6- npx sequelize db:seed --seed 20221003143310-seeding_photo_datas.js
7- npx sequelize migration:generate --name create_foreign_key_userid_for_photos_table
8- npx sequelize db:migrate:undo:all