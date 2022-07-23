function validate () {    
    var firstname =document.getElementById("fname").value;
    var lastname =document.getElementById("lname").value;
    var password =document.getElementById("password").value;
    if (firstname == "hassan" && lastname == "yange" && password == "kivumbi"){
        
         alert("log in successfully");
        // window.location.href=("learn.html");
       
    }
    else{
        alert("invalid password or username");
    }

}