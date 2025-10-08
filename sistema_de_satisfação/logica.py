import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# ----------------------------------------------------------
# Definição das variáveis de entrada e saída
# ----------------------------------------------------------

# Variável de entrada: Gorjeta em porcentagem (de 0 a 20%)
gorjeta_percentual = ctrl.Antecedent(np.arange(0, 21, 1), 'gorjeta_percentual')
# Variável de saída: Satisfação (de 0 a 10)
satisfacao = ctrl.Consequent(np.arange(0, 11, 1), 'satisfacao')

# ----------------------------------------------------------
# Definição dos conjuntos fuzzy (funções de pertinência)
# ----------------------------------------------------------

# Para a gorjeta
gorjeta_percentual['baixa'] = fuzz.trimf(gorjeta_percentual.universe, [0, 0, 10])
gorjeta_percentual['media'] = fuzz.trimf(gorjeta_percentual.universe, [5, 10, 15])
gorjeta_percentual['alta'] = fuzz.trimf(gorjeta_percentual.universe, [10, 20, 20])

# Para a satisfação
satisfacao['baixa'] = fuzz.trimf(satisfacao.universe, [0, 0, 5])
satisfacao['media'] = fuzz.trimf(satisfacao.universe, [2.5, 5, 7.5])
satisfacao['alta'] = fuzz.trimf(satisfacao.universe, [5, 10, 10])

# Opcional: Visualização dos conjuntos fuzzy
# gorjeta_percentual.view()
# satisfacao.view()

# ----------------------------------------------------------
# Definição das regras fuzzy
# ----------------------------------------------------------
regra1 = ctrl.Rule(gorjeta_percentual['baixa'], satisfacao['baixa'])
regra2 = ctrl.Rule(gorjeta_percentual['media'], satisfacao['media'])
regra3 = ctrl.Rule(gorjeta_percentual['alta'], satisfacao['alta'])

# ----------------------------------------------------------
# Criação e simulação do sistema de controle fuzzy
# ----------------------------------------------------------
satisfacao_ctrl = ctrl.ControlSystem([regra1, regra2, regra3])
satisfacao_sim = ctrl.ControlSystemSimulation(satisfacao_ctrl)

# ----------------------------------------------------------
# Lógica do restaurante com integração fuzzy
# ----------------------------------------------------------

print("bem vindo ao restaurante")
cliente = input("qual o seu nome: ")

cardapio = [
    {"nome": "parmegiana", "valor": 60.00},
    {"nome": "panqueca", "valor": 15.00},
    {"nome": "bife a cavalo", "valor": 30.00},
    {"nome": "strogonof", "valor": 45.00},
    {"nome": "lasanha", "valor": 38.00}
]

print("nosso cardapio:")
for i, item in enumerate(cardapio, 1):
    print(f"{i}º {item['nome']} R$: {item['valor']:.2f}")

# (Restante do código de pedido e pagamento - pode ser reutilizado do exemplo corrigido)
while True:
    try:
        pedido_idx = int(input("digite o número do prato desejado: "))
        if 1 <= pedido_idx <= len(cardapio):
            prato_escolhido = cardapio[pedido_idx - 1]
            break
        else:
            print("Opção inválida. Por favor, escolha um número da lista.")
    except ValueError:
        print("Entrada inválida. Digite um número.")

valor_total = prato_escolhido['valor']
print(f"Prato escolhido: {prato_escolhido['nome']}. Valor devido: R${valor_total:.2f}")

valor_pago = 0
while valor_pago < valor_total:
    try:
        valor_pago = float(input(f"Qual o valor que deseja pagar (R${valor_total:.2f}): "))
        if valor_pago < valor_total:
            print("Pagamento insuficiente. Por favor, pague o valor total.")
    except ValueError:
        print("Entrada inválida. Digite um valor numérico.")

if valor_pago > valor_total:
    troco = valor_pago - valor_total
    print(f"Valor pago: R${valor_pago:.2f}, seu troco é de R${troco:.2f}")
else:
    print(f"Valor pago: R${valor_pago:.2f}")

# ----------------------------------------------------------
# Cálculo da gorjeta e aplicação da lógica fuzzy
# ----------------------------------------------------------

while True:
    try:
        gorjeta = float(input("Com base na qualidade da comida e do serviço, nos deixe uma gorjeta: "))
        if gorjeta >= 0:
            break
        else:
            print("A gorjeta deve ser um valor positivo.")
    except ValueError:
        print("Entrada inválida. Digite um valor numérico.")

# Calcula a gorjeta em porcentagem
gorjeta_percentual_calc = (gorjeta / valor_total) * 100

# Passa o valor para o simulador fuzzy
satisfacao_sim.input['gorjeta_percentual'] = gorjeta_percentual_calc

# Computa o resultado
satisfacao_sim.compute()

# Defuzzifica para obter um valor nítido (de 0 a 10)
satisfacao_final = satisfacao_sim.output['satisfacao']

print(f"Valor total pago com a gorjeta: R${valor_total + gorjeta:.2f}")
print(f"A sua satisfação, de acordo com a gorjeta, é de {satisfacao_final:.2f} (em uma escala de 0 a 10).")

# Determina o nível de satisfação com base no resultado fuzzy
if satisfacao_final < 4:
    print("Obrigado pela gorjeta. Agradecemos seu feedback.")
elif satisfacao_final < 7:
    print("Ficamos satisfeitos com a sua avaliação!")
else:
    print("Muito obrigado! Estamos muito satisfeitos com o seu reconhecimento!")

# Seção de pontuação (mantida como no código corrigido, mas poderia ser outra entrada fuzzy)
while True:
    try:
        pontuacao = int(input("De 0 a 10, o quanto você gostou do nosso atendimento e serviços: "))
        if 0 <= pontuacao <= 10:
            print(f"A sua avaliação direta do serviço é: {pontuacao}")
            break
        else:
            print("Por favor, digite um número entre 0 e 10.")
    except ValueError:
        print("Entrada inválida. Digite um número.")