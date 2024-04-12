create database myloginapp;

drop table users;

create table users(
    user_name varchar(255) primary key,
    user_email varchar(255) not null,
    hashed_password varchar(255) not null
);

insert into users(user_name, user_email, hashed_password) values ('ragul123', 'ragul@gmail.com', 'password');