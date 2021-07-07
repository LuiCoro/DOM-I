const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
// Targetting the src and setting it to
// siteContent => nav => img-src
logo.setAttribute('src', siteContent['nav']['img-src']);

/** NAV LINKS */
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

/** NAV STYLING  */

nav.style.backgroundColor = 'green';

/** NEW NAV TAGS  */

const helpLink = document.createElement('a');
helpLink.textContent = 'Reviews';

const missionLink = document.createElement('a');
missionLink.textContent = 'Sponsors';

nav.appendChild(helpLink);
nav.appendChild(missionLink);

/** CTA STUFF  */

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

/** MAIN CONTENT IMAGE  */

const bodyImg = document.getElementById('middle-img');
bodyImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

/** MAIN CONTENT TITLES */
const textTitles = document.querySelectorAll('h4');
textTitles[0].textContent = siteContent['main-content']['features-h4'];
textTitles[1].textContent = siteContent['main-content']['about-h4'];
textTitles[2].textContent = siteContent['main-content']['services-h4'];
textTitles[3].textContent = siteContent['main-content']['product-h4'];
textTitles[4].textContent = siteContent['main-content']['vision-h4'];

/** CONTACT TITLE  */
textTitles[5].textContent = siteContent['contact']['contact-h4'];

/** MAIN CONTENT TEXT  */

const textBodys = document.querySelectorAll('p');
textBodys[0].textContent = siteContent['main-content']['features-content'];
textBodys[1].textContent = siteContent['main-content']['about-content'];
textBodys[2].textContent = siteContent['main-content']['services-content'];
textBodys[3].textContent = siteContent['main-content']['product-content'];
textBodys[4].textContent = siteContent['main-content']['vision-content'];

/** Contact Text */
textBodys[5].textContent = siteContent['contact']['address'];
textBodys[6].textContent = siteContent['contact']['phone'];
textBodys[7].textContent = siteContent['contact']['email'];

/** FOOTER */
textBodys[8].textContent = siteContent['footer']['copyright'];
