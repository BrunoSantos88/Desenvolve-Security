#!/bin/bash

set -e  # Saia imediatamente se um comando falhar

sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Update failed"
  exit 1
fi

sudo apt install docker.io -y
if [[ $? -ne 0 ]]; then
  echo "Docker installation failed"
  exit 1
fi

sudo apt install docker-compose -y
if [[ $? -ne 0 ]]; then
  echo "Docker Compose installation failed"
  exit 1
fi

sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Second update failed"
  exit 1
fi

sudo apt install nodejs -y
if [[ $? -ne 0 ]]; then
  echo "Node.js installation failed"
  exit 1
fi

sudo apt install npm -y
if [[ $? -ne 0 ]]; then
  echo "NPM installation failed"
  exit 1
fi

sudo apt-get install git -y
if [[ $? -ne 0 ]]; then
  echo "Git installation failed"
  exit 1
fi

echo "Install complete"