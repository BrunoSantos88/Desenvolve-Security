# C5: Validar todas as entradas

* Input Validation Requirements
* Sanitization and Sandboxing Requirements
* Como pode ser feito um ataque de SSRF misturando conceitos na prática
* Stored Cryptography Verification Requirements
* Output encoding and Injection prevention
* Deserialization Prevention Techniques
* Log Content Requirements
* Log Processing Requirements
* Log Protection Requirements
* Error Handling


- Descrição
* A validação de entrada é uma técnica de programação que garante que apenas dados formatados corretamente possam entrar em um componente do sistema de software. </p>

- Sintaxe e Validade Semântica
* Um aplicativo deve verificar se os dados são sintaticamente e semanticamente válidos (nessa ordem) antes de usá-los de qualquer forma (incluindo exibi-los ao usuário).</p>

- Validade de sintaxe 
* significa que os dados estão na forma esperada. Por exemplo, um aplicativo pode permitir que um usuário selecione um “ID de conta” de quatro dígitos para realizar algum tipo de operação. O aplicativo deve assumir que o usuário está inserindo uma carga útil de injeção SQL e deve verificar se os dados inseridos pelo usuário têm exatamente quatro dígitos e consistem apenas em números (além de utilizar a parametrização de consulta adequada). </p>

- A validade semântica 
* Inclui apenas a aceitação de entradas que estejam dentro de um intervalo aceitável para a funcionalidade e o contexto do aplicativo em questão. Por exemplo, uma data de início deve ser anterior a uma data de término ao escolher intervalos de datas. </p>

- Lista de permissões versus lista de bloqueios
* Existem duas abordagens gerais para realizar a validação de sintaxe de entrada, comumente conhecidas como listas de permissão e negação: </p>

- Lista de bloqueio ou validação de lista de bloqueio 
* Tenta verificar se determinados dados não contêm conteúdo “conhecido como inválido”. Por exemplo, um aplicativo da web pode bloquear entradas que contenham o texto exato  </p>

<SCRIPT> para ajudar a prevenir XSS. </SCRIPT>

* No entanto, essa defesa pode ser evitada com uma tag de script em minúsculas ou uma tag de script com letras maiúsculas e minúsculas. </p>

* A lista de permissões ou a validação da lista de permissões tentam verificar se um dado dado corresponde a um conjunto de regras “conhecidas como válidas”. Por exemplo, uma regra de validação de lista de permissões para um estado dos EUA seria um código de duas letras que representa apenas um dos estados válidos dos EUA. </p>

- Importante Ao criar software seguro:
* A lista de permissões é a abordagem mínima recomendada. A lista de bloqueio é propensa a erros e pode ser contornada com várias técnicas de evasão e pode ser perigosa quando depende dela mesma. Embora muitas vezes a lista de bloqueio possa ser evitada, ela pode ser útil para ajudar a detectar ataques óbvios. Portanto, embora a lista de permissões ajude a limitar a superfície de ataque, garantindo que os dados tenham a validade sintática e semântica correta, a lista de bloqueios ajuda a detectar e potencialmente interromper ataques óbvios. </p>

Referencia: </p>
Link: https://owasp.org/www-project-proactive-controls/v3/en/c5-validate-inputs

# Validation, Sanitization and Enconding Verification