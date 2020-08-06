# Deploying with Heroku and MongoDB Atlas

In this guide, we will walk through the steps needed to deploy your application to Heroku with a MongoDB database using MongoDB Atlas.

If you don't have a MongoDB Atlas account, please see our [Mongo Atlas Setup guide.](./MongoAtlas-Setup.md)

## Create a Database on MongoDB Atlas

* Navigate to your [MongoDB Atlas dashboard](https://cloud.mongodb.com) and you'll see something like this image:

  ![The MongoDB Atlas dashboard shows what clusters we've created.](./assets/images-deploy/100-cluster-dashboard.png)

* Once there, you'll need to create a database for your application. Do so by clicking on the "Collections" button that's in your sandbox cluster's box. Upon click, you'll be taken to a page that looks like this image if you haven't previously created a database:

  ![The MongoDB Atlas cluster shows that there are no databases created yet.](./assets/images-deploy/200-collections.png)

* From this page, select the "Add My Own Data" button to open up a modal dialog. If you have already created a database in the past and need to create another one, you will need to click the "+ Create Database" button in the left column of the window pane. The modal should look like this image:

  ![The modal dialog allows users to create a database name and starter collection](./assets/images-deploy/300-create-db.png)

* Fill out the form with the name of your database and a collection to start off with. You only need to create one collection to get started, so don't worry if you think your database will scale up or down at any point.

* When you're done creating your database and initial collection, the dashboard should now display them and resemble this image:

  ![The collections tab shows the database and collection we just created](./assets/images-deploy/400-collections-database.png)

* Great! Now your database has been created. Let's move on to connect it to your application when it's in production.

## Connect Database to Heroku

* In order for us to have our application use our newly created MongoDB Atlas database, we'll need to do two things:

  1. Set up an environment variable in our Heroku application to hold our database's connection string.

  2. Ensure our application's code is set up to look for that Heroku environment variable and if it's not found, connect to our local database instead. This is because that environment variable will only exist in production with Heroku.

### Set Up Environment Variable in Heroku

* To get started, make sure you have a Heroku app created for this project. You can do this by navigating to your application's directory on from the command line and entering the following command:

  ```bash
  heroku create
  ```

* Once you receive confirmation that Heroku successfully created the name space for your application, navigate to that application in your Heroku account through the browser. Do so by going to [Heroku's site](https://heroku.com), logging in, and selecting the application from the list of applications in your account dashboard.

* From your Heroku application, navigate to the "Settings" tab on the right side of the application's menu. The page should look like this image:

  ![The Heroku application's setting tab shows configuration options for our app](./assets/images-deploy/500-heroku-settings.png)

* On this page, you'll see a section titled "Config Vars" with a form to enter key/value pairs. This will be where we add our product database's information. For now, provide the "KEY" field with a name of `MONGODB_URI`. As for the value, let's go fetch the Database connection string from MongoDB Atlas.

* Open your MongoDB Atlas dashboard in another tab in your browser so you don't leave your Heroku page. Once there, locate the button in your cluster's information with a label of "Connect" and click it. If you're having trouble locating it, refer to this image:

  ![The MongoDB Atlas dashboard shows our cluster with a connect button in it.](./assets/images-deploy/600-overview-connect.png)

* Once the connection modal dialog opens you should see presented with three options, like this image shows:

  ![The connection modal presents three options for connecting to our database.](./assets/images-deploy/700-connect-modal.png)

* Since we're looking to connect our database to an application, let's select the second option titled "Connect your application". You'll then see something like this image:

  ![The connection modal now shows instructions for us to connect our database to our application.](./assets/images-deploy/800-connect-app.png)

* From this menu, all we need to do is copy the connection string listed in the second step, so go ahead and click the "Copy" button.

* With the connection string copied, navigate back to your Heroku application settings and paste the it into the "Value" form field.

* We need to update the connection string to include our database name, username, and password. Right now it probably looks like this:

  ```http
  mongodb+srv://<username>:<password>@cluster0.5k55w.mongodb.net/<dbname>?retryWrites=true&w=majority
  ```

* Change it so your username, password, and database name are correct, like this:

  ```http
  mongodb+srv://lernantino-user:password123@cluster0.5k55w.mongodb.net/deep-thoughts?retryWrites=true&w=majority
  ```

* Once your connection string is filled in with your correct information, be sure to click the "Add" button to make sure it's saved. The resulting screen should look something like this image:

  ![The Heroku application's settings now include the Mongo database's connection string as an environment variable.](./assets/images-deploy/900-heroku-configvars.png)

* Great! Now that we have this all set up, last thing we need to do is update our code.

### Update Application Code for MongoDB Connection

* Navigate to your application in VSCode and locate where you connect to your database. Once you find it, update your code so it looks like this:

  ```js
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  ```

* With this code in place, the `mongoose.connect()` command will attempt to use the environment variable first. If it's running on Heroku, it'll find that variable and use it. If it's running locally on your machine, it won't find that variable and fall back to use your local database connection instead.

* That's all! Save your code and use you Git commands to add, commit, and push your code to Heroku.
