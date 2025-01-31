
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE IF EXISTS "recipes" CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (255) UNIQUE  NOT NULL
);

CREATE TABLE "recipes" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" ("id"),
    "title" VARCHAR(250) NOT NULL,
    "image_url" VARCHAR (2083),
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "procedure" TEXT NOT NULL
);

--------[ New user info ]-------
INSERT INTO "user" ("username", "password", "email")
 VALUES ('brianw123', '$2a$10$vClybDtTWiUBdbepw.lVu.UsD1QOUUwE7qKebRSrANnJqF9WndVvu', 'brianmw199@gmail.com');

-------[ STARTER RECIPES ]--------

INSERT INTO "recipes" ("user_id", "title", "image_url", "description", "ingredients", "procedure")
VALUES
("$1", "$2", "$3", "$4", "$5", "$6")

