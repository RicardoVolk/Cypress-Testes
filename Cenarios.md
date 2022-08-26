1 - Mapeando cenários
Sabendo que a Avenue é a maior corretora nos EUA para brasileiros, descreva 3 cenários que
você julga como importante para a nossa plataforma. Nos explique detalhadamente por que
esses cenários são importantes.



    Cenário 1: Efetuar o cadastro com informações invalida
            Dado que um novo usuário tenta efetuar o cadastrado na plataforma com informações invalidas
            Quando colocar o CPF valido  
            e preencher um e-mail e uma senha invalida
            Então não deve conseguir cadastrar uma nova conta.

    
    Cenário 2: Usuário efetuando login
            Dado que o usuário tente efetuar o login
            Quando preencher e-mail valido
            e preenche a senha invalida
            Então o sistema deve indicar A pós 3 tentativas a conta sera bloqueada por motivos de segurança.


    Cenário 3: Pesquisa de ações
            Dado que o usuário digite uma empresa ou o codigo
            Quando colocado o nome ou codigo incorretos
            e a pesquisa não encontrou o resultado
            Então o sistema deve ser exibidas sugestões ao efetuar a busca.