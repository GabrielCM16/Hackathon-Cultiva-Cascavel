## HACKATHON IFPR AGROTECH

## Repositório relacionado aos códigos desenvolvidos no HACKATHON IFPR 2023.
## Repo original: https://github.com/pedrobolfe/hackathon-iftagrotech

# Sobre o projeto
O primeiro Hackathon ocorrido no evento IF-AgroTech 2023 teve a participação de 4 equipes, com o tema "Soluções para o Pequeno Agricultor". O projeto desenvolvido Cultiva Cascavel, surgiu após diversas conversas sobre a necessidade de melhoria de processos na agricultura familiar como o controle de doações de alimentos e disseminação de informações, assim o sistema Web visa melhorar a comunicação entre produtores, clientes e instituições responsáveis pela coordenação da Agricultura Familiar, por meio do sistema, você é possivel acessar as Unidades de Produção e seus pontos de venda por meio de uma mapa. Ademais, Produtores também conseguem cadastrar seus dados relacionados ao plantio e produtos vendidos que podem ser acessados por instituições responsáveis pela coordenação da Agricultura Familiar.

Com a Pitch de apresentação por Felipe Barradas, foi conquistado o prêmio de 2º lugar. 

# A Equipe
* Gabriel Costa de Moraes
* Felipe Barradas Sebastião
* Julio Cesar Spezia
* Pedro Miotto Mujica
* Pedro Henrique Bolfe

 <img src="/images/logo-Cultiva_Cascavel.png">

## Executando
### Lista de passos para executar projeto

* Clonar repositório Git.
```sh
git clone https://github.com/GabrielCM16/hackathon-iftagrotech-2023.git
```
* Abrir pasta do repostório clonado e criar um ambiente virtual Python
```sh
cd .\hackathon-iftagrotech-2023\
```
```sh
python -m venv venv
```
* Abrir o diretório backend e instalar as dependências Python
```sh
cd .\backend\
```
```sh
pip install -r .\requeriments.txt
```
* Por último, inicar o servidor local e abrir o arquivo index.html
```sh
uvicorn main:app --reload
```
