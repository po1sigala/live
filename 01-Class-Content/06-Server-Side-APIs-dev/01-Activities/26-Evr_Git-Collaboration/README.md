# Git Collaboration Flow

In this activity, we will walk through a situation to learn how to effectively collaborate with other developers on a web application that is hosted on GitHub. When working with a team, it's crucial for all members of the team to agree upon a workflow that ensures both the team's happiness the application's integrity. In web development, this workflow typically revolves around the use of Git and GitHub.

Having multiple developers work with code in a single repository can be hectic. To avoid conflict, developers 

## Instructions

### Create a New Feature Branch
Github allows us to create multiple branches off of our `main` branch. This gives us a way to test multiple different features at a time. By doing this we can have multiple people working on a project without breaking our `main` branch.

* In your command line clone the repository you want to add your feature too using `git clone https://github.com/parkerfoshay/super-team-project.git`.

* Once you have cloned the repository you want work on it is time to change directories with the command `cd super-team-project`

* You should now be inside your repository's directory. Now we have to create a new branch on this repository in order to work for our changes not to effect the `main` branch. to do this enter the command below:

<code>
git checkout -b test_feature
</code>

* In the command line you should see:

[testBranchExample]


### Commit Changes to Feature Branch and Test Locally

* Once we have made changes to the `test_feature` branch it is time to make sure your project still runs locally.

* If your project and its new feature is running as intended, save those changes to the `test_feature` branch. We do that with the following command:

<code>
git commit -am "This is commiting the changes I made loclly"
</code>

* We have now commited the changes locally. This will not be shown on Github yet.

### Push Feature Branch and Open Pull Request

* When you are happy with your new feature and you have tested it heavily, it is now time to open a pull request.

* Before we can make a pull request on Github, we first need to push our new feature to Github. The following command allows us to do that:

<code>
git push origin super_feature
</code>

* After pushing your branch you should see something similar to this in your command line:

[imageOfSuccessfullPush]

* With our `super-feature` branch now on Github, it is time for us to open a pull request. A pull request will let your team members know you are ready to implement the new `super_feature` to the `main` branch.

* Navigate to the `super_feature` branch on Github by going to your repository page. Once on your repository's Github page, look for the dropdown menu called `main`. Click it and you should see the branches off your `main` branch. Click `super_feature`.

[navigateToSuperFeature]

* Once we have chosen the correct branch, a green button should appear with the label "Compare & pull request".

[ComparePullRequest]

* When creating a pull request it is best practice to be as descriptive as possible. It is important to let you team know exactly what you changed. 

* It is time to hit the "create pull request" button so it can be reviewed.

**Important:** Before sumbitting a pull request, make sure you are comparing your branch to `main`.

### Review Pull Request

### Merge Feature Branch and Close Pull Request

### Hints

* Ask an instructor or TA if you get stuck or have any questions!

* Check the [guide on GitHub flow](https://guides.github.com/introduction/flow/) for reference.
