# Desenvolve-Security
- Aulas Trilha CyberSecuirty - Alura

 # Semana 3 - 8h - 8h
- Linux Onboarding: usando a CLI de uma forma rápida e prática
- Linux Onboarding: localizando arquivos e conteúdos
 # Semana 4 - 8h - 8h
- Linux Onboarding: obtendo e tratando informações do sistema
- Linux Onboarding: trabalhe com usuários, permissões e dispositivos
 

 # Criando maquina Azure Cloud
  - Az login, selecionar sua conta login email e sennha
  - az group create --name aluralabs --location eastus
  - az vm create --resource-group aluralabs --name aluralabs-server-vm --image Ubuntu2204 --data-disk-sizes-gb 80 --size Standard_D2s_v3 --admin-username "alura"  --ssh-key-value ~/.ssh/id_rsa.pub --public-ip-sku Standard
  - az vm open-port --resource-group aluralabs --name aluralabs-server-vm --port 22 --priority 1010

  - Acesso ssh -i ~/.ssh/id_rsa.pem alura@172.191.233.68