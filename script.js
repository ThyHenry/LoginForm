let visible = document.getElementById("visible");
let pass = document.getElementById("password");
const time = document.getElementById("time");
const day = document.getElementById("day");

// ocultar

visible.addEventListener("click", ()=> {
    if(pass.type === "password") {
        pass.type = "text",
        visible.setAttribute("src", "icons8-visível-24.png");
    } else {
        pass.type = "password",
        visible.setAttribute("src", "icons8-ocultar-24.png");
    }
})

// relogio

const clock = setInterval(function clock() {
    const date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let mt = date.toLocaleString("default", {month: "short"});
    let d = date.toLocaleString("default", {weekday: "short"});
    let day_n = date.getDate();

    if (hr < 10) { hr = "0" + hr};

    if (min < 10) { min = "0" + min};
 
    let total_time = hr + ":" + min;
    time.innerHTML = total_time;
    let today = mt + " " + d + " " + day_n;
    day.innerHTML = today;

    console.log(s)
},1000)
