function createSpellFactory() {
  let level = 0; // המונה המשותף (נשמר בזכות closure)

  return function spellFactory(name) {
    level++;                  // כל לחש חדש = רמה גבוהה יותר
    const myLevel = level;    // שומרים את הרמה של הלחש הזה

    return function () {      // זה הלחש עצמו
      console.log(`${name} level ${myLevel}!`);
    };
  };
}

const spellFactory = createSpellFactory();

const fireball = spellFactory("fireball");
fireball(); // fireball level 1!

const advancedFireball = spellFactory("adFireball");
advancedFireball(); // adFireball level 2!