//GAME RULES:
//1. Birth Rule: If has 3 neighbors cells lives, create a new cell;
//2. Death Rule: A cell dies if has >=1 or <=4 neighbors;
//3. Survival Rule: A cell survives only if has 2 or 3 neighbors alive.
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#board");
  const ctx = canvas.getContext("2d");

  const GRID_WIDTH = 500;
  const GRID_HEIGHT = 500;
  const RES = 5;
  const COL = GRID_WIDTH / RES;
  const ROW = GRID_HEIGHT / RES;

  canvas.width = GRID_WIDTH;
  canvas.height = GRID_HEIGHT;

  //Verificar as regras e desenhar novamente o canvas
  function startGame(cols, rows, res) {
    fillGrid(cols, rows);
    drawGrid(cols, rows, res);
  }
  startGame(COL, ROW, RES);

  //Adicionando linhas nas colunas
  function createGrid(gridSize) {
    const grid = new Array(2);
    for (let k = 0; k <= gridSize; k++) {
      grid[k] = new Array(2);
    }
    return grid;
  }

  //Adicionando valores inteiros aleatórios entre 0 e 1 no array
  function fillGrid(cols, rows) {
    const grid = createGrid(cols);
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        grid[i][j] = Math.round(Math.random());
      }
    }
    return grid;
  }

  //Desenhando os pontos no canvas
  function drawGrid(cols, rows, reslution) {
    ctx.clearRect(0, 0, cols, rows);
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        if (grid[i][j] === 1) {
          ctx.fillStyle = "#5c3ec9";
          ctx.fillRect(i * reslution, j * reslution, reslution, reslution);
        }
      }
    }
  }
  /*
  function checkLives(cols, rows, res) {
    let next = createGrid(cols, rows);
    let grid = drawGrid(cols, rows, res);
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        let state = grid[i][j];
        if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
          next[i][j] = state;
        }
        let neighbors = countNeighbors(next, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
    grid = next;
    return grid;
  }

  function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        sum += grid[i][j];
      }
    }
    sum -= grid[x][y]; //to remove itself from count
    return sum;
  }*/
});
