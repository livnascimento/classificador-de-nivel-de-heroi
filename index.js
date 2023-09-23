const verificarNivelHeroi = require('./utils/heroi.utils');

const heroi = { nome: "Aurora", xp: 5699 };

const nivel = verificarNivelHeroi(heroi);

console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);