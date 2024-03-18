#!/bin/bash

CAMINHO_BACKUP=/home/bruno/backup_mutillidae_amazon
cd $CAMINHO_BACKUP
data=$(date +%F)
if [ ! -d $data ]
then
    mkdir $data
fi

tabelas=$(mysql -u root mutillidae -e "show tables;" | grep -v Tables)
for  tabela in $tabelas
do
    mysqldump -u root mutillidae $tabela > $CAMINHO_BACKUP/$data/$tabela.sql
done

## command aws s3
aws s3 sync $CAMINHO_BACKUP s3://my-desenvolve-bucket/backup/

