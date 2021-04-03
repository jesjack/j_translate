"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const Translator = new index_1.translator('python');
let translation = Translator.translate('Hola');
console.log(Translator.spawns[0].output);
