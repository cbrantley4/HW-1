let name = { mom: "Susan", dad: "Mark", sister1: "Alyson", sister2: "Melissa", brotherInLaw1: "Chris", brotherInLaw2: "Patrick", friend1: "Andrea", friend2: "Marissa", friend3: "Jeanette", friend4: "Christina" };

name.friend5 = "Jenny"
name.friend5 = "MaryAma"

const twinSister = name.sister2;

console.log(twinSister);

name['sister2'] = "twin"

console.log(name);
