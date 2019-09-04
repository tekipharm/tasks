function validation()								 
{ 
	var firstname = document.forms["RegForm"]["Firstame"];			 
	var email = document.forms["RegForm"]["EMail"]; 
	var lastname = document.forms["RegForm"]["Lastname"]; 

	if (firstname.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
    } 
    
	if (lastname.value == "")							 
	{ 
		window.alert("Please enter your address."); 
		name.focus(); 
		return false; 
    } 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
    } 
    else
    { 
        window.alert("Your message has been sent.");
        return true;
    }
}
