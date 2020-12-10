var status=1;
function vform(){

    regnm=/^([A-Za-z\.\-]+)?$/
    var s1=0,s2=0,s3=0,s4=0,s5=0,S6=0,s7=0,s8=0,s9=0,s10=0,s11=0;
    var nm=document.getElementById("name1");
    var ctry=document.getElementById("country1");
    var mail=document.getElementById("email1");
    var paswd=document.getElementById("pswd1");
    var cpswd=document.getElementById("cpasswd");
    var error=document.getElementById("error") ;
    if(paswd.value!=cpswd.value)
    {
        status=0
        document.getElementById("lb6").style.color="red";
        document.getElementById("lb6").innerHTML='miss match';
    }
    if(nm.value==""){
        document.getElementById("lb1").style.color="red";
        document.getElementById("lb1").innerHTML='Enter your name';
        status=0;
       }             

       else{
            let regnm=/^([A-Za-z\.\-]+)?$/
            if(regnm.test(nm.value)){
               document.getElementById("lb1").innerHTML='';
               }
            else{
                document.getElementById("lb1").style.color="red";
               document.getElementById("lb1").innerHTML='Invalid';
               status=0;
               }
           }
    

     if(ctry.value==""){
        document.getElementById("lb2").style.color="red";
        document.getElementById("lb2").innerHTML='Enter country';
        status=0;    
        }
  
        else{
            let regct=/^([A-Za-z\.\-]+)?$/
            if(regct.test(ctry.value)){
               document.getElementById("lb2").innerHTML='';
               }
            else{
               document.getElementById("lb2").innerHTML='Invalid';
               status=0;
               }
           }

  
        // email
    if(mail.value==""){
       document.getElementById("lb4").style.color="red";
       document.getElementById("lb4").innerHTML='Enter email';
       status=0;    
    }

    else{
        let regexp=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if(regexp.test(mail.value)){
        document.getElementById("lb4").innerHTML='';
        }
        else{
        document.getElementById("lb4").innerHTML='Invalid';
        status=0;
        }
    }
    if(paswd.value==""){
        document.getElementById("lb5").style.color="red";
        document.getElementById("lb5").innerHTML='Enter password';
        status=0;    
        }
        else if(paswd.value.length<8){
            document.getElementById("lb5").style.color="red";
            document.getElementById("lb5").innerHTML='Minimum 8 character required';
            status=0;  
        }
  
    if(status==1){
        return true;
       }
    else{
        return false;
        }
    }  

function passpow(){
    
        var strength = document.getElementById('lb5');
        var strongRegex = new RegExp("^(?=.{8,12})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{5,7})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{1,4}).*", "g");
        var pwd = document.getElementById("pswd1");
        if (false == enoughRegex.test(pwd.value)) {
            strength.innerHTML = 'More Characters';
            status=0;
        } else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
            status=1;
        } else if (mediumRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
            status=0;
        } else {
            strength.innerHTML = '<span style="color:red">Weak!</span>';
            status=0;
        }

        
}



