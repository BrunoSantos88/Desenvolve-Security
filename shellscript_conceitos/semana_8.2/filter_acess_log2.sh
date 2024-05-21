#!/bin/bash

LOG_FILE="/var/log/apache2/access.log"
TARGET_IP="192.168.15.4"
if [ ! -f "$LOG_FILE" ]; then
    echo "Erro: O arquivo de log $LOG_FILE não foi encontrado."
    exit 1
fi
count=$(grep -c "$TARGET_IP" "$LOG_FILE")
if [ "$count" -ge 5 ]; then
    # Envia um email notificando sobre as ocorrências
    mail -s "IP $TARGET_IP acessou o servidor 5 ou mais vezes" brunosantosc1@gmail.com <<EOF
O endereço IP $TARGET_IP acessou o servidor pelo menos cinco vezes. Detalhes podem ser encontrados no arquivo de log de acesso do Apache.
EOF
fi