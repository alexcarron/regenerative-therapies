/* Alexander Carron */
let isMenuOpen = false;

const pages = [
	{
		name: "Home",
		pageName: "index",
		sections: [],
	},
	{
		name: "Counseling",
		pageName: "counseling",
		sections: []
	},
	{
		name: "Tai Chi Gung",
		pageName: "tai_chi_gung",
		sections: [
		]
	},
	{
		name: "Nutrition",
		pageName: "nutrition",
		sections: [

		]
	},
	{
		name: "Energy Wellness",
		pageName: "energy_wellness",
		isLink: true,
		link: "https://bodyalign.com/?afmc=29m"
	},
	{
		name: "Silver/Gold",
		pageName: "silver_gold",
		isLink: true,
		link: "https://rasaji.com/s0ku"
	},
	{
		name: "About Us",
		pageName: "about_us",
		sections: [
		]
	},
];

const
	currentPageName = window.location.pathname.split("/").pop().slice(0, -5) || "index",
	head = document.head,
	page = pages.find(p => p.pageName == currentPageName);

// Event Listeners
const toggleHamburgerMenu = function toggleHamburgerMenu() {
	console.log("Hamburger Menu Clicked");
	console.log(`isMenuOpen: ${isMenuOpen}`);

	let hamburger_links_div = document.querySelector("div#links");

	if (isMenuOpen) {
		hamburger_links_div.style = `
			transition: right 150ms ease-in;
			right: -100vw;
		`;
		isMenuOpen = false;

		setTimeout(() => {hamburger_links_div.style = `transition: none; right: -100vw;`;}, 150);
	} else {
		hamburger_links_div.style = `
			transition: right 150ms ease-out;
			right: 0;
		`;
		isMenuOpen = true;

		setTimeout(() => {hamburger_links_div.style = `transition: none; right: 0;`;}, 150);
	};
};
const changeNavOpacityOnScroll = function changeNavOpacityOnScroll() {
	const
		nav = document.querySelector("nav"),
		header = document.querySelector("header"),
		header_height = header.offsetHeight;

	if (window.scrollY >= header_height - 100)
		nav.style = "background: var(--most-dark-color);";
	else
		nav.style = "background: #00000080;";

};
const hideLoadingBar = function hideLoadingBar() {
	// Fade out loading div
	document.getElementById("loading").style.opacity = "0";

	// Wait .5 seconds before hiding completely
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
	}, 500);
};

const addElemsToMain = function addElemsToMain() {
	const main = document.querySelector("main");

	for (let section_info of page.sections) {
		const
			section = document.createElement("section"),
			h1 = document.createElement("h1"),
			{ heading, descriptions } = section_info;

		h1.innerHTML = heading;
		section.append(h1);

		for (let description of descriptions) {
			const p = document.createElement("p");
			p.innerHTML = description;
			section.append(p);
		}

		main.append(section);
	}
};
const addFadingBannerToHeader = function addFadingBanner(text, delay=null) {
	const
		header = document.querySelector("header"),
		fading_banner_p = document.createElement("p");

	fading_banner_p.innerHTML = text;
	fading_banner_p.id = "fading_banner";

	if (delay) {
		fading_banner_p.style.setProperty('animation-delay', `${delay}s`);
		fading_banner_p.style.setProperty("right", "40px");
	}
	else {
		fading_banner_p.style.setProperty("left", "40px");
	}

	header.append(fading_banner_p);
};
const addNavToHeader = function addNavToHeader() {
	let header = document.querySelector("header"),
		nav = document.createElement("nav"),
		hamburger_menu_div = document.createElement("div"),
		hamburger_menu_button = document.createElement("div"),
		links_div = document.createElement("div");

	hamburger_menu_button.id = "hamburger_menu_button";
	hamburger_menu_button.setAttribute("onclick", "toggleHamburgerMenu()");
	hamburger_menu_button.innerHTML = `
		<img src="/media/graphics/hamburger_menu_icon.svg" alt="Hamburger Menu">
		<p> Menu </p>
	`;

	hamburger_menu_div.id = "hamburger_menu";

	links_div.id = "links";
	for (let page of pages) {
		const
			a = document.createElement("a"),
			{ name, pageName } = page;

		if (page.isLink) {
			a.target = "_blank";
			a.href = page.link;
			a.classList.add("href");
		}
		else
			a.href = `/${pageName}.html`;

		console.log({currentPageName, pageName});
		if (currentPageName === pageName) {
			a.classList.add(`current_page`);
		}
		a.textContent = name;

		links_div.append(a);

		nav.append(a);
		links_div.append(a.cloneNode(true));
	}
	hamburger_menu_div.append(hamburger_menu_button);
	hamburger_menu_div.append(links_div);

	nav.append(hamburger_menu_div);
	header.append(nav);
};
const addBannerToHeader = function addBannerToHeader() {
	let header = document.querySelector("header");

	header.innerHTML += `
		<div class="video_container">
			<video autoplay muted loop>
				<source src="/media/videos/massage_stock_footage.mp4" type="video/mp4">
				Your browser doesn't support video
			</video>
		</div>
	`;

};
const insertTemplateElements = function insertTemplateElements() {
	let all_elems  = document.getElementsByTagName("*"),
		file,
		xhttp;

	/*loop through a collection of all HTML elements:*/
	for (let elmnt of all_elems) {

		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("include-template");

		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML += this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include-template");
					insertTemplateElements();
				}
			};

			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
};
const highlightCurrentPage = function highlightCurrentPage() {

}

// onload
const loadWebPage = function loadWebPage() {

	// Dynamically add elements to page
	addNavToHeader();
	addBannerToHeader();
	addFadingBannerToHeader("I have come that they may have life, and have it to the fullest.");
	addFadingBannerToHeader("Learn to harness the power to regenerate.", 6);
	highlightCurrentPage();

	addElemsToMain();

	insertTemplateElements();

	// Add Event Listners
	const video = document.querySelector("video");

	document.addEventListener("scroll", changeNavOpacityOnScroll);
	video.addEventListener("loadeddata", hideLoadingBar);
};