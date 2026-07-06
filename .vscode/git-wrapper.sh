#!/bin/sh

export GIT_EXEC_PATH="/Applications/GitHub Desktop.app/Contents/Resources/app/git/libexec/git-core"
exec "/Applications/GitHub Desktop.app/Contents/Resources/app/git/bin/git" "$@"
