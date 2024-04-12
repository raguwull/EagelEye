create database myloginapp;

drop table users;

create table users(
    username varchar(255) primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    usertype varchar(255) not null
);

create table exams(
    examid number serial primary key,
)

drop table exams;

CREATE TABLE exams (
    exam_id SERIAL PRIMARY KEY,
    exam_name VARCHAR(255) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    exam_duration INTERVAL NOT NULL,
    proctor_name VARCHAR(255) REFERENCES users(username) ON DELETE SET NULL,
    exam_url VARCHAR(1024)
);


INSERT INTO exams (exam_name, start_time, end_time, exam_duration, proctor_name, exam_url)
VALUES 
    ('Mathematics Midterm', '2024-04-20 09:00:00', '2024-04-20 11:00:00', '2 hours', 'felix123', ''),
    ('Physics Final', '2024-05-15 13:00:00', '2024-05-15 16:00:00', '3 hours', 'felix123', ''),
    ('English Literature Exam', '2024-06-10 10:30:00', '2024-06-10 12:30:00', '2 hours', 'felix123', ''),
    ('Biology Quiz', '2024-07-05 14:00:00', '2024-07-05 15:00:00', '1 hour', 'felix123', ''),
    ('History Final', '2024-08-20 08:30:00', '2024-08-20 10:30:00', '2 hours', 'felix123', '');


CREATE TABLE student_exams (
    student_name varchar(255) REFERENCES users(username) ON DELETE CASCADE,
    exam_id INTEGER REFERENCES exams(exam_id) ON DELETE CASCADE,
    PRIMARY KEY (student_name, exam_id)
);

INSERT INTO student_exams (student_name, exam_id) VALUES
    ('ragul123', 1),
    ('ragul123', 2),
    ('ragul123', 3),
    ('ragul123', 4),
    ('ragul123', 5);


SELECT e.exam_name, e.proctor_name, e.start_time, e.exam_duration, e.exam_url
FROM exams e
JOIN student_exams s ON e.exam_id = s.exam_id
WHERE s.student_name = 'ragul123';
