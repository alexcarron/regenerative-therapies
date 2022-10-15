/* Alexander Carron - May 17th 2022 */
let isMenuOpen = false;
let web_page_name = window.location.pathname.split("/").pop().slice(0, -5);
let head = document.head;

console.log(window.location.pathname);

console.log(web_page_name)


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
	<link rel="stylesheet" href="./styles/${web_page_name}.css" type="text/css">
`

if (web_page_name != "index") {
	head.innerHTML += `
		<link rel="stylesheet" href="./styles/low_header.css" type="text/css">
	`
}

// onload
function loadWebPage() {

	let header_elm = document.querySelector("header");

	header_elm.innerHTML = `
		<nav>
			<div id="hamburger_menu">
				<div id="hamburger_menu_button" onclick="showMenu()">
					<img src="./media/graphics/hamburger_menu_icon.svg" alt="Hamburger Menu">
					<p> Menu </p>
				</div>

				<div id="links">
					<a href="./index.html" class="home_link">
						Home
					</a>

					<a href="./accounts.html" class="accounts_link">
						Accounts
					</a>

					<a href="./counseling.html" class="counseling_link">
						Counseling
					</a>

					<a href="./tai_chi_gung.html" class="tai_chi_gung_link">
						Tai Chi Gung
					</a>

					<a href="./nutrition.html" class="nutrition_link">
						Nutrition
					</a>

					<a href="./silver_gold.html" class="silver_gold_link">
						Silver/Gold
					</a>

					<a href="about_us.html" class="about_us_link">
						About Us
					</a>
				</div>

			</div>


			<a href="./index.html" class="home_link">
				Home
			</a>

			<a href="./accounts.html" class="accounts_link">
				Accounts
			</a>

			<a href="./counseling.html" class="counseling_link">
				Counseling
			</a>

			<a href="./tai_chi_gung.html" class="tai_chi_gung_link">
				Tai Chi Gung
			</a>

			<a href="./nutrition.html" class="nutrition_link">
				Nutrition
			</a>

			<a href="./silver_gold.html" class="silver_gold_link">
				Silver/Gold
			</a>

			<a href="about_us.html" class="about_us_link">
				About Us
			</a>
		</nav>

		<div class="video_container">
			<video autoplay muted loop>
				<source src="./media/videos/massage_stock_footage.mp4" type="video/mp4">
				Your browser doesn't support video
			</video>
		</div>

		<img src="./media/graphics/Website_Logo.svg" alt="Logo">
		<h1> Regenerative Therapies </h1>
	`

	document.addEventListener("scroll", function() {
		let nav_elm = document.querySelector("nav"),
			header_height = header_elm.offsetHeight;

		console.log({
			nav_elm, header_height
		});

		if (window.scrollY >= header_height - 100) {

			nav_elm.style = `
				background: var(--most-dark-color);
			`
		} else {
			nav_elm.style = `
				background: #00000080;
			`
		}
	})
}

/* Show Hamburger Menu */
function showMenu() {
	let hamburger_links = document.querySelector("div#links");

	console.log({isMenuOpen})

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
