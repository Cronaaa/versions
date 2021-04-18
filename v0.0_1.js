
var msg = document.querySelector(".msg");

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }
    var ca=0;
    function verifica(){
        quu=document.getElementById("ha").value;
       if(document.getElementById("ha").value == "helllloooo")
       ca=1;
       document.getElementById("ha").value = "";
        myFunction();
    }
var q=0;
function myFunction(){
setTimeout(function(){
    random_bg_color();
    if(q==0){
        
    q=1;
    
    
    setTimeout(function(){
        if(ca==0){
            document.getElementById("ha").value = "";
               msg.innerHTML="try again";
              setTimeout(()=>msg.innerHTML="", 2000);
            }else{
                msg.innerHTML = "<h1><strong>GOOD JOB!</h1>";
                setTimeout(()=>msg.innerHTML="",6000);
                ca=0;
            }
                q=0;
    }, 3000);


}
}, 200);}
