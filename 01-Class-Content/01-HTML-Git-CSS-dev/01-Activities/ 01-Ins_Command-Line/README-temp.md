#  Instructor Demo: Command Line (5 min) 

* Open your terminal and demonstrate the following:

* Explain that terminal commands are useful ways to navigate between folders, also called directories, quickly and easily. The commands are entered into the terminal or bash. 

* When we open a fresh terminal window, the working directory is typically the home directory. 

* 🔑 We use `ls` to list the contents of the home directory, including `Desktop`. 

```
ls
```

* 🔑 We use `cd` to change into the `Desktop` directory. 

```
cd Desktop
```

* 🔑  To move back up to our previous directory, we use `cd ..`. 

```
cd ..
```

* 🔑 Explain that in addition to navigating between files and directories, we use terminal commands to create and remove directories and files. 

* 🔑 We start by checking our working directory with `pwd`. When we print the working directory, it shows us the path.

```
pwd
```

* 🔑 Since we want to create our new folder inside the `Desktop` directory, we navigate down one layer using `cd`.

```
cd Desktop
```

* 🔑 Then, we use the `mkdir` command to create a new directory named `demo-folder`.

```
mkdir demo-folder
```

* 🔑 To add a file to our new directory, we use `cd` to navigate into `demo-folder`.

```
cd demo-folder
```

* 🔑 We use `touch` to create a new file inside of `demo-folder`.

```
touch index.html
```

* 🔑 We use `ls` to check that our new file has been succcessfully added to the directory.

```
ls
```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? }

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.
