//alert("test");
var name_error = document.getElementById("name_error");
var pass_error = document.getElementById("pass_error");
   function check(form) { /*function to check userid & password*/
                /**/
                if(form.userid.value != form.re_userid.value ) {
                   name_error.innerHTML = "Error usernames are different";/*checking usernames*/
                }
                if(form.pswrd.value != form.re_pswrd.value)
                {
                pass_error.innerHTML = "Error! passwords are different";/*checdking passwords*/
                }
            };
            $(document).ready(function(){
$('#dark_theme').click(function (){
   $('link[href="css/brown.css"]').attr('href','css/dark.css');
});
$('#brown_theme').click(function (){
   $('link[href="css/dark.css"]').attr('href','css/brown.css');
});
});
