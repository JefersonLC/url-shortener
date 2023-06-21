import { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
import Layout from './Layout';
import UrlContextProvider from './context/UrlContext';
import Fallback from './components/Fallback';

const Home = lazy(() => import('./pages/Home'));
const Redirect = lazy(() => import('./pages/Redirect'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <UrlContextProvider>
      <Layout>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/:id' component={Redirect} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </UrlContextProvider>
  );
}

export default App;
