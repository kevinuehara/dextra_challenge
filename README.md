# dextra_challenge

Repositório para o projeto web do desafio proposto pela Dextra.

<b>Server Side:</b> Foi utilizado o NodeJS como aplicação RESTFul para o retorno dos JSON's fixos do cardápio e ingredientes que contemplam o desafio.

- Endpoint para busca do cardápio: GET <a href="http://localhost:8080/getMenu">http://localhost:8080/getMenu</a>
- Endpoint para busca dos ingredientes e seus respectivos preços: GET <a href="http://localhost:8080/getIngredients">http://localhost:8080/getIngredients</a>

<h3>Instruções</h3>
  <p>Requisitos: Estar com NodeJS e NPM instalado na máquina</p>

<ul>
  <li>Entrar na pasta do server nodeJS que encontra-se na pasta node-api</li>
  <li>O package.json irá se encontrar logo na pasta raíz node-api</li>
  <li>Executar o comando <b>npm install</b> para instalar todas as dependências, dentre elas: body-parser e express</li>
  <li>Executar o comando <b>npm start</b> para inicializar o server. Como default a porta está na 8080</li>
  <li>Clique nos endpoints acima para verificar se tudo está correto e os jsons estão retornando</li>
</ul>
<hr/>

<b>FrontEnd:</b> Foi utilizado o ReactJS, Bootstrap e FontAwesome para a construção da aplicação web, juntamente com as funcionalidades do ES6. Todas as regras de negócio envolvidas no projeto foram implementadas na camada client.

- URL da aplicação WEB <a href="http://localhost:3000/">http://localhost:3000/</a>

<h3>Instruções</h3>
  <p>Requisitos: Estar com NodeJS e NPM instalado na máquina</p>

<ul>
  <li>Entrar na pasta da aplicação que encontra-se na pasta webapp</li>
  <li>O package.json irá se encontrar logo na pasta raíz webapp</li>
  <li>Executar o comando <b>npm install</b> para instalar todas as dependências</li>
  <li>Executar o comando <b>npm start</b> para inicializar o server. Como default a porta está na 3000/li>
  <li>Clique na URL acima para verificar se tudo está correto</li>
</ul>

<b>OBS: Não foram implementados os testes automatizados</b><br/>
<hr/>

<h3>DESCRIÇÃO DO PROJETO DESAFIO</h3>

Somos uma startup do ramo de alimentos e precisamos de uma aplicação web para gerir nosso negócio. Nossa especialidade é a venda de lanches, de modo que alguns lanches são opções de cardápio e outros podem conter ingredientes personalizados.

A seguir, apresentamos a lista de ingredientes disponíveis:
  
<table>
  <tr>
    <th>Ingrediente</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td>Alface</td>
    <td>R$0,40</td>
  </tr>
  <tr>
    <td>Bacon</td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Hambúrguer de carne</td>
    <td>R$3,00</td>
  </tr>
  <tr>
    <td>Ovo</td>
    <td>R$0,80</td>
  </tr>
  <tr>
    <td>Queijo</td>
    <td>R$1,50</td>
  </tr>
</table> 
 
Segue as opções de cardápio e seus respectivos ingredientes:

<table>
  <tr>
    <th>Lanche</th>
    <th>Ingrediente</th>
  </tr>
  <tr>
    <td>X-Bacon</td>
    <td>Bacon, hambúrguer de carne e queijo</td>
  </tr>
  <tr>
    <td>X-Burger</td>
    <td>Hambúrguer de carne e queijo</td>
  </tr>
  <tr>
    <td>X-Egg</td>
    <td>Ovo, hambúrguer de carne e queijo</td>
  </tr>
  <tr>
    <td>X-Egg Bacon</td>
    <td>Ovo, bacon, hambúrguer de carne e queijo</td>
  </tr>
</table>

O valor de cada opção do cardápio é dado pela soma dos ingredientes que compõe o lanche. Além destas opções, o cliente pode personalizar seu lanche e escolher os ingredientes que desejar. Nesse caso, o preço do lanche também será calculado pela soma dos ingredientes.

Existe uma exceção à regra para o cálculo de preço, quando o lanche pertencer à uma promoção. A seguir, apresentamos a lista de promoções e suas respectivas regras de negócio:

<table>
  <tr>
    <th>Promoção</th>
    <th>REGRA DE NEGÓCIO</th>
  </tr>
  <tr>
    <td>Light</td>
    <td>Se o lanche tem alface e não tem bacon, ganha 10% de desconto.</td>
  </tr>
  <tr>
    <td>Muita Carne</td>
    <td>A cada 3 porções de carne o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante...   </td>
  </tr>
  <tr>
    <td>Muito Queijo</td>
    <td>A cada 3 porções de queijo o cliente só paga 2. Se o lanche tiver 6 porções, ocliente pagará 4. Assim por diante...</td>
  </tr>
  <tr>
    <td>Inflação</td>
    <td>Os valores dos ingredientes são alterados com frequência e não gastaríamos que isso influenciasse nos testes automatizados.</td>
  </tr>
</table>

<b>CRITÉRIOS DE COMPLETUDE</b>

* Implementar uma tela para o usuário montar o lanche. Ele pode selecionar um dos lanches existentes, fazer alterações (incluir ou remover ingredientes), ou criar um do zero, e a mesma deve exibir constantemente o valor total atualizado e as promoções que estão ativas, tudo calculado no cliente. Não é necessário salvar o lanche.
* O servidor irá apenas retornar as informações das tabelas de Ingrediente e Lanche (nada será criado ou salvo); a lógica das promoções pode ficar no client.
* Deve possuir testes automatizados para os seguintes pontos: valor dos lanches de cardápio, regra para cálculo de preço e promoções, etc.
* Não é necessário se preocupar com a autenticação dos usuários.
* Não é necessário persistir os dados forma alguma.

<b>ENTREGÁVEIS</b>

Você deve entregar um conjunto de artefatos, de acordo com o nível de complexidade que achar melhor. A seguir, os níveis de complexidade e seus respectivos entregáveis:

<b>Fácil</b>
* Implementar apenas o front, pode mockar o server (dica: importar jsons estáticos)
* Instruções para executar (se usar npm, ter os scripts para rodar e buildar no packages.json, ou bash scripts)

<b>Médio</b>
* Implementar front
* Implementar um servidor que retornar os jsons fixos e integrar com o client
* Instruções para executar (se usar npm, ter os scripts para rodar e buildar no packages.json, ou bash scripts)

![#c5f015](https://placehold.it/15/c5f015/000000?text=+)
<b>Difícil</b>
* Implementar front  -- FEITO
* Implementar um servidor que retornar os jsons fixos e integrar com o client -- FEITO
* Executar os testes automatizados em algum modelo de integração contínua; -- INCOMPLETO
* Fazer uma interface bonita (pode ser com bootstrap ou equivalente se quiser) -- FEITO
* Instruções para executar (se usar npm, ter os scripts para rodar e buildar no packages.json, ou bash scripts) -- FEITO
