import React, {lazy, Suspense} from 'react';
import Loading from '../../components/Loading';
import ErrorBoundary from '../../components/ErrorBoundary';


const ProjectContainer = lazy(() => import('./ProjectContainer'));

const LoadableProjectContainer = () => {
  return (
    <div>
			<ErrorBoundary place='ProjectWrapper'>
				<Suspense fallback={<Loading />}>
					<ProjectContainer />
				</Suspense>
			</ErrorBoundary>
    </div>
  );
}

export default LoadableProjectContainer;
