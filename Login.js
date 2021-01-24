function onSubmit()
	{
		var username=document.getElementById("uname").value;
		var password=document.getElementById("pass").value;
		if(username=="")
		{
			alert("Please Enter Username");
		}
		else if(password=="")
		{
			alert("Please Enter Password");
		}
		else{
			alert("Login Succesful");
		}
	}