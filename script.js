let hoursTxt = document.body.querySelector(".hours-txt");
let minutesTxt = document.body.querySelector(".minutes-txt");
let secondTxt = document.body.querySelector(".second-txt");
let dateTxt = document.body.querySelector(".date-txt");
let timeZoneTxt = document.body.querySelector(".time-zone-txt");
let monthTxt = document.body.querySelector(".month-txt");
let yearTxt = document.body.querySelector(".year-txt");
let periodTxt = document.body.querySelector(".period-txt");
let darkToggle = document.body.querySelector(".main_div");
let clockBody = document.body.querySelector(".clock-body");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("bg-black");
    clockBody.classList.toggle("bg-blue");
})


setInterval(() => {
    let sc = new Date().getSeconds();
    let full_date = new Date(); 
    let hr = new Date().getHours();
    let mn = new Date().getMinutes();
    // let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let tz = full_date.toString().slice(full_date.toString().indexOf("G"));
    let dy = new Date().getDay();
    let dt = new Date().getDate();
    let yr = new Date().getFullYear();
    let mo = new Date().getMonth();
    let period;

    if (mn.toString().length == 1) {
        mn = `0` + mn;
    }

    if (dt.toString().length == 1) {
        dt = `0` + dt;
    }

    if (sc.toString().length == 1){
        sc = `0` + sc;
    }

    if (hr >= 12 && hr <= 11) {
        period = `AM`;
    } else if (hr == 0) {
        period = `AM`;
    }
    else {
        period = `PM`;
    }

    if (mo == 0) {
        mo = `January `;
    } else if (mo == 1) {
        mo = `February `;
    } else if (mo == 2) {
        mo = `March `;
    } else if (mo == 3) {
        mo = `April `;
    } else if (mo == 4) {
        mo = `May `;
    } else if (mo == 5) {
        mo = `June `;
    } else if (mo == 6) {
        mo = `July `;
    } else if (mo == 7) {
        mo = `August `;
    } else if (mo == 8) {
        mo = `September `;
    } else if (mo == 9) {
        mo = `October `;
    } else if (mo == 10) {
        mo = `November `;
    } else if (mo == 11) {
        mo = `December `;
    }

    if (dy == 0) {
        dy = `Monday`;
    } else if (dy == 1) {
        dy = `Tuesday`;
    } else if (dy == 2) {
        dy = `Wednesday`;
    } else if (dy == 3) {
        dy = `Thursday`;
    } else if (dy == 4) {
        dy = `Friday`;
    } else if (dy == 5) {
        dy = `Saturday`;
    } else if (dy == 6) {
        dy = `Sunday`;
    }

    if (hr > 12) {
        hr = hr - 12;
    }
    if (hr.toString().length == 1) {
        hr = `0` + hr;
    }

    hoursTxt.textContent = hr;
    minutesTxt.textContent = mn;
    secondTxt.textContent = sc;
    dateTxt.textContent = dt;
    timeZoneTxt.textContent = tz;
    monthTxt.textContent = mo;
    yearTxt.textContent = yr;
    periodTxt.textContent = period;
}, 1000);
setInterval(() => {
    document.body.querySelector(".dot-txt").classList.toggle("blink");
}, 500);
