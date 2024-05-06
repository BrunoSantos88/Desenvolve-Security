# MODELAGEN BANDO DE DADOS.
- Modelagem de banco de dados: entidades, relacionamentos e atributos
- Modelagem de banco de dados relacional: modelagem lógica e física

# O que é SGDB?

- MySQL;
- Oracle;
- PostgreSQL;
- MariaDB;
- Microsoft SQL Server;
- DB2 da IBM;
- SQLite.

- Em tecnologia, geralmente, utilizamos esses termos, alto nível e baixo nível, ligados à forma como nos comunicamos.
- O alto nível está mais relacionado com a linguagem da pessoa usuária, ou seja, a linguagem do ser humano. Já o baixo nível, está mais ligado à linguagem das máquinas.

- instalar _brmodelo:
link java: https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR </p>
link brmodelo: https://sourceforge.net/projects/brmodelo/ </p>
-usarweb:
link brmodelo web: https://www.brmodeloweb.com/lang/pt-br/index.html </p>

- Siglas:

- DER (Diagrama de Entidade e Relacionamento)
- MER (Modelo Entidade Relacionamento)

 # O que são entidades
Uma entidade é um objeto único no mundo real. Na verdade, ela pode ser tanto um objeto, uma coisa, quanto uma pessoa. Vamos observar alguns exemplos? </p>
Clientes de uma empresa podem ser considerados uma entidade. Carros vendidos em uma concessionária, em uma loja, podem ser considerados uma entidade também. Na verdade, o produto que alguma loja vende ou que alguma empresa fabrica pode ser considerado uma entidade. Um departamento de uma empresa, como, por exemplo, o departamento de vendas, pode ser considerado uma entidade da mesma forma. </p>

# Como representar uma entidade no diagrama? </p>
A representação da entidade será feita através de um retângulo. Para isso, vamos usar o software brModelo e fazer essa representação de forma prática.</p>

Com o brModelo aberto, a parte central é onde de fato faremos a construção do diagrama com todos os símbolos e as demais informações. Temos então a primeira parte, correspondente a uma coluna à esquerda com algumas características do que vamos modelar; a parte central é onde colocaremos os nossos símbolos; e à direita, temos uma coluna chamada "Artefatos".

# O que são atributos?
Os atributos estão sempre ligados às entidades. São as características, os elementos que compõem a entidade. Eles são tão ligados mutualmente que não podemos ter uma entidade sem um atributo, sem sua característica. Uma entidade sem nenhum atributo não precisaria ser uma entidade em si, poderia ser um atributo ou característica de outra entidade.
</p>

# Entidade forte x entidade fraca
Primeiramente, Marta explicou que a entidade forte é aquela que existe independentemente de outra entidade, enquanto a entidade fraca depende da existência de outra entidade. Mas o que significa que uma entidade depende de outra? </p>
Suponha que estamos modelando uma empresa e identificamos duas entidades: a "funcionário" e a "dependente de funcionário". Para a empresa, é interessante cadastrar tanto funcionários como os dependentes deles, pois existem alguns benefícios vinculados aos dependentes. </p>
Entretanto, faz sentido um dependente existir sem que este esteja vinculado a um funcionário? Não. Consequentemente, ambas são entidades, mas "dependente de funcionário" é uma entidade fraca em relação à entidade "funcionário".


# Entidades no diagrama entidade relacionamento

Como vimos anteriormente, entidades são os objetos físicos ou conceituais. Vamos analisar cada fragmento do texto para tentar identificar isso. </p>
Uma dica que trazemos de antemão é a seguinte: geralmente, associamos a entidade a um substantivo. Não sempre, mas é uma boa dica, é um norte para iniciarmos. </p>

- As entidades fortes são representadas através da figura de um retângulo simples. </p>
- As entidades fracas são representadas por um retângulo duplo, mas essa forma não existe pronta dentro do brModelo. Então, devemos colocar um retângulo menor dentro de um retângulo maior para representar de forma correta.

