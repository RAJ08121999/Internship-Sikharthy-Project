const clock = document.getElementById("time");

setInterval(()=>{
    let date=new Date();
    clock.innerHTML = `<p>${
        date.toLocaleTimeString()
    }</p>`;
},1000);