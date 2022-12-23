/* Alexander Carron - May 17th 2022 */
let isMenuOpen = false,
	page_name = window.location.pathname.split("/").pop().slice(0, -5),
	head = document.head;

const pages = [
	{
		name: "Home",
		page_name: "index",
		sections: [
			{
				"heading": "Counseling Services",
				"descriptions": ["Regain control of your destiny by changing your mind set & renewing your mind. Understand your temperament strengths and weaknesses and learn how to build the life your desire."],
			},
			{
				"heading": "Tai Chi Gung Classes",
				"descriptions": ["Gentle Yoga is designed to strengthen your connection to God, balance your right and left hemisphere, and regukate your breathing all without sweating or intense stretching. Learn more of join a class."],
			},
			{
				"heading": "Nutrition",
				"descriptions": ["Aging with timeless effects from the inside out: Hydrolyzed Liquid Collagen."],
			},
			{
				"heading": "Energy Wellness",
				"descriptions": ["Introducing: Steve Lepkowski & Body Align 15 Years experience with energetic biology and wholistic energetic wellness."],
			},
			{
				"heading": "Silver/Gold",
				"descriptions": ["Did you know Silver & Gold money? To request."],
			},
		],
	},
	{
		name: "Counseling",
		page_name: "counseling",
		sections: [
			{
				heading: "Counseling Services",
				descriptions: [
					"Sometimes we just need to understand ourselves better to relate more healthily to others and/or to God. Getting a better perspective on your inborn temperament, understanding its potential weaknesses and strengths, and learning how to use all that knowledge to grow and heal can help. It is a powerful tool to understand how to relate to others and to get insight on what career path would better suit you.",
					"I am licensed through the National Christian Counseling Association for temperament counseling. To request a counseling session or a temperament evaluation for your career or personal life, click here.",
				]
			}
		]
	},
	{
		name: "Tai Chi Gung",
		page_name: "tai_chi_gung",
		sections: [
		]
	},
	{
		name: "Nutrition",
		page_name: "nutrition",
		sections: [
			{
				"heading": "Nutrition",
				"descriptions": [
					"Physical health is just as important as mental and spiritual health. These are my personal favorites from Tranont.",
				]
			},
			{
				"heading": "Glow Liquid Collagen",
				"descriptions": [
					"Glow Liquid Collagen is an advanced type 1 collagen formula for health and beauty that assists in rebuilding and rejuvenating hair, skin, and nails.",
					`<a href=\"http://www.tranont.com/Acarron\"> http://tranont.com/Acarron </a>`,
					`<a href=\"http://www.tranont.com/Acarron\">
						<img src=\"https://tranont-crm.s3.us-west-2.amazonaws.com/Tranont_Glow_B3_922a8bf5e4.jpg\" alt=\"Glow Liquid Collagen Bottle\">
					</a>`,
				]
			},
			{
				"heading": "Mojo",
				"descriptions": [
					"Mojo is an all-natural drink mix formulated with rich cocoa or Brazilian coffee beans, plus a proprietary performance blend consisting of seven naturally derived ingredients that help to boost energy, burn calories, and improve mood and focus.",
					`<a href=\"http://www.tranont.com/Acarron\"> http://tranont.com/Acarron </a>`,
					`<a href=\"http://www.tranont.com/Acarron\">
						<img src=\"https://tranont-crm.s3.us-west-2.amazonaws.com/Mojo_Rich_Chocolate_ed85e4fcfe.jpg\" alt=\"Mojo\">
					</a>`,
				]
			},
			{
				"heading": "Tranont",
				"descriptions": [
					"To see a variety of supplemental products for Focus, Balance, Beauty and Nutrition, look at <a href=\"http://www.tranont.com/Acarron\"> http://tranont.com/Acarron </a>",
					`<a href=\"http://www.tranont.com/Acarron\">
						<img src=\"https://www.tranont.com/TranontLogoBlk.png\" alt=\"Tranont Logo\">
					</a>`,
				]
			},
		]
	},
	{
		name: "About Us",
		page_name: "about_us",
		sections: [
			{
				"heading": "Header",
				"descriptions": [
					"Description.",
				]
			},
		]
	},
	{
		name: "Energy Wellness",
		page_name: "energy_wellness",
		isLink: true,
		link: "https://bodyalign.com/?afmc=29m"
	},
	{
		name: "Silver/Gold",
		page_name: "silver_gold",
		isLink: true,
		link: "https://rasaji.com/s0ku"
	},
]

