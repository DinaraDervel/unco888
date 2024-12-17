import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en'], // Define in this line the possible languages for translation
  defaultLocale: 'en', // Define in this line the default language to be shown
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

// import { defineRouting } from 'next-intl/routing';
// import { createNavigation } from 'next-intl/navigation';

// export const routing = defineRouting({
//   locales: ['en'],
//   defaultLocale: 'en',
//   pathnames: {
//     en: '/',
//     // de: '/de',
//     // es: '/es',
//     // fr: '/fr',
//     // it: '/it',
//     // ru: '/ru',
//     // uk: '/uk',
//   },
// });

// export type Pathnames = keyof typeof routing.pathnames;
// export type Locale = (typeof routing.locales)[number];

// export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
