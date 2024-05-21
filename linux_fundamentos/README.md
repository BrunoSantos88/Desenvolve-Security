# Desenvolve-Security
- Aulas Trilha CyberSecuirty - Alura

 # Semana 3 - 8h - 8h
- Linux Onboarding: usando a CLI de uma forma rápida e prática
- Linux Onboarding: localizando arquivos e conteúdos
 # Semana 4 - 8h - 8h
- Linux Onboarding: obtendo e tratando informações do sistema
- Linux Onboarding: trabalhe com usuários, permissões e dispositivos

# Commandos 

#  Armazenar o hash das senhas dos usuários?
 - sudo cat /etc/shadow =
 - cria um user; adduser
 - criar uma senha; su -
 - criar um gropo; groupadd name
 - colocar um user ao grupo; usermod -aG grupo user
 - deletar user; userdel
 - deletar grupo; groupdel

 # Permições
 - “rw-rw”. “rw” é “4 + 2 = 6”, “6 – 6 = 0”
 - o-r-g;  o= ower r= read g- grupos 
 - Então é fácil, “r” — direito de leitura, “w” — direito de escrita e “x” - direito de execução

 # exemplos
 - sudo chmod 770 /pasta ou arquivo
 - sudo chmod 774 /pastat ou arquivo
 - sudo chown; mudar proprietario.
 - chmod g+s /pasta;

 # link Simbolico
 - ln -s /projetos  projetos

 # instalar pacotes
 - sudo apt install apache2;install apache2
 - apt Search apache2; vai procurar
 - yum install httpd; centos install ssh
 - apt install updade ; update pacote
 - apt install mysql-server; install mysql
 - -y ; sim para todos as perguntas.

 - apt remove apache2; remover pacote de instalação
 - sudo apt upgrade; upgrade pacote. atualização systema.
 - apt list --upgradable; lista de atualização.
 - sudo apt list | grep installed; saber quais pacote instalaldos.
 - apt show; mostra detalhes do pacote

# Gerenciar partição.
- Está lembrado que usamos lshw, “listar o hardware”? Tem essa ferramenta. Porém, eu vou pegar essa ferramenta que lista tudo e, por acaso, já terminou no Disk, mas vamos fazer um grep, sudo lshw -c disk, passamos como parâmetro isso.

- sudo fdisk -l | grep sd, vamos ver o que ele mostra. Assim vai ficar um pouco confuso. Vamos mostrar de outra forma, senão você pode se confundir.

- sudo fdisk /dev/sdb
- sudo fdisk -l
- sudo mkfs -t ext4 /dev/sdb1
- anexar disco; sudo mount /dev/sdb1 /media/disk2/
- /etc/fstab;montar automatico.

 # gereciamento systema.

 - sudo systemctl status/restart/stop/init/enable/disable - serviço