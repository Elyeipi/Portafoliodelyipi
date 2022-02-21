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