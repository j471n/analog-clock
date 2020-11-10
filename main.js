const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');



setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let hm = day.getMinutes() * deg;
    let hs = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(hm/12)}deg)`;
    mn.style.transform = `rotateZ(${hm}deg`;
    sc.style.transform = `rotateZ(${hs}deg)`;
});


// Setting Footer
var year = new Date()
document.getElementById('year').innerHTML = year.getFullYear()