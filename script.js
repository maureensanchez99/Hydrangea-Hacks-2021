window.logout = function() {

	// TELLS OUR SERVER TO LOG THE USER OUT
	fetch('/~/projects/Uplift/logout', { method: 'POST'});
	
	// TELLS OUR BROWSER TO SHOW A MESSAGE TO OUR USER
	alert('Logged Out!');
	
	// REDIRECTS THE USER TO THE HOMEPAGE
	location.href = '/~/projects/Uplift/index'
}