# O que é ShadowSocks e pra que serve?

![[ShadowSocks no Synology.png]]

É um middleman para criptografar *e obfuscar* seus dados para a internet
Precisa de um servidor local (antes da ISP) e um remoto (depois do que você está tentando evitar)

Até onde eu entendi ele pega seu tráfego e finge ser dados de navegação normal encriptado (https) para passar por firewalls e restrições

Eu estou testando porque parece que um ISP do Paraguai está limitando meus tráfego de certos serviços

# Qual a diferença pra VPN?

VPN encripta todo seu dado mas firewalls percebem isso e muito das vezes bloqueam esse tipo de conexão, no meu caso ISP do Paraguai detecta 

# Como instalar no Synology

1. Acessar https://github.com/davidcava/shadowsocks-libev-dsm
2. Baixar a versão para o processador que seu Synology usa
3. Criar um DDNS para você sempre ter um IP fixo
4. Cria um redirecionamento de porta do seu roteador (isso em sí é um B.O. [[Configurar Port Forward]]) para uma interna (nesse exemplo em verde)
5. ![[Pasted image 20240514135148.png]]
6. Abre o pacote instalado no DSM e configura um ss server ![[ShadowSocks no Synology-1.png]]
7. Instala um shadowsocks cliente e configura para acessar esse DDNS com as senhas e método de cripto correto
8. Se tudo der certo você ativa a conexão e vai ver o tráfego assim
9. ![[ShadowSocks no Synology-2.png]]

