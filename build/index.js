"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt = void 0;
const tt_1 = require("./src/tt");
function tt(text, lang) {
    try {
        const Translator = new tt_1.translator('python');
        return Translator.translate(text, lang);
    }
    catch (_a) {
        const Translator = new tt_1.translator('python3');
        return Translator.translate(text, lang);
    }
}
exports.tt = tt;
