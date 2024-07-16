# fuff commandos

ffuf -u http://juice.hostdevtest.shop/FUZZ  -w seclistXSS.txt
ffuf -w /path http://juice.hostdevtest.shop/FUZZ


´´´´

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://juice.hostdevtest.shop/FUZZ
 :: Wordlist         : FUZZ: /home/bruno/home/bruno/Desenvolve-Trilha-SI/3.XSS/seclistXSS.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
 ´´´´