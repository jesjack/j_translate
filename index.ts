import { spawnSync, SpawnSyncReturns } from 'child_process';
import path from 'path';

export class translator {
  private pyKey: string;
  public spawns: SpawnSyncReturns<string>[] = [];

  /**
   * Inicializa la clase para empezar a traducir
   * @param pyKey es el comando de python que usa tu ordenador para ejecutar python (aveces suele ser python3), por defecto 'python'
   */
  constructor(pyKey = 'python') {
    this.pyKey = pyKey;
  }

  /**
   * Translada un texto de un idioma a otro
   * @param str El string a traducir
   * @param target El lenguaje objetivo, por defecto ingles ('en')
   * @returns El string traducido
   */
  translate(str: string, target:
    'en' | 'es' | 'german' | 'french' | 'fr' | 'chinense' | 'nl' | 'af' | 'sq' | 'az' | 'eu' | 'bs' |
    'ca' | 'ny' | 'co' | 'hr' | 'da' | 'eo' | 'et' | 'fi' | 'fr' | 'gl' | 'de' | 'ht' | 'ha' |
    'he' | 'hu' | 'id' | 'ga' | 'is' | 'it' | 'ku' | 'la' | 'latin' | 'lb' | 'lt' | 'lv' | 'mg' |
    'ms' | 'mt' | 'mi' | 'no' | 'pt' | 'ro' | 'sm' | 'gd' | 'sn' | 'sk' | 'sl' | 'so' | 'st' |
    'su' | 'sw' | 'sv' | 'tl' | 'tr' | 'uk' | 'uz' | 'cy' | 'fy' | 'xh' | 'yi' | 'yo' | 'zu'
  = 'en'): string {
    let spawn = spawnSync(
      this.pyKey,
      [
        path.join(__dirname, '..', 'src', 'translate.py'),
        str,
        target
      ]
    );
    this.spawns.push(spawn);
    if(spawn.output[2].toString().length > 0) throw spawn.output[2].toString();
    return spawn.output[1].toString();
  }
}