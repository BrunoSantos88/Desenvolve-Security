#!/bin/bash

converte_imagem(){



}

varrer_diretorio(){
    cd $1
    for arquivo in *
    do
        caminho_arquivo=$(find ~/Downloads/imagens-novos-livros -name $arquivo)
        if [ -d $caminho_arquivo ]
        then
            varrer_diretorio $caminho_arquivo
        else
            converte_imagem
        fi
    done
}