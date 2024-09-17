export const languages = {
	nl: 'Nederlands',
	en: 'English',
	de: 'Deutch',
	fr: 'Français',
};

export const defaultLang = 'nl';
export const showDefaultLang = false;
export const ui = {
	nl: {
		'nav.home': 'Home',
		'nav.book': 'Reserveren',
		'nav.apartment': 'Appartement',
		'nav.about_us': 'Over Ons',
	},
	en: {
		'nav.home': 'Home',
		'nav.book': 'Book',
		'nav.apartment': 'Apartment',
		'nav.about_us': 'About',
	},
	de: {
		'nav.home': 'Home',
		'nav.book': 'Reservieren',
		'nav.apartment': 'Wonung',
		'nav.about_us': 'Uber uns'
	},
	fr: {
		'nav.home': 'Accueil',
		'nav.book': 'Reservé',
		'nav.apartment': 'À Apartement',
		'nav.about_us': 'À propos',
	},
} as const;

export const routes = {
	nl: {
		'book': 'reserveren',
		'appartement': 'appart-en',
	},
	en: {
		'reserveren': 'book',
		'appartement': 'appart-en',
		'overons': 'about_us',
	},
	de: {
		'services': 'leistungen',
	},
	fr: {
		'services': 'prestations-de-service',
	},
}