# Entidade e relacionamento.

Em um banco de dados, os relacionamentos são justamente isso: como as tabelas, ou, em nosso caso, como as entidades, se relacionam. Isso é tão importante que dá nome ao tipo de banco de dados que vamos estudar: o banco de dados relacional. </p>
Vamos abordar também brevemente os bancos de dados não relacionais, mas esse não é o foco do nosso curso. Estamos estudando bancos de dados que possuem relações entre as tabelas, entre as entidades.

# Graus de Relacionamento

Toda pessoa colaboradora pode exercer uma função na empresa. As duas entidades estão sendo relacionadas pelo relacionamento "trabalha em". </p>
Nesse caso temos um relacionamento binário. Se tivéssemos três entidades se relacionando — por exemplo, "Colaborador(a)" Trabalha em uma "Função" e também em um "Projeto"—, teríamos um relacionamento ternário. Agora, se tivermos quatro ou mais entidades se relacionando, o relacionamento se torna n-ário.</p>

# Conectando o Relacionamento às Entidades
 
Ela respondeu que podemos manipular livremente este losango de relacionamento. Podemos colocá-lo à esquerda da entidade Pedido.</p>
Para indicar que Relacionamento_1 está ilustrando o vínculo entre as entidades Cliente e Pedido, podemos ir até a barra de artefatos na lateral direita e descer até a penúltima opção, denominada "Cria nova ligação entre dois artefatos". </p>
Podemos clicar nessa opção, clicar no nosso relacionamento e em Clientes. Assim, ele cria uma linha em ângulos retos que conecta ambos os componentes.</p>
Podemos repetir o processo, dessa vez com a entidade Pedidos, e ele também estabelecerá a ligação. Dessa maneira, ilustramos que temos o vínculo entre essas duas entidades.</p>
Há outra maneira de fazermos isso no brModelo. Primeiro, vamos selecionar o Relacionamento_1 e suas linhas conectadas às entidades, mantendo o botão esquerdo do mouse pressionado, e criando um retângulo que os envolva. Ao pressionar o "Delete", esses elementos serão removidos.</p>
Em seguida, clicaremos na opção "Cria nova ligação entre dois artefatos" novamente. Na tela principal, onde antes havia o relacionamento, manteremos a tecla "Ctrl" pressionada e clicaremos com o botão esquerdo do mouse em Clientes e depois em Pedidos.</p>


# O que é Cardinalidade?
Então, o que é a cardinalidade? A palavra cardinalidade pode parecer estranha, mas podemos usar um sinônimo mais comum para ela, que é conectividade. A "Cardinalidade" entre entidades talvez não seja de fácil entendimento, mas "duas coisas que se conectam" faz sentido para nós. </p>
Isso é exatamente o que a cardinalidade quer dizer. No estudo da modelagem de banco de dados, é importante compreender como essas entidades se conectarão. </p>
Vamos pensar no exemplo de um hospital. Então, aqui, esses desenhos estão representando um consultório médico. Temos duas entidades: a entidade das pessoas médicas e a entidade das pessoas pacientes.</p>
Queremos entender como essas entidades se conectam e se relacionam (qual a cardinalidade desse relacionamento), porque para nós é bastante óbvio que pessoas médicas consultam pessoas pacientes. Mas como isso funciona?</p>
Será que apenas uma pessoa médica consulta uma pessoa paciente? Ou será que temos, de repente, uma pessoa médica atendendo mais de uma pessoa paciente? Uma pessoa médica pode atender muitas pessoas pacientes? Será que ela sempre precisa atender pacientes? Ou tem outra pessoa que não está sendo consultada? É esse tipo de estudo que a cardinalidade vai trazer para nós
</p>

Na seção "Cardinalidade" há o texto "(0,n)". Se clicarmos nele, veremos uma seta à sua direita que abre outras opções. Vamos clicar nela e verificar todos os tipos de cardinalidade disponíveis: </p>
(1,1)</p>
(0,1)</p>
(1,n)</p>
(0,n)</p>
Isso está bem definido.
</p>


