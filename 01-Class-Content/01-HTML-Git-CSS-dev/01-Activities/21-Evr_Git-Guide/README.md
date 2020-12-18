# Setting Up a Repository with Git 

In this activity, we will walk through setting up a repository using terminal commands and Git version control.

Git is an important tool that allows developers to track and store versions of content.

Git is also an important way to collaborate and share code with others. For the duration of this Bootcamp, we will use Git to share code using a class repository which you will be required to download prior to each class. In addition, for each homework assignment, you will provide a URL link to your GitHub repository containing your code for the grading team. 

This activity will review the terminal commands `mkdir`, `touch`, `cd`, `ls`, `pwd`.

You will also gain familiarity in the use of the Git commands `config`, `clone`, `add`, `commit`, `push`, `pull`, and `status`.

These commands are essential tools that you will use to create a repository, initialize version control on your projects, commit changes to a repository, and pull from a remote repo. 

## Instructions

### Configure Local Git Default Branch to Main

* Let's set the local Git default branch to `main`.

* **Important:** If you have previously configured Git, you do not need to repeat this step!

* GitHub changed the default branch from `master` to `main`. To stay in sync with GitHub, you need to change our local Git configuration to use `main` as the default branch.

* If you are using **macOS**, you must have Git version 2.28 or later installed.

* To check the version you have installed, enter this command in the terminal:

  ```bash
  git --version
  ```

* To update Git, **Mac users** can enter the following Homebrew command: (Note: Window users do not need to do this!)

  ```bash
  brew install git
  ```

* To set the default branch to `main`, both **Windows and Mac users** run the following command in the terminal:

  ```bash
  git config --global init.defaultBranch main
  ```

* You will not get a confirmation message. If the configuration is successful, it will simply return back to the command-line prompt.

### Configure User Name and Password 

* Let's use `git config` to configure your user name and password. 

* To get the most out of Git, we can use `git config` to set our user name and password locally. **Important:** You only need to do this once! 

* Use `git config` to set your user name globally with the following command:

  ```bash
  git config --global user.name "<Your-Full-Name>"
  ```

* Use `git config` to set your email globally with the following command:

  ```bash
  git config --global user.email "<your-email-address>"
  ```

* Check your current Git configurations using `--list`:

  ```bash
  git config --list
  ```

### Create and Clone a Repository

* Let's use `git clone` to create a clone of a remote repository.

