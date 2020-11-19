# Git Stash

As a developer you have been using Git for some time. We have been adding tools to our belt every week, and this week is no different. In this unit, we will be discussing the very useful `git stash` feature.

Imagine you are working on a project implementing a sign up component for your web app. Your manager interrupts you and asks you to stop what you are doing and add a notification to the home page. This requires checking out a different feature branch. You are now presented with a problem where you don't want to commit your half-completed work on the sign up page, but you also want to avoid any errors by trying to check out a different branch with unsaved changes. This is where `git stash` comes in handy.

You might be wondering what `git stash` is, or maybe you have used it already. Either way, let's take a look at the official definition:

```text
git-stash - Stash the changes in a dirty working directory away
```

This means your uncommitted changes will get added to a stack which you can then apply later. The stack that it gets applied to is stored locally on your machine and doesn't get pushed up to Github or any other version control system.

## Git Stash Example

Create a new repository called `stashPop` using the following commands:

```sh
mkdir stashPop
cd stashPop
git init
```

Create and commit a new `README.md` file with the following commands:

```sh
touch README.md
git add .
git commit -m "initial commit"
```

Checkout a new branch called `dev` and create a new file with the following commands:

```sh
git checkout -b dev 
touch newFile.js
```

Add and commit the new file with the following commands:

```sh
git add newFile.js
git commit -m "newFile is tracked in dev"
```

Now that we have a `newFile.js` file that is being tracked in the `dev` branch, let's checkout to master and verify the files with the following commands:

```sh
git checkout master
ls
```

Notice that we don't have a `newFile.js` file in `master`, so let's create one with the following command:

```sh
touch newFile.js
```

Let's say we're not ready to commit this file to `master` yet, but we need to switch to the `dev` branch again. Try to do so with the following command:

```sh
git checkout dev
```

Git will prevent you from switching branches, displaying the following error message:

```text
error: The following untracked working tree files would be overwritten by checkout: newFile.js
Please move or remove them before you switch branches.
Aborting
```

This happens because we have a conflicting file (`newFile.js`) that would be overwritten by the checkout. Git will only try to merge files that are being tracked.

This is when we can use `git stash` to put away our changes so that we can checkout the `dev` branch. Run the following commands to see what happens:

```sh
git stash -u
ls
```

The `-u` flag tells Git to include untracked files in our stash. `newFile.js` has now been put away. This means we can safely checkout to `dev` with the following command:

```sh
git checkout dev
```

Don't worry, the stash isn't lost. We can use additional commands to bring those changes back. Run the following commands to see this in action:

```sh
git checkout master
git stash pop
```

The command `git stash pop` will pull the latest stash off the stack and reapply its changes. Other useful `stash` commands include the following:

  * `git stash drop` - Delete the latest stash from the stack

  * `git stash apply` - Apply your stashed changes, but also keep a copy in the stack

  * `git stash clear` - Clear all stashed entries from the stack

## Review

You have used the `git stash` command to set aside some untracked files so that you could checkout a different branch. The most common use case for the `stash` command will likely be when you are working with a group and performing a `git pull`. Armed with some additional knowledge you should be ready to use this powerful command.
