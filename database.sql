
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
    "title" VARCHAR(250) NOT NULL,
    "image_url" VARCHAR (2083),
    "description" TEXT NOT NULL
);


-------[ STARTER RECIPES ]--------

INSERT INTO "recipes" ("title", "image_url", "description")
VALUES
("Avocado Toast w/ burrata", "images/Avocado-Toast.jpeg", "1/2 TBS Olive oil, 1ea slice sourdough bread(toasted), 1/2 avocado(diced and seasoned with salt with and lime juice), 1/3 cup cherry tomatoes(lightly roasted), Burrata cheese, Basil leaves for garnish, Assemble:, Spread the avocado on toast, top with the tomatoes, burrata, basil leaves, and drizzle with the olive oil")