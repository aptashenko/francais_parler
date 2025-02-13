import i18n from '@/i18n';

const loadLocaleMessages = async (locale: string): Promise<void> => {
  const messages = await import(`@/i18n/locales/${locale}/index.ts`);
  i18n.global.setLocaleMessage(locale, messages.default);
};

export const setLanguage = async (): Promise<void> => {
  const avaliableLocales = ['uk'];

  // eslint-disable-next-line prefer-destructuring
  const locale: string = window.location.pathname.split("/")[1];
  const newLocale = avaliableLocales.includes(locale) ? locale : 'uk'
  await loadLocaleMessages(newLocale);

  localStorage.setItem('lang', newLocale);
  (document.querySelector('html') as HTMLElement).setAttribute('lang', newLocale);
};
