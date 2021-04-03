"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translator = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
class translator {
    /**
     * Inicializa la clase para empezar a traducir
     * @param pyKey es el comando de python que usa tu ordenador para ejecutar python (aveces suele ser python3)
     */
    constructor(pyKey) {
        this.spawns = [];
        this.pyKey = pyKey;
    }
    /**
     * Translada un texto de un idioma a otro
     * @param str El string a traducir
     * @param target El lenguaje objetivo, por defecto ingles ('en')
     * @returns El string traducido
     */
    translate(str, target = 'en') {
        let spawn = child_process_1.spawnSync(this.pyKey, [
            path_1.default.join(__dirname, '..', 'src', 'translate.py'),
            str,
            target
        ]);
        this.spawns.push(spawn);
        return spawn.output[1].toString();
    }
}
exports.translator = translator;
