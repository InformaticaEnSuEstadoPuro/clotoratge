startTime();
function startTime(){
    var d = null;
    d = new Date(); 
    const hour = d.getHours();
    const minute = d.getMinutes();
        /* DEPRECATED, ONLY FOR DEMOSTRATIONAL PROPUSES
            if(0 <= minute && minute <= 29){
                document.getElementsByTagName("body")[0].classList.add("timeset00" + hour*2 + "");
                var accent = getComputedStyle(document.getElementsByClassName("timeset00" + hour*2 + "")[0]).getPropertyValue('--a');
                document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
            }  
            if(30 <= minute && minute <= 59) {
                document.getElementsByTagName("body")[0].classList.add("timeset00" + (hour*2+1) + "");
                var accent = getComputedStyle(document.getElementsByClassName("timeset00" + (hour*2+1) + "")[0]).getPropertyValue('--a');
                document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
            } 
        */
    
    if(hour == 0 || hour == 1 || hour == 2){
        for(i=1; i < 49; i++){
            document.getElementsByTagName("body")[0].classList.remove("timeset00"+ i +"");
        }
        var whatthebackground = "000";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 3 || hour == 4 || hour == 5) {
        var whatthebackground = "001";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 6){
        if(0 <= minute && minute <= 19) {
            var whatthebackground = "002";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(20 <= minute && minute <= 39) {
            var whatthebackground = "003";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(40 <= minute && minute <= 50) {
            var whatthebackground = "004";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(51 <= minute && minute <= 59) {
            var whatthebackground = "005";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 7){
        if(0 <= minute && minute <= 3) {
            var whatthebackground = "006";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(4 <= minute && minute <= 6) {
            var whatthebackground = "007";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(7 <= minute && minute <= 10) {
            var whatthebackground = "008";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(11 <= minute && minute <= 12) {
            var whatthebackground = "009";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(13 <= minute && minute <= 16) {
            var whatthebackground = "0010";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(17 <= minute && minute <= 20) {
            var whatthebackground = "0011";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(21 <= minute && minute <= 25) {
            var whatthebackground = "0012";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(26 <= minute && minute <= 31) {
            var whatthebackground = "0013";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(32 <= minute && minute <= 39) {
            var whatthebackground = "0014";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(40 <= minute && minute <= 49) {
            var whatthebackground = "0015";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(50 <= minute && minute <= 59) {
            var whatthebackground = "0016";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 8){
        if(0 <= minute && minute <= 18) {
            var whatthebackground = "0017";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(19 <= minute && minute <= 59) {
            var whatthebackground = "0018";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 9 || hour == 10){
        var whatthebackground = "0019";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 11 || hour == 12){
        var whatthebackground = "0020";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 13 || hour == 14){
        var whatthebackground = "0021";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 15){
        var whatthebackground = "0022";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 16){
        if(0 <= minute && minute <= 29) {
            var whatthebackground = "0022";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(30 <= minute && minute <= 59) {
            var whatthebackground = "0023";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 17){
        if(0 <= minute && minute <= 29) {
            var whatthebackground = "0024";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(30 <= minute && minute <= 59) {
            var whatthebackground = "0025";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 18){
        if(0 <= minute && minute <= 9) {
            var whatthebackground = "0026";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(10 <= minute && minute <= 19) {
            var whatthebackground = "0027";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(20 <= minute && minute <= 29) {
            var whatthebackground = "0028";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(30 <= minute && minute <= 39) {
            var whatthebackground = "0029";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(40 <= minute && minute <= 49) {
            var whatthebackground = "0030";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(50 <= minute && minute <= 54) {
            var whatthebackground = "0031";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(55 <= minute && minute <= 59) {
            var whatthebackground = "0032";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 19){
        if(0 <= minute && minute <= 3) {
            var whatthebackground = "0033";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(4 <= minute && minute <= 8) {
            var whatthebackground = "0034";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(9 <= minute && minute <= 14) {
            var whatthebackground = "0035";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(15 <= minute && minute <= 19) {
            var whatthebackground = "0036";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(20 <= minute && minute <= 24) {
            var whatthebackground = "0037";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(25 <= minute && minute <= 27) {
            var whatthebackground = "0038";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(28 <= minute && minute <= 32) {
            var whatthebackground = "0039";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(33 <= minute && minute <= 36) {
            var whatthebackground = "0040";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(37 <= minute && minute <= 41) {
            var whatthebackground = "0041";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(42 <= minute && minute <= 44) {
            var whatthebackground = "0042";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(45 <= minute && minute <= 49) {
            var whatthebackground = "0043";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(50 <= minute && minute <= 59) {
            var whatthebackground = "0044";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 20){
        if(0 <= minute && minute <= 17) {
            var whatthebackground = "0045";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
        if(18 <= minute && minute <= 59) {
            var whatthebackground = "0046";
            document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
            var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
            document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
        }
    }
    if(hour == 21){
        var whatthebackground = "0047";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    if(hour == 22 || hour == 23) {
        var whatthebackground = "0048";
        document.getElementsByTagName("body")[0].classList.add("timeset"+ whatthebackground +"");
        var accent = getComputedStyle(document.getElementsByClassName("timeset"+ whatthebackground +"")[0]).getPropertyValue('--a');
        document.querySelector("meta[name=theme-color]").setAttribute("content", accent);
    }
    activateTransition();
    setTimeout(startTime, 500);
}
function activateTransition(){
    document.getElementsByTagName("body")[0].classList.add("background-tr");
}