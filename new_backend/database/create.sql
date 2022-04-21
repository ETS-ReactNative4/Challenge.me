/*  Note that this is merely a copy of what was ran in mysql to show off the schema */
USE challengeme; 

CREATE table user (
id int auto_increment not null,
first_name text,
last_name text,
username text,
gender text,
password_hash text,
points int,
primary key(id)
);

create table challenge (
id int auto_increment not null,
description text,
points int,
primary key(id)
);

create table user_to_challenge (
user_id int not null,
challenge_id int not null,
completed bool,
primary key(user_id,challenge_id),
foreign key(user_id) references user(id),
foreign key(challenge_id) references challenge(id)
);