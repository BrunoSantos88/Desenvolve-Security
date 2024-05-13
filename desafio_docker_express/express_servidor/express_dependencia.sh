#!/bin/bash
#install docker
curl https://releases.rancher.com/install-docker/19.03.sh | sh 
usermod -aG docker root
sudo apt-get install git -y
curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
#installnodejs
sudo apt install nodejs -y
