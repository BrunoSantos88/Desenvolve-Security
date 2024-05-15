  #bin/bash
  sudo snap install docker
  sudo usermod -aG docker root
  sudo adduser $USER docker
  # Install Git && commandos
  sudo apt-get update
  sudo apt-get install git -y
  git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
  cd Desenvolve-Trilha-SI/
  git checkout devtest2
  cd express_app
  # install nodejs && commmandos
  sudo apt-get install nodejs -y
  cd express_app
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
  sudo apt-get install -y nodejs
  npm init- y 
  npm install
  npm install express
  docker-compose up -d