
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
( 'Avocado Toast w/ burrata', 'images/Avocado-Toast.jpeg', 
    'A delicious avocado toast with fresh burrata', 
    '1/2 TBS Olive oil, 1 ea slice sourdough bread (toasted), 1/2 avocado (diced and seasoned with salt and lime juice), 1/3 cup cherry tomatoes (lightly roasted), Burrata cheese, Basil leaves for garnish', 
    'Procedure: Spread the avocado on toast, top with the tomatoes, burrata, basil leaves, and drizzle with the olive oil'),
( 'Baked Potato', 'images/baked-potato.jpeg', 
    'A simple roasted potato that is delicious', 
    '4 ea Russet potatoes (washed), Oil for coating, salt, 1/4 cup sour cream, 3/4 cup cheddar cheese, 1 Tbl chopped chives, cooked bacon (optional)', 
    'Procedure: With a fork, poke multiple holes in the potatoes and bake potatoes at 425 degrees F for 45-60 minutes until tender. Let the potatoes rest for 5 minutes. Cut a slit down the middle of each potato and place cheese inside, then bake for 5 minutes until cheese is melted. Place a dollop of sour cream on each potato, and garnish with chives.'),
( 'Caesar Salad', 'images/caesar-salad.jpeg', 
    'Classic Caesar salad', 
    '1 head of romaine lettuce (washed and chopped into 1/2 inch pieces), 1 cup store-bought croutons, 1/2 cup grated parmesan cheese, Caesar dressing', 
    'Procedure: Place lettuce in a large bowl. Pour dressing on top of lettuce and mix together until lettuce is evenly coated. Add croutons and toss together. Top with parmesan cheese and serve.'),
( 'Tacos', 'images/tacos.jpeg', 
    'Just like what Mom used to make', 
    '1 lb ground beef, 1/2 cup finely diced yellow onion, 1 pkg taco seasoning, 2 TBS minced garlic, 1/2 cup water, 1/2 cup diced tomatoes, 1 cup shredded cheese, 1 pkg hard or soft taco shells', 
    'Procedure: Cook beef until done, about 5-7 minutes. Drain beef and in the same pan cook garlic for 2 minutes. Then add beef, taco seasoning, and cook for 2 minutes, stirring constantly. Add water, cook for another 1-2 minutes. Place beef mixture in tortillas and top with onions, tomatoes, and cheese.');