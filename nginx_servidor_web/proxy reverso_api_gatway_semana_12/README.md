
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

# Commando

````
nginx -h
````

- Configuração Exemplo</p>
````
etc/ 
└── nginx/  
    ├── api_conf.d/ ………………………………… Subdirectory for per-API configuration 
    │   └── warehouse_api.conf …… Definition and policy of the Warehouse API 
    ├── api_backends.conf ………………… The backend services (upstreams) 
    ├── api_gateway.conf …………………… Top-level configuration for the API gateway server
    ├── api_json_errors.conf ………… HTTP error responses in JSON format
    │   ├── ... 
    │   └── existing_apps.conf
    └── nginx.conf 
````
