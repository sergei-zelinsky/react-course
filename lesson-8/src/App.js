import React, {useState} from 'react';
import cx from 'classnames';
import ReduxAdvancedApp from './ReduxAdvancedApp';
import IntlSampleApp from './IntlSampleApp';
import './app.css';

const setLastUsedApp = app =>
  localStorage.setItem(LAST_USED_APP_KEY, JSON.stringify(app));

const getLastUsedApp = () => {
  const app = localStorage.getItem(LAST_USED_APP_KEY);

  return app ? JSON.parse(app) : null;
};

const APPS = {
  REDUX_ADVANVED_APP: 'Redux Advanced',
  INTL_APP: 'Intl',
};

const LAST_USED_APP_KEY = 'lastUsedApp';

const LAST_USED_APP = getLastUsedApp();

export const App = () => {
  const [currentApp, setCurrentApp] = useState(LAST_USED_APP);

  const isCurrentApp = app => app === currentApp;

  const handleAppChange = nextApp => {
    setLastUsedApp(nextApp);

    setCurrentApp(nextApp);
  };

  return (
    <div className="app">
      <header className="header">
        <h3
          onClick={() => {
            handleAppChange(null);
          }}
        >
          #react-course
        </h3>
        <div className="header-apps">
          {Object.values(APPS).map(app => {
            const classes = cx('header-app', {
              'header-app_active': isCurrentApp(app),
            });

            const handleAppClick = () => {
              handleAppChange(app);
            };

            return (
              <div key={app} className={classes} onClick={handleAppClick}>
                {app}
              </div>
            );
          })}
        </div>
      </header>
      <main className="content">
        {!currentApp && (
          <h2 className="description">Select app from the list above {'⬆️'}</h2>
        )}
        {isCurrentApp(APPS.REDUX_ADVANVED_APP) && <ReduxAdvancedApp />}
        {isCurrentApp(APPS.INTL_APP) && <IntlSampleApp />}
      </main>
    </div>
  );
};

export default App;
