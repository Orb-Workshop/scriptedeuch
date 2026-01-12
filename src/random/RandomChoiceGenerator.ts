/**
   Random Choice Generation for Array Collections.
 */

/** Shuffle the given `array`, in-place */
function shuffle<T>(array: Array<T>): void {
  let current_index = array.length;
  while (current_index != 0) {
    const random_index = Math.floor(Math.random() * current_index);
    current_index--;
    const tmp = array[current_index];
    array[current_index] = array[random_index];
    array[random_index] = tmp;
  }
}

/** Returns a generator that returns a random shuffle of the provided array. */
export default function* RandomChoiceGenerator<T>(xs: Array<T>): Generator<T> {
  const store = xs;
  const refresh = () => {
    const _xs = store.map((x) => x);
    shuffle<T>(_xs);
    return _xs;
  };
  xs = refresh();

  while(true) {
    if (xs.length <= 0) xs = refresh();
    yield xs.pop();
  }
}
