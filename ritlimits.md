Utilize o Rate Limit

Essa é uma prática interessante e que pode ajudar a prevenir ataques que focam em deixar sua infraestrutura indisponível por uma quantidade alta de requisições.

Com a implementação desse header você consegue restringir o número de requisições do client.

Com a implementação, você sempre retorna os seguintes headers na resposta de uma requisição:

    X-Rate-Limit-Limit — Número de requisições permitidas durante um período específico (dia, hora, etc)
    X-Rate-Limit-Remaining —Número de requisições restantes do período corrente
    X-Rate-Limit-Reset — Segundos restantes do período corrente

Além disso, em casos que o client ultrapasse o limite de requisições, você retorna o status code 429 — Too Many Requests.