
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (255) NOT NULL,
    "clearance_level" INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE "workout_history" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" UNIQUE NOT NULL,
    "duration" INTEGER,
    "date" DATE NOT NULL,
    "notes" VARCHAR (100)
);

