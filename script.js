function display(){
    document.getElementById('name').innerHTML="anup";
 }
 function interest(){
     let principal = document.getElementById('p').value;
     let time = document.getElementById('t').value;
     let rate = document.getElementById('r').value;
     let si = (principal*rate*time)/100;
     console.log(si);
     document.getElementById('result').innerHTML=si;
     
     //document.write(si);
 }
 