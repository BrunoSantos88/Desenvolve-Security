Install Required Dependencies: Ensure you have the necessary packages installed:

bash

sudo apt install -y wget ca-certificates

Add pgAdmin Repository: Download and add the repository key:

bash

wget --quiet -O - https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add -

Add the repository to your sources list:

bash

sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/deb/ $(lsb_release -cs) pgadmin4" > /etc/apt/sources.list.d/pgadmin4.list'

Update Package List:

bash

sudo apt update

Install pgAdmin 4: You can choose to install the web or desktop version. For the web version, use:

bash

sudo apt install pgadmin4-web

For the desktop version, use:

bash

sudo apt install pgadmin4-desktop

Configure pgAdmin 4 (For Web Version): After installing the web version, you need to configure it. Run:

bash

sudo /usr/pgadmin4/bin/setup-web.sh


Versao docker

sudo docker run --name alura-pgadmin --network=alura -p 80:80 -e "PGADMIN_DEFAULT_EMAIL=bruno@example.com" -e "PGADMIN_DEFAULT_PASSWORD=root" -d dpage/pgadmin4