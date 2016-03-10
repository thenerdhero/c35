# c35 NodeJS+PostGres Backend Starter

##Introduction
This repo is designed to demonstrate a nodeJS backend. The idea is looking at the examples in this repo to help you build out your own to support your application. The design is explained in more detail below but set up so you don't need to completely understand how it works to get your application up and running. But we challenge you to understand the code, try to improve it, or maybe add tests!

##Getting things up and running

To get setup the project in cloud9 you will need to do the following:

1. Create a new workspace. Fill out the details and make sure to put the github url in **"Clone from Git or Mercurial URL"** and it doesn't matter which project template you choose.

2. After you create the project, the c35 project should be the top level directory. Go to Window -> New Terminal. If you type `ls` you should see the `/backend` and `/frontend` folders. Let's run `cd backend`

3. In this folder you need to run `npm install`. This command will install all the dependencies listed in the package.json file into `/node_modules`. Please do not modify files in this folder and if you want to learn more about [package.json information](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json) you should!

4. You will need to have a `config.js` in your `/backend` directory. **You do not need to worry about this. We will provide you with this file.** This file will need to look like the following: 
>```javascript
>'use strict';
>
>const heroku = {
>	DATABASE_CONNECTION_URL : "postgres://username:password@heroku-postgres-host:heroku-postgres-port/heroku-database-name?ssl=true"
>};
>
>module.exports = heroku;
>```

5. Now you should be able to start the application by running: `node app.js` or `npm start` inside of the `/backend` folder. **It is important that you run these commands inside this folder.** The application has some relative urls that depend on the command running on in this directory.

##Building your backend 
This is an explaination about how to use the set up here to make your backend work. The folder structure a little non conventional because you might not neccessarily name everything the same name in a project. I would encourage you to follow this format to make things easier as a mental model for your team to follow. After you have the project up and running then to try playing around with the structure of things. Ultimately your folder structure and code organization should be what makes the most sense for your team. 

###Starting with the `/frontend` directory:

In here you can put all your html, css, and javascript in the respective directories. To start, keep these directories flat and not creating sub directories inside `/html`, `/css`, or `/js`. If you want to add subdirectories you will have to make sure you understand how that affects the references in your backend code.
w
###Making a router 

We created a directory called `/routers` were you can create routers for the different html pages. The idea is that every router will have the single responsibilty for each page. When you create a router you will need to use the `router.get('route', callbackFn())` or `router.post('route', callbackFn())` to make the backend serve your html page, results from a database query, or inserting data into the database. Examples of this are seen in `routers/helloworld.js` and `routers/trainsList.js`

###The database

There are two files `postgres_trains_remote_example.sql` and `postgres_trains_local_example.sql` that will help setting up your database. There are instructions in each of the files on how to run them. 

The difference between these files is one will help you set a database that exists on cloud9 and the other will set up the database that we have set up for you on heroku. For development you are going to want to set up the local database. The remote database will be used for your database in production. By production we mean the site that your client will go to see your final product. 







