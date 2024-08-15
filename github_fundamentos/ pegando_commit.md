# git-cherry-pick

* RESUMO

````
git cherry-pick [--edit] [-n] [-m parent-number] [-s] [-x] [--ff]
		  [-S[<keyid>]] <commit>…​
git cherry-pick (--continue | --skip | --abort | --quit)
````

# DESCRIÇÃO

* Dado um ou mais commits existentes, aplique a alteração que cada um introduz, registrando um novo commit para cada um. Isso requer que a sua árvore de trabalho esteja limpa (nenhuma alteração a partir do commit HEAD).

* Quando não é óbvio como aplicar uma alteração, acontece o seguinte:

1. O ramo atual e o ponteiro HEAD permanecem no último commit realizado com sucesso.

2. A referência CHERRY_PICK_HEAD é configurada para apontar para o commit que introduziu a mudança que é difícil de aplicar.

3. Caminhos nos quais a mudança aplicada corretamente são atualizados no arquivo de índice e na sua árvore de trabalho.

4. Para os caminhos conflitantes, o arquivo do índice registra até três versões, conforme descrito na seção "MESCLAGEM REAL" do git-merge[1]. Os arquivos da árvore de trabalho incluirão uma descrição do conflito entre os marcadores de conflito habituais <<<<<<< e >>>>>>>.

5. Nenhuma outra modificação é feita.

6. Veja git-merge[1] para algumas dicas sobre como resolver tais conflitos.


# Exemplo

git cherry-pick

````
git push origin funcionalidade1 funcionalidade2
git log
git cherry-pick "idbranch"
````

* Vai unificar oque foi feito nas duas brach!

* Link: https://git-scm.com/docs/git-cherry-pick/pt_BR