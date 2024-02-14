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

 - exemplos
 - sudo chmod 770 /pasta ou arquivo
 - sudo chmod 774 /pastat ou arquivo
 - sudo chown; mudar proprietario.
 - chmod g+s /pasta;

 # link Simbolico
 - ln -s /projetos  projetos

 # instalar pacotes