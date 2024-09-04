let start=document.querySelector("#start");
let stop= document.querySelector("#stop");



function getRandomChar(){
    const letters = 'abcdef';
    return letters[Math.floor(Math.random()*letters.length)];
};

function getRandomNum(){
    const nums='0123456789';
    return nums[Math.floor(Math.random()*nums.length)];
};

function colorGenerator(){
    let colorCode = '#';
    for(let i=0; i<6;i++)
    {
        if(Math.random()>0.5)
        {
            colorCode+= getRandomChar();
        }
        else{
            colorCode+=getRandomNum();
        }
    }

    return colorCode;
}


function changeBackgroundColor(){
    const newColor = colorGenerator();
    document.body.style.backgroundColor = newColor;
}


start.addEventListener("click",()=>{
    intervalId=setInterval(changeBackgroundColor,1000);
})

stop.addEventListener("click",()=>{
    clearInterval(intervalId);
})