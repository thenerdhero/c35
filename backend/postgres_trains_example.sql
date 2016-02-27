-- This .sql is for setting up your trains table in the database for the example code to work.
-- You can execute the following commands in your terminal filling in the values like <password>
-- before executing them:

-- export PGPASSWORD=<password>
-- psql -h <host> -d <database> -U <user_name> -p <port> <path to postgres_trains_example.sql file>

create table if not exists trains (
  id serial primary key,
  name text,
  inService boolean,
  numberOfAvailable int
);