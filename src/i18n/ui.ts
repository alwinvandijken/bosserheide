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
		'nav.reservation': 'Reserveren',
		'nav.apartment': 'Appartement',
		'nav.about': 'Over Ons',
		'nav.twitter': 'Twitter',
	},
	en: {
		'nav.home': 'Home',
		'nav.reservation': 'Reservation',
		'nav.apartment': 'Apartment',
		'nav.about': 'About',
		'nav.twitter': 'Twitter',
	},
	de: {
		'nav.home': 'Home',
		'nav.reservation': 'Reservieren',
		'nav.apartment': 'Wonung',
		'nav.about': 'Uber uns'
	},
	fr: {
		'nav.home': 'Accueil',
		'nav.reservation': 'Reservé',
		'nav.apartment': 'À Apartement',
		'nav.about': 'À propos',
	},
} as const;

export const routes = {
	de: {
		'services': 'leistungen',
	},
	fr: {
		'services': 'prestations-de-service',
	},
}
