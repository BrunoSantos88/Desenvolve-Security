#!/bin/bash
apt-get update
#python3 e aws cli
apt-get install -y python3 python3-pip
pip3 install awscli
# terraform 
TERRAFORM_VERSION="1.37"
wget https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip
unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip
sudo mv terraform /usr/local/bin/
terraform --version