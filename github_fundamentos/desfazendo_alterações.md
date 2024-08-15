# Commandos desfazer commandos

* git restore

````
git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]
````
# Descrição 

* Restaure caminhos especificados na árvore de trabalho com algum conteúdo de uma fonte de restauração. Se um caminho for rastreado, mas não existir na fonte de restauração, ele será removido para corresponder à fonte.

* O comando também pode ser usado para restaurar o conteúdo no índice com --staged, ou restaurar tanto a árvore de trabalho quanto o índice com --staged --worktree.

* Por padrão, se --staged for dado, o conteúdo é restaurado do HEAD, caso contrário, do índice. Use --source para restaurar de um commit diferente.

* Consulte "Redefinir, restaurar e reverter" no git[1] para as diferenças entre os três comandos.

````
git restore --source = "tag commit"  arquivo "index.html"
````

#  Viajando no tempo

