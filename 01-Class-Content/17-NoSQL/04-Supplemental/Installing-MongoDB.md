# Install MongoDB

This guide walks you through installing MongoDB on Windows and macOS.

### Contents

* [Install MongoDB on Windows](#install-mongodb-on-windows)
* [Configure MongoDB on Windows](#configure-mongodb-on-windows)
* [Install MongoDB on macOS](#install-mongodb-on-macos)

- - -

## Install MongoDB on Windows

If you use Windows, follow these instructions to install MongoDB:

1. Go to the <a href="https://www.mongodb.com/download-center#community" target="_blank">MongoDB Download Center</a>.

2. Scroll down, go to the green box with the Community Server Tab highlighted.

3. In the Version dropdown, choose "Windows 64-bit x64". Then click the "DOWNLOAD (msi)" button.

4. The next page will thank you for downloading MongoDB then show a newsletter link. You can ignore this. In a few seconds, your browser will notify you that the file is downloading.

5. Open up Windows Explorer and locate the installation file (it should be in the default directory where your browser stores downloads). Open the file and follow the instructions.

* When the installer prompts you to "Choose Setup Type," click the Complete button, then carry on.

* **DO NOT** install Compass along with your MongoDB install.

* A window might pop up mid-installation, asking you whether you’re sure you want to download a particular component of MongoDB. Click yes, otherwise the install will fail.

## Configure MongoDB on Windows

MongoDB on Windows requires some extra configuration steps. This section includes instruction for how to set up a default location for your MongoDB databases and adding an environment variable to enable command-line use. 

**IMPORTANT**: You must create a data directory for your Windows MongoDB installation, or else it won't run. 

1. In Git Bash, `cd` your way to the root directory by using the command `cd c:`

2. Run the following command: `mkdir -p data/db`

You just created a `data/db` directory, which will be the default location for MongoDB’s databases. 

Next you'll add MongoDB’s path to the PATH environment variable, so that you can run it easily from the Git Bash command line.

1. First, locate the directory where you installed MongoDB. This is probably `C:\\Program Files\\MongoDB\\Server\\<version_number>\\bin`. Copy this directory to your clipboard.

2. Open the System menu or Control Card on your machine, which is usually accessible via the Start menu or Search Bar.

3. Go to Advanced Settings.

     **Note**: If you're using Windows 10 and opened the Control Panel, go to System and Security > System > Advanced System Settings.

4. In the window that appears, click the Environment Variables button located toward the bottom of the window.

5. In the Environment Variables window, find the System Variables scrollable table. 

6. In the Variable column, search for the PATH variable. Click on it, and then click the Edit… button.

7. The next window will vary in appearance depending on your version of Windows. You’ll either be able to press the New button and paste your MongoDB directory into an input box, or you’ll have to paste the directory at the end of a long string of other directories. 

     If you get confused, try watching this video: ![Installing MongoDB on Windows](http://img.youtube.com/vi/sBdaRlgb4N8/0.jpg)](https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120)

8. Test to see if it worked by closing your current Git Bash window, and then reopening it and runniung this command: `mongod`. Note that there is no "b" at the end of this command; it's simply `mongod`. 

     - If `mongod` runs, great job! Now go ahead and open a new instance of Git Bash, and enter the command: `mongo`. This will initialize the Mongo Shell and allow you to begin entering commands via the Mongo Shell. Congratulations, you’ve installed MongoDB. Your instructor will take it from here.

     - If `mongod` didn’t run and instead your bash threw a "command not found" error, make sure you added MongoDB’s bin directory to your PATH variable. Then close Git Bash and try running `mongod` again.

     - If `mongod` starts but closes after a series of prompts, make sure you created the `data/db` directory in your root. MongoDB cannot run without this directory.

     - If you're still encountering issues when attempting to start `mongod`, please ask for assistance from a TA or the instructor.

- - -

## Install MongoDB on macOS

This section includes instructions for installing MongoDB. Refer to the [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) if you encounter any problems.

### Prerequisites

* [XCode](https://developer.apple.com/xcode/) should have been installed as part of the prework.
* [Homebrew](https://brew.sh/) should have been installed as part of the prework.

### Install MongoDB

To install MongoDB, run the following commands:

`brew tap mongodb/brew`

`brew install mongodb-community@4.4` 

**Note**: The version may have changed since the time of writing. See the [MongoDB macOS installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#procedure) for the latest version to use with this command.

### Run MongoDB as a Service

To run MongoDB as a service, run the following command: 

`brew services start mongodb-community@4.2`

Verify that the service is running by typing: 

`ps aux | grep -v grep | grep mongod`

If you don't see any output from the preceding command, restart the service by using `brew services restart mongodb-community`.

If you're still encountering issues when attempting to start `mongod`, please ask for help from a TA or the instructor.
