  #bin/bash
  sudo apt update -y
  sudo apt install docker.io -y
  sudo adduser $USER docker
  # Install Git && commandos
  sudo apt-get update -y
  sudo apt-get install git -y
  sudo git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
  sudo cd Desenvolve-Trilha-SI/ && git checkout devtest2 && cd express_app
  # install nodejs && commmandos
  sudo apt-get update -y
  sudo apt install curl -y
  sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  sudo source ~/.bashrc
  sudo nvm install --lts
  sudo nvm alias default 24.1.2
  sudo node -v npm -v
  sudo pm init -y
  sudo npm install
  sudo npm install express
  sudo docker-compose up -d