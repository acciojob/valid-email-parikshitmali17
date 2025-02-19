function validEmail(str) {
  //your JS code here.
	const email= regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;)
return email
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
