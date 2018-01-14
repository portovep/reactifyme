import ReactGA from 'react-ga';

export const configurePageViewLogger = () => {
  const isProdEnv = process.env.NODE_ENV === 'production';
  const gaTrackingID = process.env.REACT_APP_GA_TRACKING_ID;

  if (isProdEnv && gaTrackingID) {
    console.info('Initializing PageViewLogger (Google Analytics tracker)...');
    ReactGA.initialize(gaTrackingID);

    return () => {
      ReactGA.set({ page: window.location.pathname + window.location.search });
      ReactGA.pageview(window.location.pathname + window.location.search);
    };
  }

  console.info(
    'PageViewLogger (Google Analytics tracker) is not enabled/configured'
  );
  return () => {
    console.info(
      'PageViewLogger disabled, not tracking page view of',
      window.location.pathname
    );
  };
};
