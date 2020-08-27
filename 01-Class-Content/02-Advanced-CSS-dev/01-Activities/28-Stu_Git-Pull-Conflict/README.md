# Git Pull and Merge Conflicts

In this activity, we will walk through a situation to learn about merge conflicts and how to handle them using Git and GitHub. Merge conflicts are when one version of your project looks one way and another version looks slightly different, causing Git to prompt us to address and confirm which version is correct so we can move on.

## Instructions

* Navigate to your GitHub account and create new repository on GitHub called `conflict-resolution`. Make sure it's created with a `README.md` file by selecting the "Add a README file" checkbox. The page should look something like this image:

  ![The GitHub repository creation page allows a user to name, describe, and add a README file.]()

* Now let's clone the newly created repository to our local machine. You can start to do so by clicking the green "Code" button, selecting the "SSH" option, and copying the value provided, as this image shows:

  ![The GitHub repository shows the SSH connection string for the repo you just created.]()

* To perform the clone operation, you'll need to use the `git clone` command from your command line. Make sure you've navigated to the location you want your repository to be cloned to using the `cd` command, and then clone the repo with this command:

  ```bash
  # replace the last value with the one you copied from your GitHub repository
  git clone git@github.com:lernantino/conflict-resolution.git
  ```


### Hints

* Ask an instructor or TA if you get stuck or have any questions!

* Check the [Git Revert Docs](https://git-scm.com/docs/git-revert) for reference.
