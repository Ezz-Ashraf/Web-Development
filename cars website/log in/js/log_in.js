
var error = document.getElementById("login_error");
/*function login()
{ if ( username == 'ezz' && password =='123456789'){
   
error.innerHTML="hi";
} }; */

     function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "ezz" && form.pswrd.value == "123456789") {
                  error.innerHTML="You have logged in successfully";/*opens the target page while Id & password matches*/
                }
                else {
                      error.innerHTML= "Error! Password or Username is incorrect";/*displays error message*/
                }
            }
$(document).ready(function(){
$("#box").animate({top:"20%"},200);
$("#box").animate({height:"60%"},200).animate({width:"30%"},200);
});
