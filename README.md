# Express APP

1. Install GITHUB RUNNER VM Linux UBUNTU 20:04

2. acessar ssh e instalar dependencias do github runner.
````
ssh -i "chave.publica" user@secrets.HOST_EXPRESS
````
3. Instalar Dependencia Githb Runner.

````
Create a folder
mkdir actions-runner
chmod 777 -R actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-2.316.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.1/actions-runner-linux-x64-2.316.1.tar.gz
echo "chave token" actions-runner-linux-x64-2.316.1.tar.gz" | shasum -a 256 -c
tar xzf ./actions-runner-linux-x64-2.316.1.tar.gz
````

executr Start runner
````
./config.sh --url https://github.com/BrunoSantos88/Desenvolve-Trilha-SI --token "chavetoken"
./run.sh
````

Action usar 
````
runs-on: self-hosted
````
