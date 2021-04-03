import sys
# from googletrans import Translator, constants
# from pprint import pprint

# # init the Google API translator
# translator = Translator()

# # translate a spanish text to english text (by default)
# if(sys.argv[2] == 'en'):
#   translation = translator.translate(text=str(sys.argv[1]))
# elif(sys.argv[2] == 'es'):
#   translation = translator.translate(text=str(sys.argv[1]), dest='es')
# sys.stdout.write(translation.text)

# from transformers import pipeline

# if(sys.argv[2] == 'en'):
#   translator = pipeline('translation_es_to_en')
# elif(sys.argv[2] == 'es'):
#   translator = pipeline('translation_en_to_es')

# translation = translator(sys.argv[1], max_length = len(sys.argv[1]) + 20)
# sys.stdout.write(translation[0]['translation_text'])

from deep_translator import GoogleTranslator
to_translate = sys.argv[1]
translated = GoogleTranslator(source='auto', target=sys.argv[2]).translate(to_translate)
sys.stdout.write(translated)