# Git Branch

How many times have we been writing code, only to discover that we made a mistake earlier and we wish we could just go back to where we were earlier? But maybe we or one of our colleagues wrote some really great along the way code that we don't want to lose. Luckily, git branching allows us to avoid scenarios like this and offers an easier way to fix problems when they do arise.

Branching is one of the most powerful and useful tools that git has to offer and will likely be a part of the everyday development process in your career as a developer. Whenever you need to fix a bug or build a new feature, you will create a new branch to make your changes.

When we create a new branch to work on, we are creating an isolated environment to write and test code for a specific feature. We are free to make mistakes while working on the feature without messing up the hard work that we've put into our main code base. This way, we always have the option to return to an earlier version of our work without losing everything. Once our work is complete, we can merge the branch with the main code base and move on! 

Branching is also a powerful tool for collaboration. It allows a team of developers to work on separate features at the same time while minimizing conflicts. If a colleague asks for your help with a feature that they are working on, you can easily switch to their branch to check out their code. In addition, we can have colleagues review our code to make sure that it works before merging it with the main code base.

In this activity, we will introduce the concept of branching by using git commands to create a new branch, complete a feature in the new branch, merge the branch with main, and close the branch when we are all done. 

## Instructions

### Create a new directory and repository

* Navigate to a directory where you usually store your coding files using your command line.

* Create a new directory called `git_branch_demo`. We could create a new repo in Github as well, but since we are working locally for this activity, we can skip that step and instead issue the following command in the terminal:

  ```bash
  mkdir git_branch_demo
  ```

* Now use the `cd` command to navigate into the newly created directory and initialize an empty git repo in the directory with this command:

  ```bash
  cd git_branch_demo
  git init .
  ```
  
* Open the `git_branch_demo` directory in VS Code.

### Create a new branch

* Now that we are ready to create our first feature, we need to create a new branch. Remember, our goal is to avoid working in the main branch, so that we are free to make mistakes on our new feature without damaging code that is already working.

* The git command for creating a new branch in your repo is `git branch feature/<feature-name>`. It is helpful to pick a name that is associated with the feature that you will be working on. `feature/` reminds us that each branch is dedicated to a specific feature. `<feature-name>` is the name of the feature that we will be working on. In our case, we will be creating a README.md file, so we will call it `create-readme`:

```bash
git branch feature/create-readme
```

### Switch to the new branch

* The git command `git branch` allows us to see a list of existing branches. Run the following in your terminal so that we can confirm that the `feature/create-readme` branch was created.

```bash
git branch
```

* You should see the `feature/create-readme` branch and a `*` next to `main`. That tells us that we are still on the main branch. If our repo includes a long list of branches, we may need to press the `q` key in order to exit the list.

![](./images/git_branch.png)


* We've created a branch, but we are still in `main`. How do we get into to the branch we just created? We can type `git checkout feature/create-readme` to switch from `main` to the new branch, followed by the `git branch` command to confirm that we've switched branches. 

```bash
git checkout feature/create-readme
git branch
```

* We should now see a `*` by `feature/create-readme`.

![](./images/switch_branch.png)

> Important: We also have the option to create a branch and switch over to it at the same time by entering `git checkout -b <branch-name>` into the terminal.

### Complete feature while on branch

* Now that we are on the correct feature branch, we need to work on the feature. Create a README.md file in the `git_branch_demo` directory.

![](./images/README.png)


* Add some text to the README.md file.

![](./images/Text.png)


* Finally, add and commit the changes that you made.

 ```bash
  git add .
  git commit -m "Created README.md and added text to the file"
  ```

### Merge feature branch to main branch

* Now that the feature is complete, we can merge the feature branch with `main`. First, we need to switch back to `main` from `feature/create-readme`. Remember, it's always a good idea to confirm that you are on the correct branch using the `git branch` command.

```bash
git checkout main
git branch
```

>Important: Git won't let you switch to a different branch until you have added, committed, and pushed any changes that you made to your feature branch. If you try to switch without pushing your code, git will send you a reminder to push the changes that you made before switching branches.

* Once we are in `main`, notice that we no longer have a README.md file in the directory. What happened? `main` is currently behind `feature/create-readme` and we still need to merge the feature branch with the main code base. To merge, add the following code to your terminal:

```bash
git merge feature/create-readme
```

* If the merge is successful, we should see something similar to the following in the terminal.

![](./images/merge.png)


* Now, the directory should include the README.md file that we created along with whatever text we added to the file. We asked git to merge the code that we wrote in the feature branch with the code that already existed in `main`. Now, our new feature is a part of the main code base.

![](./images/merge_success.png)

### Delete the branch

* We are all done with our feature and the code that we wrote safely exists in `main`. But, if you type the `git branch` command into your terminal, you'll see that `feature/create-readme` still exists. Why might this be a problem?

![](./images/Still_exists.png)

* You can imagine that we could potentially generate a huge list of feature branches while working on a large project. While we don't have to delete a branch, it is good practice to close a branch once a feature is completed and merged to avoid confusion and to stay organized. Since we are finished with this feature and our code is now included in `main`, we no longer need the isolated environment that the feature branch made available to us. If we do discover a problem with our feature in the future, we can always open another branch to fix the problem. For now, we can safely close the feature branch by issuing the following command in the terminal:

```bash
git branch -d feature/create-readme
```

* When we run `git branch`, we should see something similar to the following:

![](./images/branch_deleted.png)

* Congratulations, we have now completed our first branch lifecycle! We successfuly created an isolated environment on a new branch so that we could write and test code for a new feature, a README.md file. Once we were finished adding text to README.md, we merged the feature branch with our main code base on `main`. Once our feature was successfully merged, we then closed the feature branch, since we no longer needed to do work on the README.md file. 

### Hints

* You will come up with your own naming conventions for branches when you're working on your own project. It's helpful to include a reference to the feature that you will be working on in the branch. Try to be descriptive but concise to help other developers (or your fututre self) understand what is happening in each branch. 

* Popular tactics in the field include `feature/<feature-name>`, `issue/<issue-reference>`, etc. So it is a good diea to practice these conventions while you're learning. 

* Whichever convention you choose, do stay away from including your own name in the branch name because multiple developers might end up working in the same branch.
    * Do:   `git branch user-login-page`
    * Don't:   `git branch rachels-feature`

* More information can be found in [these tutorials on branching.](https://www.atlassian.com/git/tutorials/using-branches)


---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
