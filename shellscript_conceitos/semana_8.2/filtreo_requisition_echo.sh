#!/bin/bash
cat /var/log/apache2/access.log

case $1 in
        GET)
        cat apache.log | grep GET
        ;;

        POST)
        cat apache.log | grep POST
        ;;

        PUT)
        cat apache.log | grep PUT
        ;;

        DELETE)
        cat apache.log | grep DELETE
        ;;

        *)
        echo "O parametro passado nao e valido"
        ;;
esac