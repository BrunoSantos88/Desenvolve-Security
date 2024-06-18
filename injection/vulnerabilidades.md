# Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) é um tipo de ataque que engana um usuário para executar ações indesejadas em uma aplicação web na qual está autenticado. Este ataque aproveita o fato de que navegadores enviam automaticamente cookies associados a um site, independentemente de onde a solicitação se origina.
Funcionamento do CSRF

1. Autenticação: O usuário faz login em um site legítimo, como um banco, e recebe um cookie de sessão.
2. Visita a Site Malicioso: Enquanto ainda está logado no site legítimo, o usuário visita um site malicioso.
3. Solicitação Forjada: O site malicioso cria uma solicitação (como uma transferência de fundos) ao site legítimo usando o cookie de sessão do usuário.
4. Execução da Ação: O site legítimo executa a ação acreditando que foi iniciada pelo usuário autenticado.