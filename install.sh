  #bin/bash
  sudo apt update -y
  sudo apt install docker.io -y
  sudo adduser $USER docker
  sudo docker-compose up -d
