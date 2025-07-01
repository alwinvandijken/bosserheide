# Odyssey Theme Development Guidelines

This document provides essential information for developers working on the Odyssey Theme project. It includes
build/configuration instructions, testing information, and additional development details.

## Build/Configuration Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
npm start
```

This will start the Astro development server at `http://localhost:3000`.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate static files in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Testing Information

### Testing Framework

This project uses Vitest for testing. Vitest is a Vite-native testing framework that's fast and compatible with Astro
projects.

### Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode (tests will re-run when files change):

```bash
npm run test:watch
```

### Adding New Tests

1. Create test files with the `.test.js` or `.spec.js` extension
2. Place test files in the `tests` directory or alongside the files they're testing
3. Follow the Vitest syntax for writing tests:

```javascript
import { expect, test, describe } from 'vitest';
import { yourFunction } from '../path/to/your/file';

describe('Your Component or Function', () => {
	test('should do something specific', () => {
		expect(yourFunction()).toBe(expectedResult);
	});
});
```

### Test Example

Here's a simple example of testing utility functions:

```javascript
// src/utils/testUtils.js
export function add(a, b) {
	return a + b;
}

export function formatPrice(price, currency = '€') {
	return `${currency}${price.toFixed(2)}`;
}

// tests/testUtils.test.js
import { expect, test, describe } from 'vitest';
import { add, formatPrice } from '../src/utils/testUtils';

describe('Utility Functions', () => {
	test('add function correctly adds two numbers', () => {
		expect(add(1, 2)).toBe(3);
		expect(add(-1, 1)).toBe(0);
		expect(add(0, 0)).toBe(0);
	});

	test('formatPrice correctly formats a price with currency symbol', () => {
		expect(formatPrice(10)).toBe('€10.00');
		expect(formatPrice(10.5)).toBe('€10.50');
		expect(formatPrice(10, '$')).toBe('$10.00');
	});
});
```

## Project Structure

```
odyssey/
├── .astro/           # Astro build cache
├── .junie/           # Project documentation
├── assets/           # Static assets for documentation
├── dist/             # Production build output
├── public/           # Static assets that will be copied to dist
├── src/
│   ├── components/   # Reusable UI components
│   ├── config/       # Configuration files
│   ├── i18n/         # Internationalization files
│   ├── icons/        # SVG icons
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page components (routes)
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
└── tests/            # Test files
```

## Internationalization (i18n)

The project supports multiple languages with Dutch (nl) as the default locale and German (de) and English (en) as
additional locales. The i18n configuration is in `astro.config.mjs`:

```javascript
i18n: {
	defaultLocale: "nl",
		locales
:
	["de", "en", "nl"]
}
```

## Code Style and Formatting

The project uses Prettier for code formatting. To format all files:

```bash
npm run format
```

## Deployment

The project can be deployed to various static hosting services:

- Netlify
- Firebase Hosting
- Vercel
- GitHub Pages

Refer to the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/) for specific instructions for each
platform.

## Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Odyssey Theme Documentation](https://odyssey-theme.sapling.supply/theme/theme-setup)
- [Vitest Documentation](https://vitest.dev/)
