- git init

> Initialize git repo

- git status

> Current state of our project

- git add name.ext
- git add &lt;list_of_files&gt;
- git add --all
- git add dir/

> Use git add '*.txt' - without quotes our shell will only execute the wildcard search within current directory
Git will receive the list of files the shell found instead of the wildcard and will not be able to add he files inside nested directory


- git commin -m "commit message"

- git log

> Use *git log --summary* to see more information for each commit. 
Think of Git's log as a journal that remembers all the changes we've committed so far, in the order we committed them.

- git remote add origin https://github.com/repo.git

> Git does't care what your name of your remotes, but it's typical to name your main one *origin*

- git push -u origin master

> The push command tells Git where to put our commits when we're ready
The name of our remote is origin and the default local branch name is master. 
The -u tells Git to remember the parameters, so that next time we can simply run git push and Git will know what to do.
When you start to get the hang of git you can do some really cool things with [hooks][1] when you push.

- git pull origin master

> We can check for changes on our GitHub repository and pull down any new changes

- git stash

> Sometimes when you go to pull you may have changes you don't want to commit just yet. One option you have, other than commiting, is to stash the changes.
Use the command *git stash* to stash your changes, and *git stash apply* to re-apply your changes after your pull.

- git diff HEAD

> See different from our last commit by using the git diff command. Different from our last commit by using the git diff command.
The HEAD is a pointer that holds your position within all your different commits. By default HEAD points to your most recent commit, 
so it can be used as a quick way to reference that commit without having to look up the SHA.

- git add stage.file

> Staged files are files we have told git that are ready to be commited
Using 'git diff' gives you a good overview of changes you have made and lets you add files or directories one at a time and commit them separately.

- git diff --staged

> With the *--staged* option to see the changes you just staged.

- git reset stage.file

> You can unstage files by using the *git reset* command.

- git checkout -- target

> Files will be changed back to how they were at the last commit 
git checkout seems to work fine without it. It's simply promising the command line that there are no more options after the '--'. 
This way if you happen to have a branch named octocat.txt, it will still revert the file, instead of switching to the branch of the same name.

- git brunch clean_up

> Branches are what naturally happens when you want to work on multiple features at the same time. 
You wouldn't want to end up with a master branch which has Feature A half done and Feature B half done.
Rather you'd separate the code base into two "snapshots" (branches) and work on and commit to them separately. 
As soon as one was ready, you might merge this branch back into the master branch and push it to the remote server.

- git checkout &lt;branch&gt;

> You can switch branches using the git checkout &lt;branch&gt; command

> You can use:

>- git checkout -b new_branch

> To checkout and create a branch at the same time. This is the same thing as doing:
- git branch new_branch
- git checkout new_branch

- git rm &lt;target&gt;

> This will not only remove the actual files from disk, but will also stage the removal of the files for us

> Recursive option on *git rm*:
>- rm -r &lt;folder_of_cats&gt;
 
> If you happen to delete a file without using 'git rm' you'll find that you still have to 'git rm' the deleted files from the working tree. You can save this step by using the '-a' option on 'git commit', which auto removes deleted files with the commit.

>- git commit -am "deleted"

- git merge &lt;target brunch&gt;

> Merge current brunch with &lt;target brunch&gt;

- git branch -d &lt;branch name&gt;

> Delete brunch

> Also if you You might decide to delete the branch since you're scrapping the idea. You'll notice that *git branch -d bad_feature* doesn't work. This is because *-d* won't let you delete something that hasn't been merged.

> You can either add the --force (-f) option or use -D which combines -d -f together into one command.

- git push

> Push!

- git push &lt;remote brunch&gt; &lt;local brunch&gt;

> Push local brunch to remote brunch

- git checkout -b &lt;new local brunch&gt;

> This command creates new brunch and checkout it

- git diff

> Show unstaged differences since last commit

- git diff --staged

> Show staged differences since last commit 

- git reset HEAD &lt;item&gt;

> Ustage changes since HEAD pointer

- git checkout -- &lt;item&gt;

> Blow away all changes since last commit, for unstaged files

- git log --oneline --graph

> git rm --cached &lt;stoptrackingfile&gt;

> git config --list

> git config --global alias.mylog \ "log --pretty=format:'%h %s [%an]' --graph"

[1]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
[2]: https://help.github.com/articles/using-pull-requests/
[3]: https://git-scm.com/docs/git-merge#_how_conflicts_are_presented
[4]: https://help.github.com/

##Statuses
- staged
 
> Files are ready to be commited
- unstaged
 
> Files with changes that have not been prepred to be commited
- untracked
  
> Files aren't tracked by Git yet. This inicates  newly created file
- deleted
 
> File has been deleted and is waiting to be remved rom git


