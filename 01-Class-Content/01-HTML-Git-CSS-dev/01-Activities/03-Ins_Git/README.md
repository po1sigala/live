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

* Explain that while the remote repo is now created, we need to pull down the repository to our machine to make changes to it. 

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

* The `git clone` command creates a new directory. We navigate into our new directory using `cd`.

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

* It is important that we keep our local repo up-to-date. To pull down any changes from the repo we created on Github and update the repo on our local machine, we use `git pull`.

```
git pull
```

## 📝 Notes

Refer to the documentation: 

[Create a Repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo)

[Cloning a Repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

---
 © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
