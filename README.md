# food-ordering-app

<!-- careate app1 -->
mkdir app1
cd app1

<!-- create server.js -->
touch server.js

<!-- install express -->
npm install express -y





<!-- database -->

<!-- docker container for sql -->
docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

<!-- docker container execution -->
docker container exec -it mysql bash