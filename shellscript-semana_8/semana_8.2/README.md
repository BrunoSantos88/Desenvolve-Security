# commandos
 - executar
 - ./filter_access_log.sh "GET"


 # filtro GET PUT e DELETE

 - bash filter_result.sh put
 - bash filter_result.sh get
 - bash filter_result.sh delete

 # install apache

 - sudo apt-get install apache2
 - sudo service apache2 start
 - sudo apt-get install curl
 - curl --write-out %{http_code} --output /dev/null http://localhost
 - curl --write-out %{http_code} --silent --output /dev/null http://localhost
 - bash monitoracao-servidor.sh
 - curl --write-out %{http_code} http://google.com
