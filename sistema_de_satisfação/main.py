print("bem vindo ao restaurante")
clientes = input("qual o seu nome:")


comidas = [
    "1º ""parmegiana R$:60.00 ",
    "2º ""panqueca R$: 15.00",
    "3º ""bife a cavalo R$: 30.00",
    "4º ""strogonof R$: 45.00",
    "5º ""lasanha R$: 38.00" 
]


print("nosso cardapio:", "\n",comidas)

pedido = input("digite as opções disponiveis:")

  
if pedido == "1":
  print("prato escolhido:", comidas[0])
  valor = 60
elif pedido == "2":
  print("prato escolhido:", comidas[1])
  valor = 15
elif pedido == "3":
  print("prato escolhido:", comidas[2])
  valor = 30
elif pedido == "4":
  print("prato escolhido:", comidas[3])
  valor = 45
elif pedido == "5":
  print("prato escolhido:", comidas[4])
  valor = 38
else:
  print("opção invalida")



print("valor devido:", valor, "R$")
valor2 = (int(input("qual o valor que deseja pagar:")))

while valor2 < valor:
    if valor2 == valor:
        print("valor pago:", valor2, "R$")
    elif valor2 < valor:
        print("pagamento não efetuado")
        print("valor devido:", valor, "R$")
        valor2 = (int(input("qual o valor que deseja pagar:")))
    if valor2 == valor:
        print("valor pago:", valor2, "R$")

    

gorjeta = (int(input("com base na qualidade da comida\n"
      "e do serviço nos deixe uma gorjeta:")))
print("valor pago com a gorjeta: ", valor2 + gorjeta)

if gorjeta >= 15 * valor2 / 100:
   print("gorjeta de 15% estou muito satisfeito")
elif gorjeta >= 10 * valor2 / 100:
    print("gorjeta de 10% estou satisfeito")
elif gorjeta <= 5 * valor2 / 100:
    print("gorjeta de 5% obrigado")

pontuacao = (int(input("de 00 à 10 o quanto você gostou do nosso antendimento\n"
                       "e serviços:")))
print("a qualidade do seu serviço é:", pontuacao)     



      