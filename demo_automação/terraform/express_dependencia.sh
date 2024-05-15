#!/bin/bash
# install docker e docker-compose
curl https://releases.rancher.com/install-docker/19.03.sh | sh 
usermod -aG docker root
sudo apt-get install git -y
curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
# Install Git
sudo apt-get update
sudo apt-get install git -y
git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
git checkout devtest2
cd express_app
# install nodejs
sudo apt-get install nodejs -y
sudo apt install npm -y
sudo npm init- y 
sudo npm install && npm install express
# run docker-compose up
docker-compose up -d