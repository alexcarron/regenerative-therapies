
const includeHTML = function includeHTML() {
	let all_elems  = document.getElementsByTagName("*"),
		file,
		xhttp;

	/*loop through a collection of all HTML elements:*/
	for (let elmnt of all_elems) {
		elmnt = all_elems[i];

		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("include-template");

		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include-template");
					includeHTML();
				}
			}

			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
}
