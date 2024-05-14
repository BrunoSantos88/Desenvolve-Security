#!bin/bash
  sudo apt update -y
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
  node --version
  npm --version