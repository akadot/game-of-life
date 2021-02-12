document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#board");
  const ctx = canvas.getContext("2d");

  const GRID_WIDTH = 500;
  const GRID_HEIGHT = 500;
  const RES = 100;
  const COL = GRID_WIDTH / RES;
  const ROW = GRID_HEIGHT / RES;

  canvas.width = GRID_WIDTH;
  canvas.height = GRID_HEIGHT;

  //Adicionando linhas nas colunas
  let grid = new Array(2);
  for (let k = 0; k <= GRID_WIDTH; k++) {
    grid[k] = new Array();
  }

  //Adicionando valores inteiros aleatórios entre 0 e 1 no array
  function fillGrid() {}
  for (let i = 0; i <= GRID_WIDTH; i++) {
    for (let j = 0; j <= GRID_HEIGHT; j++) {
      grid[i][j] = Math.round(Math.random());
    }
  }

  //Desenhando os pontos no canvas
  function drawGrid() {
    ctx.clearRect(0, 0, GRID_WIDTH, GRID_HEIGHT);
  }
  for (let i = 0; i <= GRID_WIDTH; i++) {
    for (let j = 0; j <= GRID_HEIGHT; j++) {
      if (grid[i][j] === 1) {
        ctx.fillStyle = "#5c3ec9";
        ctx.fillRect(i * COL, j * ROW, COL, ROW);
      }
    }
  }

  //Verificar as regras e desenhar novamente o canvas
  function startGame() {
    fillGrid();
    drawGrid();
  }
});
