// Load settings

function getusername() {
	username = localStorage["username"];
	if (username == undefined) return "";
	return username;
}

// Save settings

function saveusername() {
	localStorage["username"] = document.getElementById('username').value;
}


// Mail address generation

function randomchars() {
	var chars = "0123456789abcdefghiklmnopqrstuvwxyz";
	var string_length = 12;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

function genmail() {
	var username = getusername();
	if (username == "") return "";
	mailaddress = randomchars();
	mailaddress += ".";
	mailaddress += username;
	mailaddress += "@spamgourmet.com";
	return mailaddress;
}
