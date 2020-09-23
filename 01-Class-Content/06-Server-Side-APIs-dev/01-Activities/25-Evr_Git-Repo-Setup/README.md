# GitHub Repository Setup for Collaborative Projects

In this activity, we will walk through how to set up our GitHub repositories for a collaborative application. When working with multiple developers in a single GitHub repository, there are some settings and rules that need to be put in place to ensure the integrity of the codebase. These rules also support the development team by providing comfort in knowing that no one can make changes to the main code in the repository without another developer reviewing first.

> **Important:** Since this is a group-based application, only one person in the group needs to make the repository. That person will invite the other developers to join the repo as a collaborator once they have everything set up.

## Instructions

### Create the Repository and Set Up .gitignore File

* Like all projects, we need to start by making a repository. Navigate to [github.com](https://github.com) and create a new repository for your project. Make sure the option to add a `README.md` file is checked as well. 

* Once the repository has been created, clone it to your machine using `git clone <repository-name>` and open the entire application in Visual Studio Code.

* At the root of the application use Visual Studio Code or the command line to create a file named `.gitignore`. This file will be used to keep a list of files or folders that may end up in the application that we _don't_ want being stored on GitHub.

* Add this single line to the newly created `.gitignore` file:

  ```
  .DS_Store
  ```

* The `.DS_Store` file is a file unique to MacOS that the operating system automatically creates to internally keep track of what a directory's attributes are, so Windows users have likely not encountered this before. This file has no bearing on the actual project code, so it's best to always add it to the `.gitignore` file to ensure it never makes it to the actual GitHub repository.

* Now save your code, commit it, and push it to the `main` branch using these commands:

  ```bash
  git add -A
  git commit -m 'add gitignore file'
  git push origin main
  ```

* Great, now the application is ready for other developers to join in. Before we add those developers, however, let's add some protective measures to repo on GitHub.

### Protect the main Branch

When working alone on a project, it's a safe assumption that any code that is pushed to the `main` branch will come from one course, so it's easy to keep track of who added what code and if it works or not. When working with others, however, there needs to be some rules put in place to keep every developer in sync and in agreement on what code is ready for production. Luckily, GitHub has some features we can add to our repo to keep make staying in sync easier. Let's go and add them now:

* Navigate to the repository on GitHub and select the "Settings" tab for the repo. The resulting page should look like this image:

  ![The GitHub repository's settings page shows options to set for the repo](./Images/01-repo-settings.png)

* Once there, look in the left column's menu and select the option titled "Branches". Once there, find the button in the main content on the right that says "Add Rule" and click it. See the following image to help identify where that button is:

  ![The branch settings page in the repository shows a button to add a rule to a branch](./Images/02-branch-rules.png)

* After clicking the button, a page titled "Branch protection rule" will appear. On this page, we're going to set up our repository so no code can be pushed to the `main` branch by any member of the developer team. All code that is to be merged into the `main` branch MUST be merged through a GitHub Pull Request. Let's add the following to this page:

  * For the "Branch name pattern" input field, enter the branch `main`.

  * Next, check the box next to the option for "Require pull request reviews before merging". It will open another set of options asking if we want multiple reviewers before allowing a pull request to be merged, but we can leave it at just one for now.

  * Finally, check the box next to the option for "Include administrators". This will make it so even the repository owner cannot push to `main` and has to follow all of the same rules as the rest of the developers.

  * Confirm the correct rules are in place by comparing with the following image: 

  ![The branch protection rule page shows all of the options in place to protect the main branch.](./Images/03-branch-rules-done.png)

  * Make sure to click the "Create" button at the bottom of the page. The page will refresh and inform us that our rules have been created.

* Great! Now our repository's `main` branch cannot have code added to it without a pull request and that pull request must be reviewed and approved by at least one other developer on the project. Let's go add those other developers now!

> **Important:** We can still do work locally in the `main` branch, though it's not recommended. The limitation we just put in place is that `git push origin main` will not work anymore. If you have accidentally done work in the local `main` branch and need to push it, you should checkout a new branch for that updated code and push it to that branch on GitHub instead.

### Add Collaborators to the Repository

GitHub allows developers to work together and contribute to a single repository in a few different ways. The way we are going to do it is to set up the repository to know that certain other GitHub users have access to write data to the repository as well as read it. Let's go add these collaborators with the following steps:

* In the GitHub repository's "Settings" page, select the menu item on the left side that says "Manage Access" and a page like this image will appear:

  ![The GitHub repository's settings page shows who has access to read or write to the repository and the option to invite collaborators.](./Images/04-manage-access.png)

* Once the modal dialog opens, start typing in the GitHub username of one of your collaborators and the list should automatically populate that user's entry, as this image shows:

  ![The invite a collaborator modal dialog shows the user that needs to be invited to the repo.](./Images/05-invite-collaborator.png)

* Select the entry and click the "Add <github-username> to <project-repo-name>" button. The updated "Manage Access" page should look like this image:

  ![The manage access page shows there is a pending invitation for a collaborator.](./Images/06-pending-invite.png)

* Now all that user has to do is check their email or visit the repository to get a notification stating they need to accept the invitation. If they don't receive it, which can be known to happen at times, the repository owner can select the small clipboard icon next to the phrase "Pending Invite" to copy the invite link and send it to the collaborator directly.

* This will only handle one collaborator, so repeat the above process for every collaborator on the project.

* Once all of the collaborators have accepted the invite, it's time to get coding! 

### Hints

* Ask an instructor or TA if you get stuck or have any questions!

* Now that the repository is set up, check out what [Git workflow](https://guides.github.com/introduction/flow/) can work for your group. 
