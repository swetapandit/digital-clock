setInterval(()=>
{
    let date=new Date();
    let year=date.getFullYear();
    let mon=date.getMonth()+1;
    let day=date.getDate();
    if(mon<10) mon="0"+mon;
    if(day<10) day="0"+day;
    document.getElementById('para2').innerHTML=day+"/"+mon+"/"+year;
}, 1000);
setInterval(()=>
{
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hour>12) hour-=12;
    if(sec<10) sec="0"+sec;
    if(min<10) min="0"+min;
    if(hour<10) hour="0"+hour;
    
    document.getElementById('hour1').innerHTML=hour;
    document.getElementById('min1').innerHTML=min;
    document.getElementById('sec1').innerHTML=sec;
}, 1000);

