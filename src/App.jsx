import GlobalStyle from './styles/GlobalStyle';
import Router from './shared/router/Router';
import * as Sentry from '@sentry/react';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default Sentry.withProfiler(App);
