import React from 'react';
import { SFProvider, createFetchClient, SFStore } from '@sf/ffr-core/es';
import { Provider } from 'react-redux';
import Shellbar from '@sf/ffr-components/es/shellbar';
import { FormattedMessage } from 'react-intl';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes, { allModels } from './routes';
import sapLogo from './assets/sap_logo.png';
import './App.css';

const fetchClient = createFetchClient(fetch);
const store = SFStore.createSFStore(allModels);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SFProvider locale="en" messageBundle={{}} fetchClient={fetchClient}>
        <div className="HelloWorld">
          <BrowserRouter>
            <Shellbar
              logo={<img alt="SAP" src={sapLogo} />}
              productTitle={<FormattedMessage id="platform-service" defaultMessage="Platform Services" />}
            />
            <div className="tt-shell-body">
              <Link className="tt-link" to="/home">
                <FormattedMessage id="to-home" defaultMessage="to home" />
              </Link>
              <Link className="tt-link" to="/detail">
                <FormattedMessage id="to-detail" defaultMessage="to detail" />
              </Link>
            </div>
            <Routes />
          </BrowserRouter>
        </div>
      </SFProvider>
    </Provider>
  );
};

export default App;
