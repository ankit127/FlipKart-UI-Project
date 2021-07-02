function Login() {
	var username = prompt("Enter Your Name :");
	console.log(username);
	document.getElementById("demo").innerHTML = username;
	
	var password = prompt("Enter Password :");
	console.log(password);
}


function getValues() {
	
	var username = document.getElementById("username").value;
	console.log(username);
	document.getElementById("username").innerHTML = ud;
	
	var password = document.getElementById("password").value;
	console.log(password);
}


