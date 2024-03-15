if [ $resposta_http -ne 200 ]
then
mail -s "Problema no servidor" brunosantosc1@gmailcom<<del
Houve um problema no servidor e os usuarios pararam de ter acesso ao conteúdo web.
del
    systemctl restart apache2
fi