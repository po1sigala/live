#  Instructor Demo: Command Line (5 min) 

* Terminal commands are useful ways to navigate between folders, also called directories, quickly and easily. The commands are entered into the terminal or bash.

* Open your terminal and do the following:

  * 🔑 We use `ls` to list the contents of the home directory, including `Desktop`. 

  ```bash
  ls
  ```

  * 🔑 We use `cd` to go down and change into the `Desktop` directory. 

  ```bash
  cd Desktop
  ```

  * 🔑 To move back up to our previous directory, we use `cd ..`. 

  ```bash
  cd ..
  ```

  * 🔑 We start by checking our working directory with `pwd`. When we print the working directory, it shows us the path.

  ```bash
  pwd
  ```

  * 🔑 Since we want to create our new folder inside the `Desktop` directory, we navigate down one layer using `cd`.

  ```
  cd Desktop
  ```

  * 🔑 Then, we use the `mkdir` command to create a new directory named `demo-folder`.
 
  ```bash
  mkdir demo-folder
  ```

  * 🔑 To add a file to our new directory, we use `cd` to navigate into `demo-folder`.

  ```bash
  cd demo-folder
  ```

  * 🔑 We use `touch` to create a new file inside of `demo-folder`.

  ```bash
  touch index.html
  ```

  * 🔑 We use `ls` to check that our new file has been successfully added to the directory.

  ```bash
  ls
  ```

---
 © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
