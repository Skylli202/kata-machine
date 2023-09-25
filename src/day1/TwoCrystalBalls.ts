export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmout = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmout;
  for (; i < breaks.length; i += jmpAmout) {
    if (breaks[i]) break;
  }

  i -= jmpAmout;

  for (let j = 0; j < jmpAmout && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;

  // My solution
  // let lo = 0;
  // let hi = lo * Math.sqrt(breaks.length) + Math.sqrt(breaks.length);
  //
  // do {
  //   const broke = breaks[hi];
  //   if (broke) {
  //     for (let i = lo; i < hi; i++) {
  //       if (breaks[i]) return i;
  //     }
  //     // return -1;
  //     return hi;
  //   } else {
  //     lo++;
  //     hi = lo * Math.sqrt(breaks.length) + Math.sqrt(breaks.length);
  //   }
  // } while (hi < breaks.length);
  // return -1;
}
