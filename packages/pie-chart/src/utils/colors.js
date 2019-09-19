/**
 * Color factory method
 */

export const colors = ['blue', 'orange', 'yellow', 'green', 'red'];

function* colorGenerator() {
  let i = 0;
  while (true) {
    yield colors[i];
    i += 1;
    if (i >= colors.length) {
      i = 0;
    }
  }
}

export const colorFactory = colorGenerator();
