# O que é Port Forward - redirecionamento de porta

Todo modem tem um IP externo
Quando você procura 'qual é o meu ip', este é seu IP externo

Você tem um computador conectado no seu modem da vivo
Ele tem um IP interno (começa com 192.168...)
Seu modem tem um tal de servidor DHCP que distribui esses IPs internos

Se você quiser acessar externamente este um serviço que está ouvindo a porta 40 no seu computador como faz?
Você precisa que quando procurarem a porta 40 do seu IP externo, o modem direcione para o ip interno correto 

![PortForwardcommodemdaVivo](/assets/images/aa.png)

# Onde 

Nas configs do seu modem você configura isso
![PortForwardcommodemdaVivo1](/assets/images/aaa.png)


# Putz mas eu uso um roteador melhor depois do modem da vivo

Aí você precisa colocar o modem da vivo em **modo bridge**

1. Entra nas configs do modem vivo e coloca em modo bridge
2. Entra no roteador depois e para conexão PPoE
3. login cliente@cliente 
4. senha cliente
5. ai já era