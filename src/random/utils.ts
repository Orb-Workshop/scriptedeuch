export function RandomInteger(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  let rf = Math.random() * (end - start) + start;
  return Math.round(rf);
}

export function RandomWord() {
  let word_array = [
    "Alfa","Bravo","Charlie",
    "Delta","Echo","Foxtrot",
    "Golf", "Hotel", "India",
    "Juliet", "Kilo", "Lima",
    "Mike", "November", "Orb",
    "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform",
    "Victor", "Whiskey", "Xray",
    "Yankee", "Zulu",
  ];
  let random_index = RandomInteger(word_array.length-1);
  return word_array[random_index];
}

export function RandomSeed() {
  let s = RandomWord() + "-";
  for (let i = 0; i < 3; i++)
    s += RandomInteger(0,9);
  return s;
}
