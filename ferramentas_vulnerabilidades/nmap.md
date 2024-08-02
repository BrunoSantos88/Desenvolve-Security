# NMAP

* commandos

nmap -D RND:20 --open -sS --top-ports 100 juice.hostdevtest.shop -oN portas-abertas
nmap --open -sS -p --min-rate=60000juice.hostdevtest.shop
nmap --open -sV -p80,2121 juice.hostdevtest.shop -oN porta-versao

nmap -v -O --osscan-guess juice.hostdevtest.shop


* verificar tempos repostas da rede

 nmap -sn 192.168.98.0/24
 nmap -sV 192.168.98.2
 nmap -sP 192.168.98.0/24


 * verificar portas
 
 sudo nmap -sF -p 80 192.168.98.2