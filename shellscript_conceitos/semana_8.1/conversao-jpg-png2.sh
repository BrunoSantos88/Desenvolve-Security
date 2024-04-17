#!/bin/bash

cd ~/Downloads/imagens-livros
if [ -d png ]

for imagem in *.jpg
do
    imagem_sem_extensao=$(ls $imagem | awk -F. '{ print $1 }')
    convert $imagem_sem_extensao.jpg $imagem_sem_extensao.png
done