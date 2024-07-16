# NMAP

* commandos

nmap -D RND:20 --open -sS --top-ports 100 juice.hostdevtest.shop -oN portas-abertas
nmap --open -sS -p --min-rate=60000juice.hostdevtest.shop
nmap --open -sV -p80,2121 juice.hostdevtest.shop -oN porta-versao

nmap -v -O --osscan-guess juice.hostdevtest.shop