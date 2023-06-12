import { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
import Layout from './Layout';
const Home = lazy(() => import('./pages/Home'));
const Redirect = lazy(() => import('./pages/Redirect'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<div className='pt-40'>Skeleton...</div>}>
          <Route path='/' component={Home} />
        </Suspense>
        <Suspense fallback={<div className='pt-40'>Cargando...</div>}>
          <Route path='/:id' component={Redirect} />
          <Route component={NotFound} />
        </Suspense>
      </Switch>
    </Layout>
  );
}

export default App;
