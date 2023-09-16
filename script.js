function getFormvalue() {
    //Write your code here
	
	const form=document.getElementById("form1");
let fullName=form["fname"].value + " "+ form["lname"].value
	
alert(fullName);
}

