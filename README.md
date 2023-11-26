## HACKATHON IFPR AGROTECH

## Repositório relacionado aos códigos desenvolvidos no HACKATHON IFPR 2023.
## Repo original: https://github.com/pedrobolfe/hackathon-iftagrotech
Com a Pitch de apresentação por Felipe Barradas, foi conquistado o premio de 2º lugar 

* Gabriel Costa de Moraes
* Felipe Barradas Sebastião
* Julio Cesar Spezia
* Pedro Miotto Mujica
* Pedro Henrique Bolfe

 <img src="/images/logo-Cultiva_Cascavel.png">

## Executando
### Lista de passos para executar

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
