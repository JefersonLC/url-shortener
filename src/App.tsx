import { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
const Home = lazy(() => import('./pages/Home'));
const Redirect = lazy(() => import('./pages/Redirect'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <nav className='bg-teal-400 px-5 flex gap-4'>
        <h1>URL Shortener</h1>
      </nav>
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/redirect/:id' component={Redirect} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
