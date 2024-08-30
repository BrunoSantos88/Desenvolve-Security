# POSTGRESS EM DOCKER

1. Criar uma pasta para armazenar os dados:

Esta pasta será usada para persistir os dados do PostgreSQL no sistema de arquivos do host, permitindo que os dados sejam mantidos mesmo que o container seja removido.

bash
``````
mkdir -p ~/meu_docker/postgres_data
``````

2. Executar o container PostgreSQL com persistência e senha:

Use o comando docker run para criar e iniciar um container PostgreSQL. Este comando mapeia a pasta criada no host para o diretório de dados dentro do container e define a senha do usuário postgres (que é o superusuário no PostgreSQL).

bash
``````
docker run -d \
  --name meu_postgres \
  -e POSTGRES_PASSWORD=root \
  -v ~/meu_docker/postgres_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres
``````
Explicação dos parâmetros:

    -d: Executa o container em segundo plano.
    --name meu_postgres: Dá um nome ao container.
    -e POSTGRES_PASSWORD=root: Define a senha do usuário postgres como "root".
    -v ~/meu_docker/postgres_data:/var/lib/postgresql/data: Monta a pasta do host para persistência dos dados.
    -p 5432:5432: Mapeia a porta 5432 do host para a porta 5432 do container, permitindo o acesso ao PostgreSQL.

3. Verificar o status do container:

Após executar o comando, você pode verificar se o container está rodando corretamente usando:

bash
``````
docker ps -a
``````
Isso deve listar o container meu_postgres com o status "Up" se tudo estiver correto.
4. Acessar o PostgreSQL:

Você pode acessar o banco de dados usando um cliente PostgreSQL como psql:

bash
``````
docker exec -it meu_postgres psql -U postgres
``````
Isso abre um prompt interativo onde você pode executar comandos SQL.

Agora, você tem um container PostgreSQL rodando com dados persistidos e senha configurada para o usuário postgres.