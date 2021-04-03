import { spawnSync, SpawnSyncReturns } from 'child_process';
import path from 'path';

export class translator {
  private pyKey: string;
  public spawns: SpawnSyncReturns<string>[] = [];

  /**
   * Inicializa la clase para empezar a traducir
   * @param pyKey es el comando de python que usa tu ordenador para ejecutar python (aveces suele ser python3)
   */
  constructor(pyKey: string) {
    this.pyKey = pyKey;
  }

  /**
   * Translada un texto de un idioma a otro
   * @param str El string a traducir
   * @param target El lenguaje objetivo, por defecto ingles ('en')
   * @returns El string traducido
   */
  translate(str: string, target = 'en'): string {
    let spawn = spawnSync(
      this.pyKey,
      [
        path.join(__dirname, '..', 'src', 'translate.py'),
        str,
        target
      ]
    );
    this.spawns.push(spawn);
    return spawn.output[1].toString();
  }
}