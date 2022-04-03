/* const d = new Date();


var hour = d.getHours();
var minute = d.getMinutes();

document.querySelector(':root').style.setProperty("--dateNav", "'"+ndia + " " + MONTH + " " + year + "'");
 */

function currentTime() {
    let d = new Date();
    const months = ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic."];
    var MONTH = months[d.getMonth()];
    var year = d.getFullYear();
    var ndia = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    minute = (minute < 10) ? "0" + minute : minute;
    let time = hour + ":" + minute;
    let date = ndia + " " + MONTH + " " + year;
    document.querySelector(':root').style.setProperty("--timeNav", "'" + time + "'");
    document.querySelector(':root').style.setProperty("--dateNav", "'" + date + "'");
    let t = setTimeout(function(){currentTime()}, 1000);
}
currentTime();