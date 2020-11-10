# Instructor Guide - Use Terminal Commands to Create Folder and File

This demo introduces the students to the following terminal commands:

* `ls`

* `cd` 

* `mkdir` 

* `touch`

* `rm`

## Directions

* Explain to the students that terminal commands are useful ways to navigate between folders, also called directories, quickly and easily. The commands are entered into the terminal or bash. 

* Open the terminal on your computer.

* Explain that when we open a fresh terminal window we are at the root. We use `ls` to show the directories inside.

* We use `cd` to navigate into the directories.

```
cd Desktop
```
* To move back up to the parent directory, in this case the root,  we use `cd ..`

* Explain that in addition to navigating between files and directories, we can also create new files and directories right in the terminal.

* Since we want our new directory to be inside of Desktop, we navigate back to the Desktop directory using `cd`.

* Then, we use the `mkdir` command to create a new directory. 

```
mkdir demo-folder
```

* To add a file to our new directory, we first use `cd` to navigate into our new folder.

```
cd demo-folder
```

* We use `touch` to create a new file inside our directory.

```
touch index.html
```

* We use `ls` to check to make sure that our new file has been succcessfully added to the directory.

* To remove the file, we use `rm`.

```
rm index.html
```

* To remove the now-empty directory we just created, we first need to navigate back to Desktop using `cd..` Then, we use `rm -r` to remove the `demo-folder` directory. 

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
