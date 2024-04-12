create database myloginapp;

drop table users;

create table users(
    username varchar(255) primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    usertype varchar(255) not null
);