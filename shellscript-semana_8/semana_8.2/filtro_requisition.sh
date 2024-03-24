#!/bin/bash
cat /var/log/apache2/access.log

if [ $1 == "GET" ]
then
    cat apache.log | grep GET
elif [ $1 == "POS bashT" ]
then
    cat apache.log | grep POST
elif [ $1 == "PUT" ]
then
    cat apache.log | grep PUT
elif [ $1 == "DELETE" ]
then
    cat apache.log | grep DELETE
fi

        *)
        echo "O parametro passado nao e valido"
        ;;
esac