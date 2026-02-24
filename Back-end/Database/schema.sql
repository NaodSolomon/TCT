CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255),
  profession VARCHAR(255),
  password VARCHAR(255),
  username VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE authTable (
id Serial FOREIGN Key,
username VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
token VARCHAR(64)
);