* Juice shop heroku

https://juice-shop.herokuapp.com/#/


# Testfire

Descoberta da Vulnerabilidade
Na etapa de reconhecimento da aplicação foi localizado o endereço
http://demo.testfire.net/swagger/index.html, que expõe publicamente a documentação. Através
dele é possível descobrir os endpoints e funcionalidades do site, não sendo necessária
autenticação para realizar tarefas que deveriam ser restritas.


* Utilizadas as ferramentas Burp Suite, Nmap, Ffuf, Nuclei e Nikto.


# Nmap



# Nikto - Um poderoso scanner de Servidores Web 

* O Nikto é uma poderosa ferramenta escrita em Perl cujo objetivo é a análise de vulnerabilidades comuns em servidores Web. Ela foi desenvolvida para evidenciar o obvio: Ela irá encontrar diversos tipos de arquivos, configurações e programas padrões inseguros no seu servidor Web, se tornando um auxiliar para outros frameworks com o OpenVas, Nessus, Metasploit e etc.

* Ao contrário de outros scanners como o Uniscan (ferramenta bem legal que já abordamos uma atividade didática aqui no Blog), ele não irá procurar por falhas comuns de SQL Injection, apenas irá testar o servidor ao nivel de configuração.


* install  
* sudo apt-get install nikto -y



*  Fuzzing

O Fuzzing é uma técnica para testar o software usando ferramentas automáticas para fornecer entradas inválidas ou inesperadas para um programa ou função em um programa, logo verificando os resultados para ver se o programa falha ou age de forma inapropriada.



link: https://en.wikipedia.org/wiki/List_of_file_signatures