* Navigate to [GitHub](https://github.com/) and create a new repository by clicking on the green `new` button at the top left and entering `git-guide-sample` in the `Repository Name` box.  

* Select the "Add a README file" checkbox. The page should look something like the following image:

  ![The GitHub repository creation page allows a user to name, describe, and add a README file.](./assets/image-1.png)

* To prepare to clone the newly created repository to the local machine by clicking the green `Code` button and selecting the HTTPS option. Then, copy the value provided, as the following image shows:

  ![The GitHub repository shows the HTTPS connection for the repo you just created.](./assets/image-2.png)

* Navigate to the Desktop directory in your terminal using the `cd` terminal command. 

  ```bash
  cd Desktop
  ```
* To clone the repo, use the `git clone` command followed by the value copied from GitHub. 

  ```bash
  git clone <url>
  ```

* Once it's done cloning to your machine, navigate to the cloned repository's directory using the `cd` command.

  ```bash
  cd git-guide-sample
  ```

### Add a New File to the Project 

* Let's add an `index.html` file to our newly cloned project.

* To check the working directory, use `pwd` to print the working directory. 

  ```bash
  pwd
  ```

* If you are not already in the `git-guide-sample` directory, use `cd` to navigate to the right project folder.

* Inside the `git-guide-sample` project directory, use `touch` to create a new file.

  ```bash
  touch index.html
  ```

* To list the contents of the project directory, use `ls`. A `README.md` and the newly created `index.html` should appear. 

  ```bash
  ls
  ```

### Add a New Directory to the Project

*  Let's add an `assets` directory to our project. 

* Navigate to the `git-guide-sample` directory, then use `mkdir` to create a new directory named `assets`

  ```bash
  mkdir assets
  ```

*  Use `cd` to navigate to the newly created `assets` directory.

  ```bash
  cd assets
  ```

* Use `touch` to create a `style.css` file.

  ```bash
  touch style.css
  ```

* Navigate back to the main project directory using `cd ..`

  ```bash
  cd ..
  ```

* Use `ls` to list the contents of the project directory. The `assets` directory should now appear on the list.

### Commit Changes in Git

* Let's commit the changes made to the `git-guide-sample` directory to Git.

* To commit a change, we first have to stage it. The `git add` command adds changes to the staging area so they can be committed. We use `git add .` to stage all the changes we made since the last commit.

  ```bash
  git add .
  ```
* To see the project changes to be committed, use `git status`. This will show a list of the files that have been staged.

  ```bash
  git status
  ```
* To commit the changes, use `git commit` and add a commit message. A good commit message should describe the changes made.

  ```bash
  git commit -m "Add index.html and style.css files"
  ```
* If successful, you will receive a message indicating the number of files changed similar to the message below.

  ![The message will indicate the number of files changed.](./assets/image-3.png)

### Pushing Changes to the Remote Repo

Let's push the changes to the remote repository on GitHub.

* Use `git push` to upload changes to our remote repository.  The keyword `origin` refers to the remote repo we created in GitHub and is shorthand for the URL.  The keyword `main` refers to the name of the branch we are uploading to in the remote repo. ```

  ```bash
  git push origin main
  ```

* If successful, you will receive a message similar to the message below:

  ![The message will indicate the number of files changed.](./assets/image-4.png)

* The remote repo on GitHub should also be updated to reflect the changes we made.

  ![The remote repository will update with the committed changes](./assets/image-5.png)

  
### Initialize a New Version-Controlled Project

* Let's initialize a new version-controlled project locally using `git init`.

* Using `git init` allows us to turn a new or existing project into a Git repository easily.

* Start by creating a new project directory named `git-init-sample`.

* Use `cd` to navigate to the Desktop directory and `mkdir` to create a new directory called `git-init-sample`.

  ```bash
  cd Desktop
  mkdir git-init-sample
  ```

* Next, use `cd` to navigate into our new directory and add an `index.html` file using `touch`.

  ```bash
  cd git-init-sample
  touch index.html
  ```

* To initialize version control, use `git init`.

  ```bash
  git init

* If successful, a message reading `Initialized empty Git repository in /Users/<your-user-name>/Desktop/git-init-sample/.git/` should appear.

* Using `git init` adds version control locally to a project, allowing us to track and save changes. It doesn't not create a remote repository.

* To create a remote repository to store your code, navigate to [GitHub](https://github.com/) and create a new repository by clicking on the green `new` button at the top left and entering `git-init-sample` in the `Repository Name` box. This is the same as we did above!

* **Important** Since we are importing an existing repository, do not click any of the checkboxes. The page should look something like the following image:

 ![The GitHub repository creation page allows a user to name, describe, and add a README file.](./assets/image-6.png)

* Click on `Create Repository`. Then copy the code under the header `"…or push an existing repository from the command line"` using the copy icon. The page should look something like this:

  ![The GitHub repository set-up page provides the code to import an existing repository](./assets/image-7.png)

* If successful, you should see a message similar to the one below:

  ![A message indicating that the project directory has been successfully imported](./assets/image-8.png)

### Pull Changes from the Remote Repository

* Let's download changes from a remote repository using `git pull`.

* Prior to each class, it is important that you do a `git pull` to download any changes and activity files from the student repo to your local machine.

* To perform a git pull, first navigate to the project directory using `cd`.

  ```bash
  cd git-init-sample
  ```

* Next, use `git pull` to pull down the changes from the remote.

  ```bash
  git pull origin main
  ```

* Right now, our local is up-to-date with the remote. If that is the case, you will get a message reading `"Already up to date."`. This means no changes were made to your local.

* If the remote has changes that you do not have locally, you will get a message that lists the changes made similar to the one below:

  ![A message indicating that changes have been made from the remote repository](./assets/image-9.png)

* Both messages indicate that the `git pull` command has been successfully performed.

* The changes made, if any, can be viewed by opening the project directory in VSCode.

### Share Remote Repo URL 

* Let's share the URL for the remote repository.

* For each homework, you will be required to share the URL of your repository. To share the URL, navigate to the repository on GitHub. The page should look something like the following image:

  ![A GitHub repository showing URL used to share work with others](./assets/image-10.png)
  
* Copy the URL and share it with your partner in Slack. To view your partner's repo, simply click on the shared link. 

### Hints

* Ask an instructor or TA if you get stuck or have any questions!

* Check the [Atlassian guide on setting up a repository](https://www.atlassian.com/git/tutorials/setting-up-a-repository) for additional information about setting up a repository using `git clone` or `git init`.

* Check the [Atlassian guide on git config](https://www.atlassian.com/git/tutorials/syncing/git-pull) for a more in-depth discussion on using `git config`.

* Check the [Atlassian guide on git pull](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config) for additional information about syncing your repos and using `git pull`.

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
