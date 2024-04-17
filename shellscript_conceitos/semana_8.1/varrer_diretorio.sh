#!/bin/bash

varrer_diretorio(){
    cd $1
    for arquivo in *
    do
        find ~/Downloads/imagens-novos-livros -name $arquivo
        if [ -d $arquivo ]
        then
            varrer_diretorio $arquivo
        else
            #Conversao jpg para png
        fi
    done
}