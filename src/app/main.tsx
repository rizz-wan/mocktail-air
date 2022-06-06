import { Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage';
import { ThemeProvider } from '@fluentui/react';
import Header from './components/header';
import Footer from './components/footer';
import { GetCurrentTheme } from 'src/utils';
import { Helmet } from 'react-helmet';

function Main() {
  const themeMode = GetCurrentTheme();

  return (
    <ThemeProvider theme={themeMode}>
      <Helmet
        defaultTitle='Mocktail Air'
        titleTemplate='%s - Mocktail Air'
      ></Helmet>
      <Header />
      <Switch>
        {/* Tip: */}
        {/*<Route
          path={'/component'}
          render={(): JSX.Element => {
            return <Component />;
          }}
        />*/}
        <Route
          path={'/'}
          render={(): JSX.Element => {
            return <HomePage />;
          }}
        />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
