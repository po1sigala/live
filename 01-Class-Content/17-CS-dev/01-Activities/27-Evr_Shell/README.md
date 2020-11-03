# Shell Scripting

## Introduction

@TODO: Write introduction paragraph reminding learners about how they've used the shell and how it can be used.

* Mention how we've used it, pose question about "how does our command line know what `git`, `node`, or `npm` even mean?"

* Provide backstory about bash (Bourne Again Shell) and now macOS uses ZSH instead, but isn't too different from bash

* Explain we're going to walk through a few examples of how to use it

## Our First Script

* Use `hello.sh` in `Solved`

* Instruct learners to create a file on their machines to hold the code

* Walk through the file and have them add code to it

* Save file and use `sh hello.sh` from command line to execute it

* Mention that this is annoying if we wanna run a script elsewhere

* Point learners to `.bashrc` or `.zshrc` at the root of their user folder (they may need to create them at `~`) and create an alias to the command

```bash
alias hello="~/<path>/<to>/<file>.sh"
```

* Restart command line and try command from anywhere

## Build a Script That Accepts Command Line Arguments

* Rinse/repeat of first step with `calculator.sh` contents

* Explain new syntax, but not too in depth since the files have  a lot of comments

* Set up alias and run from anywhere

## Git Automation With Scripts

* Rinse/repeat with `git-file-cleanup.sh` to show how we can automate tasks

* Alias and test

## Resources

* https://wiki.bash-hackers.org/

* https://devhints.io/bash

* https://learnxinyminutes.com/docs/bash/

* https://dev.to/erykpiast/two-bash-scripts-i-cannot-live-without-when-working-with-git-44a1 (@TODO: DON'T INCLUDE THIS, JUST FOR DEV)

* https://github.com/ruanyf/simple-bash-scripts (@TODO: DON'T INCLUDE THIS, JUST FOR DEV)

---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
