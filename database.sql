
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

INSERT INTO "recipes" ("user_id", "title", "image_url", "description")
VALUES
('Avocado Toast w/ burrata', 'images/Avocado-Toast.jpeg', '1/2 TBS Olive oil, 1ea slice sourdough bread(toasted), 1/2 avocado(diced and seasoned with salt with and lime juice), 1/3 cup cherry tomatoes(lightly roasted), Burrata cheese, Basil leaves for garnish, Assemble:, Spread the avocado on toast, top with the tomatoes, burrata, basil leaves, and drizzle with the olive oil'),
('Baked Potato', 'images/baked-potato.jpeg', '4ea Russet potoes(washed), Oil for coating, salt, 1/4 cup sour cream, 3/4 cup cheddar cheese, 1Tbl chopped chives, cooked bacon(optional), Procedure:, with a fork poke multible holes in the potatoes and, bake potoes at 425 degrees F, for 45-60 minutes until tender, let the pototoes rest for 5 minutes, cut a slit down the middle of each potato and place cheese inside and bake for 5 minutes until cheese is melted, place a dollop of sour cream on each potato, and garnish with the chives '),
('Caesar Salad', 'images/caesar-salad.jpeg', '1ea head of romaine lettuce(washed and chopped into 1/2 inch pieces), 1 cup store bought croutons, caesar dressing, 1/2 cup grated parmesan cheese, Assemble: place lettuce in a large bowl, pour dreesing on top of lettuce, mix together until lettuce is evenly coated, put in the croutons and toss together, top with the parmasean cheese and serve'),
('Tacos', 'images/tacos.jpeg', '1lb ground beef, 1/2 cup finely diced yellow onion, 1pkg taco seasonong, 2TBS minced garlic, 1/2 cup water, 1/2 cup diced tomatoes, 1 cup shredded cheese, 1pkg hard or soft taco shells, Assemble: Cook beef until done about 5-7 minutes, drain beef and in the same pan cook the garlic for 2 minutes, then add the beef, taco seasoning and cook for 2 minutes, stiring constantly, then add the water and cook for another 1-2 minutes, place beef mix in the tortillas and top with the onions, tomatoes and cheese');