# Tipos de Cardinalidade, na Prática
O primeiro passo que ela começou a explicar é o seguinte: vamos imaginar que temos um departamento e uma pessoa colaboradora. E a regra de negócio para esse caso específico é: "O departamento é gerenciado por apenas uma pessoa colaboradora." Não podemos ter duas pessoas colaboradoras gerenciando o departamento.  </p>
Mas na empresa, podemos ter mais de um departamento. Por exemplo, os departamentos de vendas, compras, o técnico e assim por diante. Mesmo assim, a regra permanece a mesma: para cada departamento, teremos apenas uma pessoa colaboradora gerenciando.  </p>
Nos dois sentidos isso é verdadeiro: em um departamento tem uma pessoa colaboradora e uma pessoa colaboradora só pode gerenciar um departamento também.  </p>
Nesse caso, nós temos uma relação de cardinalidade um para um (1, 1) porque há um departamento sendo gerenciado por uma pessoa colaboradora e uma pessoa colaboradora gerencia um departamento.  </p>

# Adicionando Relacionamentos e suas Cardinalidades

Voltando ao brModelo, temos o nosso primeiro relacionamento, Relacionamento_1. Se clicarmos nele, conseguimos alterar seu nome na aba lateral esquerda, assim como fazíamos com as entidades. </p>
Vamos mudar o nome Relacionamento_1 para torná-lo o mais claro possível. Se quisermos, podemos retornar ao nosso documento, reler o texto e entender como essas entidades estão se relacionando. Ou podemos usar um pouco de lógica, também. </p>
Por exemplo, o que a pessoa cliente faz com o pedido? Já mencionamos, ela "faz" o pedido. Então, podemos nomear o relacionamento como Faz. Quando pressionarmos "Enter", o texto do losango será alterado. </p>
A propósito, só por uma questão de concordância, vamos alterar a entidade Clientes para o singular. Vamos clicar nela e realizar o mesmo processo que fizemos com o relacionamento, retirando a letra "s" no final para torná-lo Cliente. </p>
Em seguida, veremos um detalhe importante: a cardinalidade do Relacionamento_1, não está como vimos (1 para 1 ou 1 para muitos). Nele, temos dois números entre parênteses. </p>

# Cardinalidade Mínima

Para entender um pouco melhor a cardinalidade mínima, vamos pensar no exemplo de uma casa e na sua relação com a pessoa proprietária. Uma casa pode existir sem proprietária? Não. </p></p>
Talvez possa vir na sua cabeça algum exemplo, mas, segundo a Constituição, não. Não podemos ter uma casa sem proprietária. </p>
Então, qual seria a cardinalidade mínima dessa relação Proprietária e Casa?. Tem que ser 1, pois tem que haver pelo menos uma pessoa. Não pode ser zero, porque tem que ter uma pessoa proprietária. </p>
Agora, vamos pensar nas pessoas que habitam ou estão alugando a casa. A casa, obrigatoriamente, tem que ter sempre uma pessoa morando? Não. É muito comum ter uma casa e não ter ninguém morando, à espera de locação. </p>
Ela pode ter zero, mas também pode ter uma, duas, três, N pessoas. Já aprendemos que na cardinalidade, quando tem mais de um, é N.</p>
Vamos falar especificamente da cardinalidade mínima. Qual a cardinalidade mínima de uma casa, por exemplo, que está para alugar? É zero. Podemos não ter ninguém nela.</p>
Esse é o conceito. Vamos retornar para o nosso brModelo.

