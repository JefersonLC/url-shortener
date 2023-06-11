import { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
import Layout from './Layout';
const Home = lazy(() => import('./pages/Home'));
const Redirect = lazy(() => import('./pages/Redirect'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Cargando...</div>}>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/redirect/:id' component={Redirect} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
