-- Create database
create database food_ordering_app_db;

-- use database
use food_ordering_app_db

-- user table
create table users(
    id integer primary key auto_increment,
    firstName varchar(30),
    lastName varchar(30),
    email varchar(50),
    password varchar(100),
    profileImage varchar(100),
    isActive int(1) default 1,
    createdTimestamp timestamp default CURRENT_TIMESTAMP
);

-- user address
create table addresses(
    id integer primary key auto_increment,
    userId integer,
    title varchar(20),
    line1 varchar(100),
    line2 varchar(100),
    line3 varchar(100),
    zipcode integer,
    state varchar(20),
    isDeleted int(1) default 0,
    createdTimestamp timestamp default CURRENT_TIMESTAMP
);