const addTextToPage = async function addTextToPage(page_name) {
	const
		main = document.querySelector("main"),
		page = pages.find(p => p.page_name == page_name);

	for (let section_info of page.sections) {
		const
			section = document.createElement("section"),
			h1 = document.createElement("h1"),
			{ heading, descriptions } = section_info;


		h1.innerHTML = heading;
		section.appendChild(h1);

		for (let description of descriptions) {
			const p = document.createElement("p");
			p.innerHTML = description;
			section.appendChild(p);
		}

		main.appendChild(section);
	}
}
const addFadeText = async function addFadeText(text, delay=null) {
	const
		header = document.querySelector("header"),
		p = document.createElement("p");

	p.innerHTML = text;
	p.id = "fade_text";

	if (delay) {
		p.style.setProperty('animation-delay', `${delay}s`);
		p.style.setProperty("right", "40px");
	}
	else {
		p.style.setProperty("left", "40px");
	}

	header.appendChild(p);
}
const addHeader = async function addHeader() {
	let header_elm = document.querySelector("header"),
		nav = document.createElement("nav"),
		hamburger_menu_div = document.createElement("div"),
		links_div = document.createElement("div");

	hamburger_menu_div.id = "hamburger_menu"
	hamburger_menu_div.innerHTML = `
		<div id="hamburger_menu_button" onclick="showMenu()">
			<img src="./media/graphics/hamburger_menu_icon.svg" alt="Hamburger Menu">
			<p> Menu </p>
		</div>
	`

	links_div.id = "links";
	for (let page of pages) {
		const
			a = document.createElement("a"),
			{ name, page_name } = page;

		if (page.isLink) {
			a.target = "_blank";
			a.href = page.link;
			a.classList.add("href");
		}
		else
			a.href = `./${page_name}.html`;

		a.classList.add(`${page_name.replace(" ", "_")}_link`);
		a.textContent = name;


		links_div.append(a);

		nav.appendChild(a);
		links_div.appendChild(a.cloneNode(true));
	}
	hamburger_menu_div.appendChild(links_div);
	nav.appendChild(hamburger_menu_div);
	header_elm.appendChild(nav);

	header_elm.innerHTML += `
		<div class="video_container">
			<video autoplay muted loop>
				<source src="./media/videos/massage_stock_footage.mp4" type="video/mp4">
				Your browser doesn't support video
			</video>
		</div>

		<img src="./media/graphics/Website_Logo.svg" alt="Logo">
		<h1> Regenerative Therapies </h1>
	`;
}
// Show Hamburger Menu
const showMenu = async function showMenu() {
	let hamburger_links = document.querySelector("div#links");

	if (isMenuOpen) {
		hamburger_links.style = `
			transition: right 150ms ease-in;
			right: -100vw;
		`
		isMenuOpen = false;

		setTimeout(() => {
			hamburger_links.style = `
				transition: none;
				right: -100vw;
			`
		}, 150);
	} else {
		hamburger_links.style = `
			transition: right 150ms ease-out;
			right: 0;
		`
		isMenuOpen = true;

		setTimeout(() => {
			hamburger_links.style = `
				transition: none;
				right: 0;
			`
		}, 150);
	}
}
const addTagsToHead = async function addTagsToHead() {

	head.innerHTML += `
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Angela Carron">
		<!-- WEBSITE DESCRIPTION -->
		<meta
			name="description"
			content="Welcome to Regenerative Therapies. Experience restoration, rejuventation, and renewal at our therapies. With our remedies you'll see your transformation into a regenerated self. We provide therapy, relief, treatment, and theraputics."
		>
		<meta
			name="keywords"
			content="regenerative, regeneration, massage, rejuvenation, restoration, therapy, therapies, therapist, renewal, renevation, transformation, healing, remedy, theraputics, curing, relief, treatment"
		>

		<script src="./scripts/script.js" defer></script>

		<link rel="stylesheet" href="./styles/bootstrap-responsive.css" type="text/css">
		<link rel="stylesheet" href="./styles/main.css" type="text/css">
		<link rel="stylesheet" href="./styles/${page_name}.css" type="text/css">
	`

	if (page_name != "index")
		head.innerHTML += `<link rel="stylesheet" href="./styles/low_header.css" type="text/css">`;
}
const includeHTML = async function includeHTML() {
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

// onload
const loadWebPage = async function loadWebPage() {

	await addHeader();
	await includeHTML();

	document.addEventListener("scroll", function() {
		let nav_elm = document.querySelector("nav"),
			header_elm = document.querySelector("header"),
			header_height = header_elm.offsetHeight;

		if (window.scrollY >= header_height - 100) {

			nav_elm.style = `
				background: var(--most-dark-color);
			`
		} else {
			nav_elm.style = `
				background: #00000080;
			`
		}
	});

	await addFadeText("I have come that they may have life, and have it to the fullest.");
	await addFadeText("You were not created to die, but to regenerate.", 6);

	await addTextToPage(page_name);

	document.querySelector("video").addEventListener("loadeddata", () => {
		document.getElementById("loading").style.opacity = "0";
		setTimeout(
			() => {document.getElementById("loading").style.display = "none";},
			500
		)
	});
}


addTagsToHead();


