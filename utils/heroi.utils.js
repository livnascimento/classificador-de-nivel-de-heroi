const verificarNivelHeroi = (heroi) => {
    console.log(`heroi xp: _${heroi.xp}_`);
    if (heroi.xp < 1000) return "Ferro";
    else if (heroi.xp > 1000 && heroi.xp <= 2000) return "Bronze";
    else if (heroi.xp > 2000 && heroi.xp <= 5000) return "Prata";
    else if (heroi.xp > 5000 && heroi.xp <= 7000) return "Ouro";
    else if (heroi.xp > 7000 && heroi.xp <= 8000) return "Platina";
    else if (heroi.xp > 8000 && heroi.xp <= 9000) return "Ascendente";
    else if (heroi.xp > 9000 && heroi.xp <= 10000) return "Imortal";
    else if (heroi.xp > 10000) return "Radiante";
    else return "XP fora do intervalo conhecido";
}

module.exports = verificarNivelHeroi;