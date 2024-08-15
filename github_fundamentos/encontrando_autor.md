#  Git Blame

* git-blame - Exiba qual revisão e qual foi o autor que alterou cada linha de um arquivo pela última vez
RESUMO

git blame [-c] [-b] [-l] [--root] [-t] [-f] [-n] [-s] [-e] [-p] [-w] [--incremental]
	    [-L <range>] [-S <revs-file>] [-M] [-C] [-C] [-C] [--since=<data>]
	    [--ignore-rev <rev>] [--ignore-revs-file <arquivo>]
	    [--progress] [--abbrev=<n>] [<rev> | --contents <arquivo> | --reverse <rev>..<rev>]
	    [--] <arquivo>

# DESCRIÇÃO

1. Anota cada linha no arquivo informado com informações da revisão que modificou a linha pela última vez. Opcionalmente, comece a anotar a partir da revisão informada.

2. Quando informado uma ou mais vezes, a opção -L limita a anotação às linhas solicitadas.

3. A origem das linhas é seguida automaticamente pelas renomeações através de todos os arquivos (atualmente não há uma opção para desativar a presente renomeação). Para seguir as linhas movidas de um arquivo para outro ou para seguir as linhas que foram copiadas e coladas de um outro arquivo, etc., consulte as opções -C e -M.

4. O relatório não informa nada sobre quais as linhas foram eliminadas ou quais foram substituídas; é necessário utilizar uma ferramenta como "git diff" ou a interface "pickaxe" mencionada de forma breve no parágrafo seguinte.

5. Além de oferecer compatibilidade à anotação do arquivo, o Git também é compatível com a pesquisa no histórico do desenvolvimento para quando ocorra uma alteração em um trecho do código. Isso torna possível o monitoramento quando um trecho do código for adicionado em um arquivo, movido ou copiado entre os arquivos e eventualmente tenha sido excluído ou substituído. Funciona pesquisando uma sequência de texto no diff. Um pequeno exemplo da interface "pickaxe" que pesquisa por blame_usage:

````
$ git log --pretty=oneline -S'blame_usage'
5040f17eba15504bad66b14a645bddd9b015ebb7 blame -S <ancestry-file>
ea4c7f9bf69e781dd0cd88d2bccb2bf5cc15c9a7 git-blame: Make the output
````

* Link: https://git-scm.com/docs/git-blame/pt_BR

