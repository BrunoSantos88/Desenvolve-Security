  #bin/bash
  sudo curl -fsSL https://get.docker.com -o get-docker.sh
  sudo usermod -aG docker root
  sudo adduser $USER docker
  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
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
  sudo npm init -y && sudo npm install && sudo npm install express
  sudo docker-compose up -d