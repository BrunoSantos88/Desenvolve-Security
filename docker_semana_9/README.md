 # instalação docker 
 - documentação https://docs.docker.com/get-docker/

 - instalando linux

 ````
 sudo apt-get update

 sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
 ````
# Definindo a versão
 ````
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
````
````
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io
````
# Commmandos docker
````
docker run hello-world
sudo docker run hello-world
````

# Criando um grupo

````
sudo usermod -aG docker $USER
````

# Executar container
````
docker run hello-world
docker ps
docker images
````

<img src="docker ps.png" alt="Alt Text" width="1000">


 # Analisando outros comandos importantes

 ``` 
 docker ps -a  = "verificar container que não estao up"
 docker stop "idcontainer" =  "parar container"
 docker start "idcontainer" =  "iniciar container"
 docker exec = "executar commando no container"
 docker exec -it "idcontainer" bash "executar commando no container, mode interativo"
   - "vc pode acessa esse container e modificar ou instalar"
docker ps = "visualizar container uptime"
docker rm "idcontainer" = "excluir container"
docker rm "idcontainer" --force "excluir container e forçar"
docker port "idecontainer" = saber qual porta container esta rodando"
docker run -d -p "imagens container" = "excutar container (-d) mode interativo (-p) flaq da porta, exemplo 80:80" = curl http://localhost:80.
 docker inspect "ipcontainer" = "inspecificação do container"
 docker history "idecontainer"  = "saber tempo da imagens ou uptime do container"
``` 

# Criando images dockerfile
``` 
docker pull = "baixar uma imagen"
 - exemplo = docker pull ubuntu:latest
docker run -it ubuntu:latest bash 
``` 

  ``` - Criando dockerfile - "Commando sempre com letras Maiusculas"
  FROM -- baixar imagen "ubuntu:lastest"
  RUN  -- commando "apt-get update"
  COPY -- copiar arquivo "index.html" 
  EXPOSE -- expor porta "80"
  CMD --- rodar um commando "["npm", "start"]"
  ENTRYPOINT -- rodar um arquivo  "npm start"
```

 # Criando a imagem

 ``` build
 docker build -t nomedaimagens:v1 .
 docker images " saber qual foi criada"
 docker run -d –p porta:porta "imagen que vc criou":v1
```

# Autenticando a conta do Docker Hub e Upload.

```docker login hub

- docker login -u "seucadastro"
 - vai solicitar senha *****

Authenticating with existing credentials...
Login Succeeded

- docker tag
- docker tag "sua imagens + imagendorepositorio:versao
- docker push
- docker push imagendorepositorio:versao
```

# Desafio Criando e gerencindo container 

- ETAPA-1 baixar e extrair pasta node-app
- Baixar https://github.com/danielartine/alura-docker/blob/aula-3/app-exemplo.zip?raw=true

- ETAPA-2 criar dockerfile
```dockerfile

FROM node:14
COPY app-node /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

- Etapa-3
``` Criar imagen
docker build -t meuappnode:v1 .
```

- Etapa-4 rodar aplicação
``` run imagen
docker run -d -p 3000:3000 meuappnode:v1
```

- Etapa-5 login dockerhub
``` login docker hub 
docker login 
- login
- senha
```

- Etapa-6 Upload
```
docker tag  meuappnode:v1 repositoriodockehub:v1
docker push repositoriodockehub:v1
```

<img src="appnode.png" alt="Alt Text" width="1000">