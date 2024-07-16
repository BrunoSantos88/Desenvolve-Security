# Lack of Resources & Rate Limiting

* Descrição
As solicitações de API consomem recursos como rede, CPU, memória e armazenamento. A quantidade de
recursos necessários para satisfazer uma solicitação depende muito da entrada do usuário e da lógica de
negócios do endpoint. Além disso, considere o fato de que solicitações de vários clientes de API competem por
recursos. Uma API é vulnerável se pelo menos um dos seguintes limites estiver ausente ou definido de forma
inadequada .

* Descoberta da Vulnerabilidade
Ao executar um teste para identificar vulnerabilidades XSS usando a ferramenta FUFF usando uma Seclist, foi
constatado que não há bloqueio ou timeout para executar ações de input. Descobri que a duração das ações de
descoberta é superior a 200ms. Segue imagem abaixo.

* Contenção/Erradicação
A limitação de taxa de API (rate limiting) é uma prática essencial na gestão de APIs são muito importantes para
evitar ataques DDoS, que exploram a capacidade de processamento ao sobrecarregar os servidores com
solicitações excessivas. Também é crucial para mitigar ataques de força bruta usando dicionários e payloads, que
buscam comprometer sistemas através da tentativa de credenciais ou explorando vulnerabilidades conhecidas.
Além disso, protege contra o uso de ferramentas de descoberta de host, como Nikto e Nmap, que podem ser
utilizadas para mapear vulnerabilidades ou configurações de rede.
Por fim, limita tentativas de injeção SQL, como as executadas pelo SQLMap, que visam explorar vulnerabilidades
de segurança em APIs e sistemas de banco de dados.

* Referências
- API4:2019
- Lack of Resources & Rate Limiting
- https://owasp.org/API-Security/editions/2019/en/0xa4-lack-of-resources-and-rate-limiting/