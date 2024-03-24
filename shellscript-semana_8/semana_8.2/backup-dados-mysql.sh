#!/bin/bash

CAMINHO_HOME=/home/backup/

cd $CAMINHO_HOME
if [ ! -d backupmysql ]
then
    mkdir backupmysql
fi

mysqldump -u root $1 > $CAMINHO_HOME/backup/$1.sql
if [ $? -eq 0 ]
then
    echo "Backup foi realizado com sucesso"
else
    echo "Houve um problema no backup"
fi