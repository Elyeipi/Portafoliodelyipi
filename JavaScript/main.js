let charging = document.querySelector(".chargingBar__porcentage");

function LoadBar()
{
    let scrollTop = document.documentElement.scrollTop;
    let distance = charging.offsetTop;
    if(distance - 300 < scrollTop)
    {
        charging.classList.add("loading");
    }
}


window.addEventListener('scroll', LoadBar);

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
const square1Sprite = new PIXI.Graphics();
const square2Sprite = new PIXI.Graphics();


/* Initializing */
// Making Classes
app.view.classList.add("AnimationCanvas");

// Put canvas on node
Pcontainer.appendChild(app.view);

/* Code: */

squareSprite.beginFill(0xaa2233);
squareSprite.drawRect(40, 40, 200, 200);
squareSprite.endFill();

square1Sprite.beginFill(0xaa2233);
square1Sprite.drawRect(80, 80, 200, 200);
square1Sprite.endFill();

square2Sprite.beginFill(0xaa2233);
square2Sprite.drawRect(160, 160, 200, 200);
square2Sprite.endFill();

squareSprite.filters = [new PIXI.filters.BlurFilter(25)];
square1Sprite.filters = [new PIXI.filters.BlurFilter(13)];
square2Sprite.filters = [new PIXI.filters.BlurFilter(5)];

app.stage.addChild(squareSprite);
app.stage.addChild(square1Sprite);
app.stage.addChild(square2Sprite);

let elapsed = 0;

app.ticker.add(delta=>{
    elapsed += delta;

    squareSprite.x = (app.view.width / 2) + Math.tan(elapsed / 50) * 600;
    square1Sprite.x = (app.view.width / 2) + Math.tan(elapsed / 50) * 600;
    square2Sprite.x = (app.view.width / 2) + Math.tan(elapsed / 50) * 600;
});
