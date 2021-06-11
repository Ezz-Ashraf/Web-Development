// Confirm Password Function
var checkpass = function() {
	  if (document.getElementById('password').value ==
	    document.getElementById('confirm_password').value) {
	    document.getElementById('message').style.color = 'green';
	    document.getElementById('message').innerHTML = 'Passwords are matching';
	    document.getElementById('sumbit_pass').disabled = false;
	  }
	  else {
	  	document.getElementById('message').style.color = 'red';
	    document.getElementById('message').innerHTML = 'Passwords are not matching';
	    document.getElementById('sumbit_pass').disabled = true;
	  }
}
