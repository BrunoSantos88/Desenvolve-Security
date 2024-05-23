<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions Badge"> <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"> 
![Node.js](https://img.shields.io/badge/Node.js-16-green?style=flat&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-7.10.0-red?style=flat&logo=npm&logoColor=white)

 <p align="center">  
Configuração de Ambiente de Desenvolvimento com Docker e Express.js
Visão Geral
 </p>

Este guia fornece instruções detalhadas para configurar um ambiente de desenvolvimento utilizando Docker e Express.js, integrando com GitHub Actions. Seguindo estes passos, você poderá configurar um runner de GitHub Actions auto-hospedado, instalar dependências necessárias e implementar uma aplicação Express.js via Docker.

Pré-requisitos:

    - GitHub Actions: Configuração do runner auto-hospedado.
    - Docker: Para criar contêineres da aplicação.
    - Node.js e npm: Ambiente de execução do Node.js.

- Instalar dependências do GitHub Runner.
- Criar a pasta actions-runner e definir que a execução ficará na pasta _work.
<p align="center">
  <img src="imagens/download.png" alt="setup instalação" width="800">
</p>

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
- Caso tenha sucesso na instalação!
<p align="center">
  <img src="imagens/gitruuner_online.png" alt="setup instalação" width="800">
</p>

Setup da Instalação:
Acesse via SSH o terminal da máquina e execute os seguintes comandos:
<p align="center">
  <img src="imagens/githubrunner.png" alt="após instalação" width="800">
</p>
2. Setup do GitHub Action
Crie a pasta e o arquivo de execução github/workflows/express_app.yml. </p>
Passo 1: Definir a "branch" e "agente"

````
on:
  push:
    branches:  
      - desafio2

jobs:
  express_vm:
    runs-on: self-hosted
````

Passo 2: Checar repositório no GitHub
````
steps:
  - name: Checkout code
    uses: actions/checkout@v2
````
Passo 3: Executar script
````
- name: Install Container & NodeJs and NPM
  run: |
    chmod +x dependencia.sh
    if ./dependencia.sh; then
      echo "Install complete"
    else
      echo "Install failed"
    fi
````
Script Shell: dependencia.sh
````
#!/bin/bash
set -e 
sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Update failed"
  exit 1
fi
sudo apt install docker.io -y
if [[ $? -ne 0 ]]; then
  echo "Docker installation failed"
  exit 1
fi
sudo apt install docker-compose -y
if [[ $? -ne 0 ]]; then
  echo "Docker Compose installation failed"
  exit 1
fi
sudo apt update -y
if [[ $? -ne 0 ]]; then
  echo "Second update failed"
  exit 1
fi
sudo apt install nodejs -y
if [[ $? -ne 0 ]]; then
  echo "Node.js installation failed"
  exit 1
fi
sudo apt install npm -y
if [[ $? -ne 0 ]]; then
  echo "NPM installation failed"
  exit 1
fi
echo "Install complete"
````
Passo4: Clonar repositório e alterar branch
````
- name: Clone repository
  run: |
    sudo git clone https://github.com/BrunoSantos88/Desenvolve-Trilha-SI.git
    cd Desenvolve-Trilha-SI
    sudo git checkout desafio2
````
Passo 5: Executar e levantar o docker-compose
````
- name: Deploy_UP_Express_APP
  run: |
    cd express_app
    sudo docker-compose up -d
````
6. Enviar Requisição curl Após Execução do Comando
````
steps:
  - name: Send curl request
    run: |
      curl http://${{secrets.HOST_EXPRESS}}:3000

````
Sucesso na Instalação
<p align="center">
  <img src="imagens/gitruuner_online.png" alt="GitHub Runner Online" width="800">
</p>
Página Web Após Deploy
<p align="center">
  <img src="imagens/express_server.png" alt="Express Server Running" width="800">
</p>
Job Finalizado com Sucesso
<p align="center">
  <img src="imagens/sucesspjob.png" alt="Job Sucesso" width="800">
</p>