# Criando uma Entidade Associativa
Se observarmos a barra lateral direita, veremos o botão de um retângulo com um losango em seu interior. O retângulo representa nossa entidade e o losango representa nossa relação. Esse é o símbolo que representa a entidade associativa. </p>
Como o próprio nome indica, ela vai associar duas entidades. Então, o que faremos agora? Vamos selecionar a relação Contém e apagá-la, pressionando "Delete". </p>
m seu lugar, vamos criar uma entidade associativa. Ela será criada em um retângulo denominado E. Assoc. 1 cujo interior possui um losango denominado Relação_1.</p>
Para conectar essa entidade a Pedido e Livro, vamos selecionar o botão "Cria nova relação entre dois artefatos" na mesma barra lateral direita.</p>

# Chave primária
Esses atributos são tão cruciais que eles têm um nome especial: chave primária. As chaves primárias são atributos exclusivos de uma entidade. Devido a essa importância, há alguns procedimentos e cuidados que precisamos tomar: </p>
1 - Esse atributo nunca se repete, por isso ele é único na entidade; </p>
2 - Ele não pode ser nulo. Precisa ter um valor;</p>
3 - Apenas as entidades fortes possuem chave primária. Essa informação é crucial. A partir dela, podemos diferenciar as entidades fortes das entidades fracas. Apenas as entidades fortes possuem chaves primárias. </p>
Mas, será que não podemos ter atributos que identifiquem a entidade fraca? Podemos, no entanto, eles não serão chamados de chaves primárias, mas como chaves parciais. Eles não têm força suficiente porque a entidade é fraca e está vinculada a uma entidade forte. </p>
Portanto, para complementar esse identificador da entidade fraca, nós usaremos a chave parcial com a chave primária da entidade forte. Vamos para o nosso modelo tentar identificar os atributos principais. </p>


# Entidades e Atributos
Em um modelo Entidade-Relacionamento, as entidades representam objetos ou conceitos do mundo real e são descritas por seus atributos. Por exemplo, em um sistema de biblioteca, podemos ter a entidade "Livro" com atributos como "Título", "Autor", "Ano de Publicação" etc.

# Chave Primária e Identificadores
Cada entidade possui uma chave primária, que é um atributo (ou conjunto de atributos) que identifica exclusivamente cada instância dessa entidade. Por exemplo, a entidade "Editora" pode ter a chave primária "cod_editora" para identificar cada editora de forma única.

# Entidades Fortes e Fracas
Uma entidade forte é aquela que possui sua própria chave primária e não depende de nenhuma outra entidade para ser identificada de forma única. Por outro lado, uma entidade fraca é aquela que não possui uma chave primária única por si só e depende da relação com uma entidade forte para ser identificada.

# Relacionamentos e Entidades Fracas
Os relacionamentos são conexões significativas entre entidades. Podemos ter relacionamentos entre entidades fortes ou entre entidades fortes e fracas. No exemplo anterior, temos a entidade forte "Editora" e a entidade fraca "Livro". A entidade "Livro" é fraca porque precisa de uma referência à entidade "Editora" para ser identificada de forma única. Portanto, além de seus próprios atributos, a entidade "Livro" inclui a chave primária da entidade "Editora" ("cod_editora") como parte de sua própria chave primária.

# Entidade Estoque como Exemplo
Agora, vamos considerar a entidade "Estoque". Ela está relacionada com a entidade "Livro" e, portanto, precisa receber as chaves identificadoras da entidade "Livro" para manter a integridade da relação entre elas. Nesse caso, a entidade "Estoque" receberá tanto a chave "cod_livro" como a chave da entidade "Editora" ("cod_editora") como parte de sua própria chave primária. </p>

Entender a distinção entre entidades fortes e fracas é essencial para uma modelagem de dados precisa e coerente. As entidades fortes têm suas próprias chaves primárias, enquanto as entidades fracas herdam as chaves primárias das entidades fortes com as quais estão relacionadas. Essa abordagem garante a integridade das relações e a correta representação dos objetos do mundo real dentro do esquema de banco de dados.</p>

