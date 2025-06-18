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




<!-- database -->

<!-- docker container for sql -->
docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

<!-- docker container execution -->
docker container exec -it mysql bash

<!-- start mysql inside container -->
mysql -u root -p

<!-- to start stopped container -->
docker start mysql

<!-- mysql2 pool -->
link : https://sidorares.github.io/node-mysql2/docs#using-connection-pools
npm install mysql2

