import { translator, Languages } from './src/tt'

export function tt(text: string, lang: Languages) {
  try {
    const Translator = new translator('python');
    return Translator.translate(text, lang);
  } catch {
    const Translator = new translator('python3');
    return Translator.translate(text, lang);
  }
}