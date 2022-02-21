'use strict';

/* 
    _Dictionary_
    d = document
    Pcontainer = PrincipalContainer -- Where the canvas will go;

*/
/* Nodes */
const d = document;
const Pcontainer = d.querySelector(".presentation__img-container");

/* PIXI Elements */

const app = new PIXI.Application({ width: "1980", height: "1080" });

// Containers
const squareSprite = new PIXI.Graphics();


/* Initializing */
// Making Classes
app.view.classList.add("AnimationCanvas");

// Put canvas on node
Pcontainer.appendChild(app.view);

/* Code: */

squareSprite.beginFill(0xaa2233);
squareSprite.drawRect(20, 20, 200, 200);
squareSprite.endFill();

squareSprite.filters = [new PIXI.filters.BlurFilter(50)];

app.stage.addChild(squareSprite);

let elapsed = 0;

app.ticker.add(delta=>{
    elapsed += delta;

    squareSprite.x = (app.view.width / 2) + Math.tan(elapsed / 50) * 600;
});