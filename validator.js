const field =  [
    [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
  ];


  function validateBattlefield(field, row = 0, col = 0) { 
    let b = 0, c = 0, d = 0, s = 0;
  
    for (; row < 9 ; col = 0, row++) {
      for (; col < 9 ; col++) {
        if (field[row][col] == 1) {
          let count = check(row, col, field);
          switch(count) {
            case 4: b++;
            break;
            case 3: c++;
            break;
            case 2: d++;
            break;
            case 1: s++;
            break;
            default:
            return false;
          }
        }
      }
    }
    function check(row, col, field) {
      let count = 1;
      if (field[row + 1][col] == 1 && field[row][col + 1] == 0) {
        while (field[row + 1][col] == 1) {
          if (field[row][col + 1] == 1) return 0;
          if (field[row + 1][col + 1] == 1) return 0;
          if(row !== 0 && field[row + 1][col - 1] == 1) return 0;
          if(count > 4)  return 0;
          count++;
          row++;
          field[row][col] = 0;
        }
      }
      if (field[row][col + 1] == 1 && field[row + 1][col] == 0) {
        while (field[row][col + 1] == 1) {
          if (field[row + 1][col] == 1)  return 0;
          if (field[row + 1][col + 1] == 1) return 0;
          if(count > 4) return 0;
          if(col !== 0 && field[row + 1][col - 1] == 1) return 0;
          count++;
          col++;
          field[row][col] = 0;
        }
      }
      return count;
    }
   return b == 1 && c == 2 && d == 3 && s == 4;
  }

  validateBattlefield(field);