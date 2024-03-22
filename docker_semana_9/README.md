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
