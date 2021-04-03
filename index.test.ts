import { translator } from './index';

const Translator = new translator('python');

console.log(Translator.translate('Hola'));