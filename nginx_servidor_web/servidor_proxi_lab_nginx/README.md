# install vagrant hashcorp

- install chocolatey </p>

´´´´
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install vagrant 

´´´´

- Commandos

´´´´
vagrant init "inincializar"
vagrant up  "aprovar deploy
vagrant reload "modificar atualizaçoes"
´´´´