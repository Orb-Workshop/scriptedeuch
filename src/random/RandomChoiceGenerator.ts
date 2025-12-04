function shuffle(array) {
  let current_index = array.length;
  while (current_index != 0) {
    let random_index = Math.floor(Math.random() * current_index);
    current_index--;
    let tmp = array[current_index];
    array[current_index] = array[random_index];
    array[random_index] = tmp;
  }
}

// Generator Function
export default function* RandomChoiceGenerator(xs) {
  const store = xs;
  let refresh = () => {
    const _xs = store.map((x) => x);
    shuffle(_xs);
    return _xs;
  };
  xs = refresh();

  while(true) {
    if (xs.length <= 0) xs = refresh();
    yield xs.pop();
  }
}
