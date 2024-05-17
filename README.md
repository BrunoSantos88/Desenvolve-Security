# Express APP

1. Install GITHUB RUNNER VM Linux UBUNTU 20:04
   
- Instalar Dependencia Githb Runner.
- Criar pasta actions-runner e execução vai fica a pasta "_work"


<p align="center">
  <img src="imagens/download.png" alt="setup instalação" width="800"> 
</p>

2. Setup instalação, acessar via ssh terminal da maquina.
````
mkdir actions-runner
chmod 777 -R actions-runner
cd actions-runner
curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz
echo "chave token" actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c
tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz
./config.sh --url https://github.com/BrunoSantos88/Desenvolve-Trilha-SI --token "chavetoken"
./run.sh

````
<p align="center">
  <img src="imagens/githubrunner.png" alt="após instalação" width="800"> 
</p>


3.Setup githb action
Criar pasta e arquivo de execução  "github/workflows/express_app.yml"

step 1: "branch" e agente"on: self-hosted"
````
on:
  push:
    branches:  
      - deafio2

jobs:
  express_vm:
    runs-on: self-hosted

````
step 2:checar repositorio github 
````
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
````
step 3:  Executar script
````
      - name: Install Container && NodeJs and NPM
        run: |
         chmod +x dependencia.sh
         ./dependencia.sh
         echo "Install complete"
````
<p align="center">  
dependencia.sh
</p>

````
#bin/bash
sudo apt update -y
sudo apt  install docker.io -y
sudo apt  install docker-compose -y
sudo apt update -y
sudo apt install nodejs -y
sudo apt install npm -y
sudo apt-get install git -y
echo "install complete"
````

step4: Clonar repositorio e alterar branch


````
      - name: Clone repository
        run: |
               sudo git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
               sudo git checkout desafio2
````

step5: Executar e executar docker-compose

````
      - name: Deploy_UP_Express_APP
        run: |
           cd express_app
           sudo docker-compose up -d   
           curl http://${{secrets.HOST_EXPRESS}}:3000

````
<p align="center">  
4. Apos criar PÓS Deploy_UP_Express_APP
<p align="center">  
   

