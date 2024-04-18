
<h3> NGINX: servidor Web, Proxy Reverso e API Gateway </h3>  </p>

# instalando nginx

install chocolatey </p>
instalar nginx windows.</p>
````
choco install nginx
````
instalar nginx linux
````
sudo apt install nginx -y
sudo systemctl start nginx 
sudo systemctl enable nginx
````

dockerfile</p>
````
FROM nginx:latest 
COPY pasta /usr/share/nginx/html </p> 
EXPOSE port
````

docker commandos </p>
````
docker run -d -p 80:80 nginx:latest
````

# Commando  nginx cli

````
nginx -h
````

- Check the NGINX configuration syntax for errors: 

````
nginx -t
````

# Commando  nginx cli systema


````
sudo nginx reload
sudo systemctl reload nginx

````

- Então meu arquivo padrão é esse nginx conf, nesse arquivo padrão sei que ele inclui todos os arquivos .conf de servers. Temos um load balancer, vamos abrir ele para ver e se precisar já modificar. Então usr/local/etc/nginx/servers/load-balancer, nesse load balancer estamos ouvindo a porta 8003 e cada hora que chega uma requisição para essa porta hora ele vai mandar para o serviço 1 hora ele vai mandar para o serviço 2.


- pastas sudo nano /etc/nginx/nginx.conf


````
events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/*.conf;

    upstream backend_servers {
        server 192.168.15.10:8081;  # IP address servidor-1
        server 192.168.15.12:8082;  # IP address servidor-2
    }

    server {
        listen       8080 default_server;
        listen       [::]:8080 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        location / {
            proxy_pass http://backend_servers;
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_http_version 1.1;
            proxy_set_header Connection "";
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}
````

- pasta sudo /etc/nginx/sites-available/loadbalacer

````
upstream backend_servers {
    server 192.168.15.10:8081;  # IP address servidor-1
    server 192.168.15.12:8082;  # IP address servidor-2
}

server {
    listen 80;
    server_name loadbalancer.example.com;  # Altere para o seu domínio

    location / {
        proxy_pass http://backend_servers;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
````

````
sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
sudo systemctl restart nginx
````






- Link nginx : https://docs.nginx.com/nginx/