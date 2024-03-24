#!/bin/bash
varrer_diretorio(){
    $1
    cd ~/Downloads/imagens-novos-livros
    for arquivo in *
    do
        if [ -d $arquivo ]
        then
            varrer_diretorio $arquivo
        else
            #Conversao jpg para png
        fi
    done
}