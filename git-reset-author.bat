#!/bin/sh

# Credits: http://stackoverflow.com/a/750191

git filter-branch -f --env-filter "GIT_AUTHOR_NAME='elegant-idn' GIT_AUTHOR_EMAIL='curtisconley34@gmail.com' GIT_COMMITTER_NAME='elegant-idn' GIT_COMMITTER_EMAIL='curtisconley34@gmail.com'" HEAD