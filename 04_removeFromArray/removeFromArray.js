const removeFromArray = function (array, ...items) {
  const itemsArray = [...items];
  for (const item of itemsArray) {
    while (true) {
      const index = array.indexOf(item);
      if(index > -1) {
        array.splice(index, 1);
      }else{
        break;
      }
    }

    // if (index > -1){
    //     array.splice(index,1)
    // }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

//
