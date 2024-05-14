#!/bin/bash
sudo apt-get update -y
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update -y
sudo apt install docker-ce
sudo docker --version
sudo systemctl status docker
sudo usermod -aG docker $USER
sudo systemctl start docker
sudo systemctl restart docker
/tmp/docker-setup-buildx-dRxWVC/bin/buildx restart
/tmp/docker-setup-buildx-dRxWVC/bin/buildx create --name builder-cfd6845d-52d4-4e3a-a99d-b5d1f517b2a8 --driver docker-container --buildkitd-flags --allow-insecure-entitlement security.insecure --allow-insecure-entitlement network.host --use