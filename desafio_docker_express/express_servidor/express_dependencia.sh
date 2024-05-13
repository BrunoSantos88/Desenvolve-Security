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
# install gitrunner
sudo usermod -aG sudo ubuntu
sudo mkdir actions-runner && cd actions-runner# Download the latest runner package
curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz# Optional: Validate the hash
echo "d62de2400eeeacd195db91e2ff011bfb646cd5d85545e81d8f78c436183e09a8  actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c# Extract the installer
tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz
Configure
./config.sh --url https://github.com/BrunoSantos88/Desenvolve-Trilha-SI --token AV3UW2PZJYJ3Q4Y6RRGX5KTGIJ4AE# Last step, run it!
./run.sh