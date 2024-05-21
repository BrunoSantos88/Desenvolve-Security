#!/bin/bash

CAMINHO_BACKUP=/home/bruno/backup_mutillidae_amazon
cd $CAMINHO_BACKUP
data=$(date +%F)
if [ ! -d $data ]
then
    mkdir $data
fi

tabelas=$(mysql -u root mutillidae -e "show tables;" | grep -v Tables)
for tabela in $tabelas
do
    mysqldump -u root mutillidae $tabela > $CAMINHO_BACKUP/$data/$tabela.sql
done

# Executa o comando aws s3 sync e verifica o status de retorno
if aws s3 sync $CAMINHO_BACKUP s3://my-desenvolve-bucket/backup/
then
    echo "Backup enviado para o AWS S3 com sucesso."
else
    echo "Erro ao enviar o backup para o AWS S3. Verifique as configurações e tente novamente."
fi