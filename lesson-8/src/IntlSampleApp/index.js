import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Welcome from './Welcome';

const messages = {
  en: {
    welcome:
      'Hello {name}. You have {tasksCount, number} {tasksCount, plural, one {task} other {tasks}}',
  },
  ru: {
    welcome:
      'Привет, {name}. У вас {tasksCount, number} {tasksCount, plural, zero {сообщений} one {сообщение} few {сообщения} other {сообщений}}',
  },
};

export default () => {
  const [locale, setLocale] = useState('en');

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ru' : 'en';

    setLocale(nextLocale);
  };
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <h2>i18n (react-intl)</h2>

      <h3>Current locale: {locale}</h3>
      <button className="action-button" onClick={toggleLocale}>
        Toggle Locale
      </button>
      <Welcome name="Steve" tasksCount={2} />
    </IntlProvider>
  );
};
