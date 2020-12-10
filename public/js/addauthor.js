var status=1;
function vform(){

    regnm=/^([A-Za-z\.\-]+)?$/
    var s1=0,s2=0,s3=0,s4=0,s5=0,S6=0,s7=0,s8=0,s9=0,s10=0,s11=0;
    var auth=document.getElementById("author1");
    var bnm=document.getElementById("name1");
    var gn=document.getElementById("genre1");
    var error=document.getElementById("error") ;
    
    if(auth.value==""){
        document.getElementById("lb1").style.color="red";
        document.getElementById("lb1").innerHTML='Enter author name';
        status=0;
       }             

       else{
            let regnm=/^([A-Za-z\.\-]+)?$/
            if(regnm.test(auth.value)){
               document.getElementById("lb1").innerHTML='';
               }
            else{
                document.getElementById("lb1").style.color="red";
               document.getElementById("lb1").innerHTML='Invalid';
               status=0;
               }
           }
    

     if(bnm.value==""){
        document.getElementById("lb2").style.color="red";
        document.getElementById("lb2").innerHTML='Enter book name';
        status=0;    
        }
  
        else{
            let regct=/^([A-Za-z\.\-]+)?$/
            if(regct.test(bnm.value)){
               document.getElementById("lb2").innerHTML='';
               }
            else{
               document.getElementById("lb2").innerHTML='Invalid';
               status=0;
               }
           }

    if(gn.value==""){
       document.getElementById("lb4").style.color="red";
       document.getElementById("lb4").innerHTML='Enter genre';
       status=0;    
    }

    else{
        let regexp=/^([A-Za-z\.\-]+)?$/
        if(regexp.test(gn.value)){
        document.getElementById("lb4").innerHTML='';
        }
        else{
        document.getElementById("lb4").innerHTML='Invalid';
        status=0;
        }
    }
    if(status==1){
        return true;
    }
    else{
        return false;
    }
}