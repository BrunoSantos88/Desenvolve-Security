# Ramificando o trabalho

* criar branch e alterar name, excluir 

````
git branch criarbranch
git branch -m master main (renomear)
git branch -d master (remover)
````

* alterar brach desenvolvimento

````
git checkout branch
git checkout -b novabranch
git switch main (retornar branch)
````

* git merge 

````
git merge branchquevcquerunicar (branch aonde vc esta)
````

* git rebase
-  No Git, existem duas maneiras principais de integrar as mudanças de um branch para outro: o merge e o rebase. Nesta seção, você aprenderá o que é o rebase, como fazê-lo, por que é uma ferramenta incrível e em que casos não vai querer usá-la.
O básico do Rebase

- Se você voltar a um exemplo anterior de Mesclagem Básica, você pode ver que o seu trabalho divergiu e fez commits em dois branches diferentes.

- https://git-scm.com/book/pt-br/v2/Branches-no-Git-Rebase


* git stash

````
git stash list 
git stash show 
git stash drop [-q|--quiet] 
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <nome-do-ramo> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
	     [-u|--include-untracked] [-a|--all] [-m|--message <mensagem>]
	     [--pathspec-from-file=<arquivo> [--pathspec-file-nul]]
	     [--] [<pathspec>…​]]
git stash clear
git stash create [<mensagem>]
git stash store [-m|--message <mensagem>] [-q|--quiet] <commit>
````

# DESCRIÇÃO

* Use o comando git stash quando quiser gravar a condição atual do diretório ativo e do índice, porém queira voltar para um diretório funcional limpo. O comando salva as suas alterações locais e reverte o diretório de trabalho para coincidir ao commit HEAD.

* As alterações armazenadas por este comando podem ser listadas com o comando git stash list, inspecionadas com o comando git stash show e restauradas (potencialmente em cima de um commit diferente) com o comando git stash apply. Chamar o comando git stash sem argumentos é o equivalente que executar o comando git stash push. É predefinido que um "stash" seja listado como "WIP no nomedoramo …​", porém você pode fornecer uma mensagem mais descritiva na linha de comando durante a criação de um.

* O último "stash" que você criou é armazenado em refs/stash; os "stash" mais antigos são encontrados no "reflog" desta referência e podem ser nomeados usando a sintaxe usual do "reflog" (como, por exemplo, stash@{0} é o "stash" criado mais recentemente, o stash@{1} é o anterior, o stash@{2.hours.ago} também é possível). As pilhas "stash" também podem ser referenciadas definindo apenas o índice "stash" (como, por exemplo, o número inteiro n é o equivalente a um stash@{n}).


* Link: https://git-scm.com/docs/git-stash/pt_BR