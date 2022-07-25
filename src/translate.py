import sys

from deep_translator import GoogleTranslator

'''
Traducir el texto con el modulo deep_translator,
idioma del texto a traducir automatico, idioma del texto traducido obtenido como input
'''
to_translate = sys.argv[1]
translated = GoogleTranslator(source = 'auto', target = sys.argv[2]).translate(to_translate)
sys.stdout.write(translated)