#!/bin/bash

resposta_http=$(curl --write-out %{http_code} --silent --output /dev/null http://192.168.15.7)

echo $resposta_http