# Instructor Guide - Use Terminal Commands to Create Folder and File

This demo introduces the students to the following terminal commands:

* `ls`

* `cd` 

* `pwd`

* `mkdir` 

* `touch`

* `rm`

## Directions

* Explain that terminal commands are useful ways to navigate between folders, also called directories, quickly and easily. The commands are entered into the terminal or bash. 

* Open the terminal on your computer.

* When we open a fresh terminal window, the working directory is typically the home directory. 

* We use `ls` to list the contents of the home directory, including `Desktop`. 

* We use `cd` to change into the `Desktop` directory. 

```
cd Desktop
```

* To move back up to our previous directory, we use `cd ..`. 

* Explain that in addition to navigating between files and directories, we use terminal commands to create and remove directories and files. 

* We start by checking our working directory with `pwd`. When we print the working directory, it shows us the path.

* Since we want to create our new folder inside the `Desktop` directory, we navigate down one layer using `cd`.

```
cd Desktop
```

* Then, we use the `mkdir` command to create a new directory named `demo-folder`.

```
mkdir demo-folder
```

* To add a file to our new directory, we use `cd` to navigate into `demo-folder`.

```
cd demo-folder
```

* We use `pwd` to print the working directory. This will show us our current path. 

* We use `touch` to create a new file inside of `demo-folder`.

```
touch index.html
```

* We use `ls` to check that our new file has been succcessfully added to the directory.

* To remove the file, we use `rm`.

```
rm index.html
```

* To remove the `demo-folder` we just created, we have to use `cd..` to navigate back up to `Desktop`. Then, we use `rm -r` to remove the `demo-folder`. 

```
cd ..
rm -r demo-folder
```

## 📝 Notes

Refer to the documentation: 

[MDN Web Docs on Basic Built-in Terminal Commands](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#Basic_built-in_terminal_commands)

[Bash/Terminal Commands](bash-terminal-commands-cheatsheet.md)

---
 © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
