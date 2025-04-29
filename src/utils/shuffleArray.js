
/*
 * More on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
export const shuffleIt = (array) => {
    let currentIndex = array.length;
    
    while (currentIndex != 0) {  // While there remain elements to shuffle...
      let randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element...
      currentIndex--;
      // And swap it with the current element.
      [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }
    
    return array;
  }