# Improper Input Validation

CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H

* Descrição
Improper Input Validation é uma falha de segurança que ocorre quando um sistema não verifica
corretamente os dados de entrada fornecidos por um usuário ou uma fonte externa antes de processá-los.
Essa falha pode permitir que um atacante envie entradas maliciosas que o sistema não reconhece como
prejudiciais, resultando em diversos problemas de segurança, como a execução de código arbitrário.
* Descoberta da Vulnerabilidade
Simulei uma compra, uma unidade de um único produto. Usei um proxy e alterei a quantidade desse produto
para um valor negativo, -500, retornar ao site para comprar mais itens, e assim no carrinho de compras
existindo valores negativos.
* Em um site de compras, não deve haver valores negativos. Um invasor pode explorar essa vulnerabilidade e causar
prejuízos financeiros. Segue imagem abaixo.
* Contenção/Possíveis Soluções/Erradicação
Implemente validações no lado do cliente para impedir que valores negativos sejam inseridos, mesmo que sejam
manipulados pelo cliente. Assegure que todas as entradas do usuário sejam devidamente validadas e sanitizadas
para prevenir a inserção de valores inválidos. Defina limites de quantidade para produtos, evitando a possibilidade
de adicionar quantidades que possam resultar em valores negativos

* Referências
- C-5: Validate All Inputs
- Improper Input Validation
- https://owasp.org/www-project-proactive-controls/v3/en/c5-validate-inputs
- https://owasp.deteact.com/cheat/cheatsheets/Input_Validation_Cheat_Sheet.html