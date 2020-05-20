var d, h, m, s, clock, clr;
function cloky(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
                




if (h <= 9){
    h = '0' + h;
}
if (s <= 9){
    s = '0' + s;
}
if (s <= 9){
    s = '0' + s;


}




clock = h + ":" + m +":" + s;
color = "#" + h + m + s;
 document.body.style.background = color;

document.getElementById("clock").innerHTML = clock


setTimeout(cloky, 1000)


}

cloky()




