const canvas = document.getElementById("canvas");
// forkortning for context
const ctx = canvas.getContext("2d"); // ett blankt papper som vi kan rita pa



const game = new Game(ctx);



game.start();