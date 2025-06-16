-- Create database
create database food_ordering_app_db;

-- use database
use food_ordering_app_db

-- user table
create table users(
    id integer primary key auto_increment,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(50),
    password varchar(100),
    createdTimestamp timestamp default CURRENT_TIMESTAMP
);

-- user address
create table address(
    id integer primary key auto_increment,
    title varchar(20),
    line1 varchar(100),
    line2 varchar(100),
    line3 varchar(100),
    zipcode integer,
    state varchar(20),
    createdTimestamp timestamp default CURRENT_TIMESTAMP
);
