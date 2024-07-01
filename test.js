class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const row = {};
    const cols = {};
    const square = {};
    for (let r = 0; r < board[0].length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        if (
          board[r][c] in row ||
          board[r][c] in cols ||
          board[r][c] in square[[Math.floor(r / 3), Math.floor(c / 3)]]
        ) {
          return false;
        }
      }
    }
  }
}

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const sol = new Solution();

sol.isValidSudoku(board);
