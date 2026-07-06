#!/bin/sh
set -eu

echo "== xcrun =="
xcrun --version

echo
echo "== system git =="
/usr/bin/git --version

echo
echo "== developer directory =="
xcode-select -p

echo
echo "== libxcrun architecture =="
file /Library/Developer/CommandLineTools/usr/lib/libxcrun.dylib

echo
echo "Command Line Tools architecture check passed."
