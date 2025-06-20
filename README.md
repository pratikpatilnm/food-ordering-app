# food-ordering-app

<!-- careate app1 -->
mkdir app1
cd app1

<!-- create server.js -->
touch server.js

<!-- install express -->
npm install express -y

<!-- install crypto-js -->
npm install crypto-js

<!-- install nodemailer -->
npm install nodemailer

<!-- install jsonwebtoken -->
npm install jsonwebtoken


<!-- database -->

<!-- docker container for sql -->
docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

<!-- mysql2 pool -->
link : https://sidorares.github.io/node-mysql2/docs#using-connection-pools
npm install mysql2

<!-- docker container execution -->
docker container exec -it mysql bash

<!-- to start stopped container -->
start mysql

<!-- start mysql inside container -->
mysql -u root -p

<!-- use database -->
use food_ordering_app_db;

<!-- show tables -->
show tables;

<!-- show users table -->
SELECT * from users;
