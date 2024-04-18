
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

- Definindo o API Gateway

````
  include /etc/nginx/api_gateway.conf; # All API gateway configuration
  include /etc/nginx/conf.d/*.conf;    # Regular web traffic
````

````
include api_backends.conf;
include api_keys.conf;

server {
    access_log /var/log/nginx/api_access.log main; # Each API may also log to a 
                                                   # separate file

    listen 443 ssl;
    server_name api.example.com;

    # TLS config
    ssl_certificate      /etc/ssl/certs/api.example.com.crt;
    ssl_certificate_key  /etc/ssl/private/api.example.com.key;
    ssl_session_cache    shared:SSL:10m;
    ssl_session_timeout  5m;
    ssl_ciphers          HIGH:!aNULL:!MD5;
    ssl_protocols        TLSv1.2 TLSv1.3;

    # API definitions, one per file
    include api_conf.d/*.conf;

    # Error responses
    error_page 404 = @400;         # Treat invalid paths as bad requests
    proxy_intercept_errors on;     # Do not send backend errors to client
    include api_json_errors.conf;  # API client-friendly JSON errors
    default_type application/json; # If no content-type, assume JSON
}
````


- Back-ends de API de serviço único versus microsserviço

````
upstream warehouse_inventory {
    zone inventory_service 64k;
    server 10.0.0.1:80;
    server 10.0.0.2:80;
    server 10.0.0.3:80;
}

upstream warehouse_pricing {
    zone pricing_service 64k;
    server 10.0.0.7:80;
    server 10.0.0.8:80;
    server 10.0.0.9:80;
}
````

- link Referencia: https://www.nginx.com/blog/deploying-nginx-plus-as-an-api-gateway-part-1/


- Link nginx : https://docs.nginx.com/nginx/
