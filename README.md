# Traductor para Node JS
#### Por Edgar Jesús Moreno Castañeda (jesjack)

Para usarse es necesario tener los siguientes requisitos:
- Tener python instalado.
- Tener el modulo de python __deep_translator__ instalado
  (se puede instalar con pip)

## Modo de uso
```js
const j_translator = require('j_translator');
const Translator = new j_translator('python'); // Aquí se usará el comando python que tengas instalado, en ocasiones es python3

Translator.translate(input_text, 'en'); // -> El texto traducido al idioma seleccionado.
```