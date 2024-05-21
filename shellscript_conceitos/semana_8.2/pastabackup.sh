#!/bin/bash

CAMINHO_HOME=/home/bruno

cd $CAMINHO_HOME
if [ ! -d backup ]
then
    mkdir backup
fi

mysqldump -u root $1 > $CAMINHO_HOME/backup/$1.sql