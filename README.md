# Data-Internationalization

Usage of the nodeJs internationalization API to format and work with data
node version >= 14.3 (we gonna use ECMAScript modules)

# Ciclo de vida JS

# Introdução aos ECMAScript Modules

## Dependências para projeto

- DraftLog - Atualiza a instancia do log que está corrente no terminal
- Chalk - imprimi os dados com uma cor mais bonita
- chalk-table - para impressão de logs em formato de tabela
- nodemon - live reload

## Importando dependencias

Para usar o `import` em vez do require temos que primeiro alterar o packadge json para dizer que estamos trabalhando em um module.

```jsx
import database from "./../database.json";
```

No package.json setamos o tipo como module e tbm já fazemos o script par rodar a aplicação. No script vamos falar para o `nodemon` ignorar o database, para ele nao atualizar o servidor sempre que um dado for adicionado no arquivo que simula o database. Usamos o `exec` para ele rodar o comando customizado que queremos, em seguida falamos para onde ele vai rodar (no caso do exemplo src/indes.js). A flag `--experimentl-json-modules` é para poder importar json

```json
{
"name":"aplicao-1"
...
"type":"module",
"scripts":{
	"dev":	"npx nodemon --ignore database.json --exec node --experimental-json-modules src/index.js",
}
}

```

## Exportando uma classe

Podemos usar o export default para exportar uma classe

```js
export default class Person {
	constructor ({
	//...
})
	.../
}
```

Na hora de importar esse arquivo (classe) temos que passar a extenção dele, por exemplo:

```js
import Person from "./person/js";
```
