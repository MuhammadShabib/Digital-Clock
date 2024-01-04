const hour = document.getElementById('hours');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const ampm1 = document.getElementById('ampm');

function updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm1, (innerText = ampm)

    setTimeout(() => {
        updateclock()
    }, 1000)
}
updateclock();