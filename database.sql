
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255) UNIQUE  NOT NULL
);

CREATE TABLE "recipes" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT  REFERENCES "user",
    "name" text,
    "content" text,
    "image_url" VARCHAR (2083)
);