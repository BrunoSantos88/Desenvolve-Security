  #bin/bash
  sudo apt update -y
  sudo apt install docker.io -y
  sudo adduser $USER docker
  sudo cd Desenvolve-Trilha-SI/ && git checkout devtest2 && cd express_app
  sudo npm init -y
  sudo npm install
  sudo npm install express
  sudo docker-compose up -d