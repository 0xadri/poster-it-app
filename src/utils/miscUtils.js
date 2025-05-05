
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

export const getNextIndexInImageArray = (currentIndex, arrayLength) => {
  // first click on "next"
  if (currentIndex === "first") {
    currentIndex = 0;
    if (arrayLength && arrayLength > 0) currentIndex = 1;
    return currentIndex;
  } 
  // subsequent clicks
  if (arrayLength > currentIndex + 1) {
    currentIndex += 1
  } 
  else {
    currentIndex = 0;
  }
  return currentIndex;
}


export const mustDisplayMobileWarning = () => {
  const WEB_STORAGE_WARNING = "mobile-warning";
  const mobileWarningWasShown = sessionStorage.getItem(WEB_STORAGE_WARNING);
  // if (mobileWarningWasShown) {
  //   mobileWarningWasShown = JSON.parse(mobileWarningWasShown)
  // }
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (mobileWarningWasShown){ // if message was displayed
    return false;
  }
  else if (!isMobile){ // else if (is desktop or tablet)
    return false;
  }
  else if (isMobile && !mobileWarningWasShown){ // else if (is mobile and was not displayed)
    sessionStorage.setItem(WEB_STORAGE_WARNING, JSON.stringify(true));
    return true;
  }
}