#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Usage: $0 <pattern>"
    exit 1
fi

# Filtra o arquivo de log de acesso do Apache usando o padrão fornecido
result=$(grep "$1" /var/log/apache2/access.log)

# Verifica se o padrão "GET" foi encontrado
if [[ "$result" =~ "GET" ]]; then
    echo "Pattern 'GET' found in access log." | mail -s "Pattern 'GET' Found" brunosantosc1@gmail.com
fi

echo "$result"