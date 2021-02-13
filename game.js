//GAME RULES:
//1. Birth Rule: If has 3 neighbors cells alive, create a new cell;
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

  //Making a grid and filling with 0 or 1
  function createGrid(cols, rows) {
    return new Array(cols)
      .fill(null)
      .map(() =>
        new Array(rows).fill(null).map(() => Math.round(Math.random()))
      );
  }

  let grid = createGrid(COL, ROW);

  requestAnimationFrame(update);
  function update() {
    grid = nextGen(grid);
    drawGrid(grid, COL, ROW, RES);
    requestAnimationFrame(update);
  }

  //Generate nex generation
  function nextGen(grid) {
    const nextGen = grid.map((arr) => [...arr]); //make a copy of grid with spread operator

    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid[col].length; row++) {
        const currentCell = grid[col][row];
        let sumNeighbors = 0; //to verify the total of neighbors

        //Verifying the 8 neigbours of current cell
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
              continue; // because this is the current cell's position
            }

            const x = col + i;
            const y = row + j;

            if (x >= 0 && y >= 0 && x < COL && y < ROW) {
              const currentNeighbor = grid[col + i][row + j];
              sumNeighbors += currentNeighbor;
            }
          }
        }

        //Aplying rules
        if (currentCell === 0 && sumNeighbors === 3) {
          nextGen[col][row] = 1;
        } else if (
          currentCell === 1 &&
          (sumNeighbors < 2 || sumNeighbors > 3)
        ) {
          nextGen[col][row] = 0;
        }
      }
    }
    return nextGen;
  }

  //Draw cells on canvas
  function drawGrid(grid, cols, rows, reslution) {
    ctx.clearRect(0, 0, cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const cell = grid[i][j];
        ctx.fillStyle = cell ? "#5c3ec9" : "#f8f8f2";
        ctx.fillRect(i * reslution, j * reslution, reslution, reslution);
      }
    }
  }
});
