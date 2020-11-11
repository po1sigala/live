# Instructor Guide - Create a New Github Repository

This demo introduces the students to creating a new Github repo and the following git commands:

* `git clone` 

* `git add .`

* `git commit -m` 

* `git push`

* `git pull`

## Directions

* Explain that as developers, it is important to be able to store and manage code as well as share it with others. In this class, we will be using a tool called Github. 

* Open [Github](https://github.com/) in your browser. 

* Note that in this class, we will share code in repositories using Github.

* Click on the `new` button to demonstrate how to create a new repository.

* Give the new repository the name `first-day-demo`.

* Click on `add README` to add a README.md file. 

* Click on `create repository`.

* Explain that while the repo is now created, we need to pull down the repository to our machine to make changes to it. 

* Click on the `code` button and grab the HTTPS option under clone. 

* Open up a terminal on your machine. 

* We use the terminal command `cd` to navigate to the directory where we want the repository located. 

```
cd Desktop
```

* We use the git command `git clone` followed by the URL copied from Github to clone the repo to our machine. 

```
git clone <url>
```

* Explain that `git clone` creates a new directory with the name of your repo.  

* We navigate into our new directory using `cd`.

```
cd first-day-demo
```

* We add an HTML file to our repo using `touch`.

```
touch index.html
```

* We use `git add` to add our changes.

```
git add .
```

* To commit our changes, we use `git commit -m` and add a message. 

```
git commit -m "First commit"
```

* To push our changes back up to the repo we created on Github, we use `git push`.

```
git push origin main
```

* Show the students that the remote repo has been updated with the new `index.html` file.

* Stress that as developers it is important to regularly commit their work using the commands we just learned.

* Explain that in addition to using Github to share projects, we will also be using a shared class repo. This repo will contain the class activities. A URL of that repo should have been provided in welcome materials.

* Note that the students can use `git clone` to clone that repo, just as practiced above.

* Also, stress that they will not be adding or commiting changes to the group repo! However, they will be using another git command.

* Using the repo just made above, demonstrate how to `git pull` to fetch and merge changes found in the remote repo.

```
git pull
```

* The `git pull` command will pull down the activities we will use each class. Always remember to `git pull` before class! 

## 📝 Notes

Refer to the documentation: 

[Create a Repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo)

[Cloning a Repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

---
 © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
