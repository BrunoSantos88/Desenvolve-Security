# commando executar etapa-1
```
 - ./filter_access_log.sh "GET"
```
 # filtro GET PUT e DELETE etapa-2
 ```
 - bash filter_result.sh put
 - bash filter_result.sh get
 - bash filtenr_result.sh delete
 ```
 # install depedencia lab 
 ```
sudo apt-get install apache2
sudo service apache2 start
sudo apt-get install curl
sudo apt-get install ssmtp -y
sudo apt-get install mailutils -y
sudo apt-get install nmap -y
apt-get install -y mysql-server
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```
 # commando etapa-3 
 ```
 - curl --write-out %{http_code} --output /dev/null http://localhost
 - curl --write-out %{http_code} --silent --output /dev/null http://localhost
 - bash monitoracao-servidor.sh
 - curl --write-out %{http_code} http://google.com
 - curl --write-out %{http_code} https://caelum-online-public.s3.amazonaws.com/shell-script/parte2/aula_2/index.html
 - sudo service apache2 start
 - http://localhost/site.html
```
 # acessar crontab 
 ```
 sudo crontab -e
 ```

 # commando etapa-4

```
free | grep
free | grep -i mem
free | grep -i mem | awk '{ print $2 }'
free -h | grep -i mem | awk '{ print $3 }'
echo 63.00 | awk -F. '{ print $2 }'
```

# commandos etapa-5 mysql
```
sudo mysql -u root
show databases;
use mutillidae
show tables;
select * from produtos;
select * from usuarios;
```

# commandos etapa-6 mysql
```
- mysqldump -u root $1 > $1.sql
- sudo mysql -u root mutillidae < /home/backup/mutillidae.sql
```

# link github 

- https://github.com/RafaelNercessian/curso-shell.git
