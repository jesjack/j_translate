import { translator } from './index';

const Translator = new translator('python');

let translation = Translator.translate('Hola');

console.log(Translator.spawns[0].output);