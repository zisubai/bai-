#!/bin/sh
set -eu

echo "== Current architecture =="
uname -m

echo
echo "== Current developer directory =="
xcode-select -p 2>/dev/null || true

echo
echo "== Current libxcrun architecture =="
if [ -e /Library/Developer/CommandLineTools/usr/lib/libxcrun.dylib ]; then
  file /Library/Developer/CommandLineTools/usr/lib/libxcrun.dylib
else
  echo "Command Line Tools libxcrun.dylib not found."
fi

echo
echo "This will remove the broken Command Line Tools installation."
echo "macOS will ask for your administrator password."
sudo rm -rf /Library/Developer/CommandLineTools
sudo xcode-select --reset

echo
echo "== Starting official Apple Command Line Tools installer =="
xcode-select --install 2>/tmp/xcode-select-install.log || true
cat /tmp/xcode-select-install.log || true

echo
echo "If an installer window appeared, finish that installation, then run:"
echo "  ./verify-clt-architecture.sh"
