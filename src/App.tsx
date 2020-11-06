import React, { useEffect, useState, useContext } from 'react';
import { RouterProps } from 'react-router';
import { Router, BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { store, isDevelopment } from './common/store';
import MFAppContext from './common/microAppContext';
import axiosFetch from './common/fetch';
import Routes from './routes';
import './App.css';

interface IAppProps {
  history: RouterProps['history'];
}
interface IRenderType {
  (props: Partial<RouteComponentProps>): React.ReactElement;
}

const App: React.FC<IAppProps> = ({ history }) => {
  const context = useContext(MFAppContext);
  const { language } = context;
  const [messagebundle, setMessagebundle] = useState({});
  useEffect(() => {
    const fetchMessageBundle = async () => {
      const fetch = await axiosFetch;
      try {
        const messagebundleJson = await fetch({
          url: `${process.env.APP_SERVICE_PUBLIC_URL}/i18n/messagebundle_${language}.json`
        });
        setMessagebundle(messagebundleJson);
      } catch (error) {
        const messagebundleJson = await fetch({
          url: `${process.env.APP_SERVICE_PUBLIC_URL}/i18n/messagebundle_en.json`
        });
        setMessagebundle({ messagebundleJson });
      }
    };
    fetchMessageBundle();
  }, []);

  let DynamicRouter = BrowserRouter;
  let appProps = {};

  if (history) {
    // @ts-ignore
    DynamicRouter = Router;
    appProps = { history };
  }

  const wrapToProduction = (renderEle: IRenderType) => {
    return <Route path={`/${process.env.APP_SERVICE_PUBLIC_URL}`} render={renderEle} />;
  };

  const renderEle: IRenderType = ({ match }) => <Routes match={match} />;

  return (
    <IntlProvider messages={messagebundle} locale={language} defaultLocale="en">
      <Provider store={store}>
        <DynamicRouter {...appProps}>{isDevelopment ? renderEle({}) : wrapToProduction(renderEle)}</DynamicRouter>
      </Provider>
    </IntlProvider>
  );
};

export default App;
