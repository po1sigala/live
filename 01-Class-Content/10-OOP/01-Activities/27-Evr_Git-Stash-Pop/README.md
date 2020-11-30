# Git Stash

As a developer you have been using Git for some time. We have been adding tools to our belt every week, and this week is no different. In this unit, we will be discussing the very useful `git stash` feature.

Imagine you are working on a project implementing a sign up component for your web app. Your manager interrupts you and asks you to stop what you are doing and add a notification to the home page. This requires checking out a different feature branch. You are now presented with a problem where when don't want to commit your half-completed work on sign up page, but you also want to avoid any errors by trying to check out a different branch with unsaved changes. This is where `git stash` comes in handy.

You might be wondering what `git stash` is, or maybe you have used it already. Either way, lets take a look at the official definition:

```
git-stash - Stash the changes in a dirty working directory away
```

This means your `tracked` and `staged` changes will get added to a stack which you can then apply later. The stack that it gets applied to is stored locally on your machine and doesn't get pushed up to Github or any other version control system.

## Git Stash

1. Create a repository and add a `README.md` file.

```sh
mkdir stashPop && cd stashPop && git init
```

2. Run the code below to create a `README.md` file and then stage and commit the changes to establish our `master` branch.

```sh
echo contents > README.md && git add . && git commit -m "inital commit"
```

3. Checkout a new branch called `dev` and create a new file.

```
git checkout -b dev && echo contents > newFile.js
```

4. Now we will stage `newFile.js` and commit it with the message "newFile is tracked in dev"

```sh
git add newFile.js && git commit -m "newFile is tracked in dev"
```

5. Now that we have a `newFile.js` that is being tracked in the `dev` branch, lets go ahead and checkout to master.

```sh
git checkout master && ls
```

6. Notice we don't have a `newFile.js` in master, so lets create one.

```sh
echo contents > newFile.js
```

7. Now lets say we wanted to checkout to `dev` again. Notice the error message given after running the following command:

```sh
git checkout dev
```
   *  **Note:** This happens because we have a file that would be overwritten by the checkout.

1. Here we can use `git stash` to put away our changes so that we can checkout the `dev` branch. The `-u` flag tells git to include untracked files in our stash.

```sh
git stash -u
```

9. Finally, we can checkout to dev

```sh
git checkout dev
```

## Additional Actions
* `git stash pop` - Pull your stashed changes off the stack and apply them

* `git stash drop` - Delete the latest stash from the stack

* `git stash apply` - Apply your stashed changes, but also keep a copy in the stack

* `git stash clear` - Clear all stashed entries from the stack

## Review
You have used the `git stash` command to set aside some untracked files so that you could checkout a different branch. The most common use case for the stash command will likely be when you are working with a group and preforming a `git pull`. Armed with some additional knowledge you should be ready to use this powerful command.