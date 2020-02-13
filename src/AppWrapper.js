import React, { Suspense } from 'react';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

const LoadableComponent = React.lazy(() => import('./containers/App'));

const LoadableApp = () => {
  return (
    <div>
      <ErrorBoundary place='AppWrapper'>
        <Suspense fallback={<Loading/>}>
          <LoadableComponent/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default LoadableApp;
