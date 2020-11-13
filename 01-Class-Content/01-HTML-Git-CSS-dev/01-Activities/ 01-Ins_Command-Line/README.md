#  Instructor Demo: Command Line (5 min) 

* Explain that terminal commands are useful ways to navigate between folders, also called directories, quickly and easily. The commands are entered into the terminal or bash. 

* Open your terminal and demonstrate the following:

  * 🔑 We use `ls` to list the contents of the home directory, including `Desktop`. 

  ```
  ls
  ```

  * 🔑 We use `cd` to go down and change into the `Desktop` directory. 

  ```
  cd Desktop
  ```

  * 🔑 To move back up to our previous directory, we use `cd ..`. 

  ```
  cd ..
  ```

  * Explain that in addition to navigating between files and directories, we use terminal commands to create and remove directories and files. 

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

  * ☝️ How would we use terminal commands to change directories?

  * 🙋 We use `cd` to go down and change to a new directory. To go back up to the previous directory, we use `cd..`.

  * ☝️ How would we use terminal commands to create a new file?

  * 🙋 We use `touch` and the name of the new file we want to create.  

   * ☝️ How would we use terminal commands to create a new director?

  * 🙋 We use `mkdir` and the name of the new directory we want to create.  

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Command-Line/README.md`.

---
 © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
