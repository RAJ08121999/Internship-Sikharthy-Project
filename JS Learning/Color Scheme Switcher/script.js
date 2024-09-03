button = document.querySelectorAll(".buttons");
body= document.querySelector("body");

button.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.id==="red")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="green")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="blue")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="yellow")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="pink")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="maroon")
        {
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==="red")
        {
            body.style.backgroundColor=e.target.id;
        }
        else{
            body.style.backgroundColor="white";
        }
    });
});