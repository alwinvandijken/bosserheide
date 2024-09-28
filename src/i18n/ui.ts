export const languages = {
	nl: 'Nederlands',
	en: 'English',
	de: 'Deutch'
};

export const defaultLang = 'nl';
export const showDefaultLang = false;

export const seo = {
	nl: {
		home: {
			title: 'Bosserheide B&B | Uitgerust in Well (L)',
			description: 'Ontdek de rust en gastvrijheid van Bosserheide B&B in het prachtige Well (L). Boek nu uw verblijf en geniet van comfortabele kamers en natuurlijke omgeving.'

		},
		book: {
			title: 'Reserveren',
			description: 'Reserveren page'
		},
		apartment: {
			title: 'Appartement',
			description: 'Appartement page'
		},
		about: {
			title: 'Over Ons',
			description: 'Over Ons page'
		}
	}
};
export const ui = {
	nl: {
		'nav.home': 'Home',
		'nav.book': 'Reserveren',
		'nav.apartment': 'Appartement',
		'nav.about_us': 'Over Ons',
		'nav.contact': 'Contact'
	},
	en: {
		'nav.home': 'Home',
		'nav.book': 'Book',
		'nav.apartment': 'Apartment',
		'nav.about_us': 'About',
		'nav.contact': 'Contact'
	},
	de: {
		'nav.home': 'Startseite',
		'nav.book': 'Buchen',
		'nav.apartment': 'Wonung',
		'nav.about_us': 'Über uns',
		'nav.contact': 'Kontakt'
	},
	fr: {
		'nav.home': 'Accueil',
		'nav.book': 'Réserver',
		'nav.apartment': 'Appartement',
		'nav.about_us': 'À propos',
		'nav.contact': 'Contact'
	},
	es: {
		'nav.home': 'Inicio',
		'nav.book': 'Reservar',
		'nav.apartment': 'Apartamento',
		'nav.about_us': 'Sobre nosotros',
		'nav.contact': 'Contacto'
	}
} as const;

export const routes = {
	nl: {
		'book': 'reserveren',
		'appartement': 'appartement'
	},
	en: {
		'reserveren': 'book',
		'appartement': 'apartment',
		'overons': 'about',
		'contact': 'contact'
	},
	de: {
		'reserveren': 'buchen',
		'appartement': 'wohnung',
		'overons': 'uber_uns',
		'contact': 'kontakt'
	},
	fr: {
		'reserveren': 'reserver',
		'appartement': 'appartement',
		'overons': 'a_propos',
		'contact': 'contact'
	},
	es: {
		'reserveren': 'reservar',
		'appartement': 'apartamento',
		'overons': 'sobre_nosotros',
		'contact': 'contacto'
	}
};