# Livros
- Sistemas de Banco de Dados (pago, português, livro) 
Nesta obra, o autor traz informações detalhadas sobre sistemas de banco de dados. Para quem está aprofundando seus conhecimentos na área, este livro se mostra de fundamental importância, abordando conceitos e práticas do campo em questão, o que faz dele uma excelente ferramenta de estudo e consulta.
<p style="font-size: 10px;">📕 Sistemas de Banco de Dados.</p>
<a href="https://books.google.com.br/books?id=-Y32zwEACAAJ&newbks=0&hl=pt-BR&source=newbks_fb&redir_esc=y/" style="font-size: 10px;">Sistemas de Banco de Dados</a></p>

- MER e DER funções (gratuito, português, texto)
Através desse artigo, a Alura explora as funções de Modelagem Entidade-Relacionamento (MER) e Diagrama Entidade-Relacionamento (DER). O texto analisa as diferenças e similaridades de ambos os conceitos, fornecendo um panorama de como eles operam dentro da engenharia de software.
<p style="font-size: 10px;">📕 MER e DER funções.</p>
<a href="https://www.alura.com.br/artigos/mer-e-der-funcoes?_gl=1*1s9atji*_ga*MTU2NDUzNDUxMC4xNzA2NTkzMjg2*_ga_1EPWSW3PCS*MTcxNDk2ODcwNi41Ni4xLjE3MTQ5NzE5OTcuMC4wLjA.*_fplc*YVkwa3RLbVVsOEwyaFJIQU5TdiUyRlE0JTJGRnU4ZnJIaVVoajBkU0ZXVW5HSTJzQUlTcDJwNlJSUXMxWDFxV3lrMXlSNDRNQjI2eCUyQmF2ZGRleFBjWHNxa25USGFjSWVBQzRkUkN4dDZqQlZqT3ZHSTc2MWVVSXNTZ3ZwUEhkSEJBJTNEJTNE" style="font-size: 10px;">MER e DER funções</a></p>


- Relacionamento reflexivo modelagem banco de dados (gratuito, português, texto)
O artigo fornece aos leitores uma visão abrangente do relacionamento reflexivo na modelagem de banco de dados. Informa como o relacionamento reflexivo pode ser representado em um Diagrama Entidade Relacionamento (DER) e em uma tabela de banco de dados, além de discutir as vantagens e as principais características desse tipo de relacionamento.
<p style="font-size: 10px;">📕 Relacionamento reflexivo modelagem banco de dados.</p>
<a href="https://www.alura.com.br/artigos/relacionamento-reflexivo-modelagem-banco-de-dados?_gl=1*flda95*_ga*MTU2NDUzNDUxMC4xNzA2NTkzMjg2*_ga_1EPWSW3PCS*MTcxNDk2ODcwNi41Ni4xLjE3MTQ5NzIyNTQuMC4wLjA.*_fplc*YVkwa3RLbVVsOEwyaFJIQU5TdiUyRlE0JTJGRnU4ZnJIaVVoajBkU0ZXVW5HSTJzQUlTcDJwNlJSUXMxWDFxV3lrMXlSNDRNQjI2eCUyQmF2ZGRleFBjWHNxa25USGFjSWVBQzRkUkN4dDZqQlZqT3ZHSTc2MWVVSXNTZ3ZwUEhkSEJBJTNEJTNE" style="font-size: 10px;">Relacionamento reflexivo modelagem banco de dados. </a></p>


- Modelagem de dados (gratuito, português, texto)
Este é um artigo que aborda o conceito de modelagem de dados, explicando seu conceito, os diferentes tipos de modelagem e suas aplicações. O texto é bem estruturado e permite que até mesmo pessoas sem experiência prévia no tema compreendam do que se trata. É uma ótima leitura para quem trabalha com processo de desenvolvimento de software.
<p style="font-size: 10px;">📕 Modelagem de dados.</p>
<a href="https://www.cursospm3.com.br/blog/modelagem-de-dados/" style="font-size: 10px;">Modelagem de dados. </a></p>
