//Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

//['XOOXO',
// 'XOOXO',
// 'OOOXO',
// 'XXOXO',
// 'OXOOO'] 





function landPerimeter(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  let perimeter = 0;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === 'X') {
        if (i === 0 || arr[i-1][j] === 'O') {
          perimeter += 1;
        }
        if (j === 0 || arr[i][j-1] === 'O') {
          perimeter += 1;
        }
        if (i === rows-1 || arr[i+1][j] === 'O') { 
          perimeter += 1;
        }
        if (j === cols-1 || arr[i][j+1] === 'O') {
          perimeter += 1;
        }
      }
    }
  }
  
  return `Total land perimeter: ${perimeter}`;
}

const arr = ['XOOXO',
             'XOOXO',
             'OOOXO',
             'XXOXO',
             'OXOOO'];
console.log(islandPerimeter(arr));
