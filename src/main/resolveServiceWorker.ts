export const initServiceWorker = async () => {
  if (navigator.serviceWorker) {
    try {
      const register =
        await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });
      // const subscription =
      //   await register.pushManager.subscribe();
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }

    // .then((registration) => {
    //   console.log(
    //     'ServiceWorker registration successful with scope:',
    //     registration.scope,
    //   );
    // })
    // .catch((error) => {
    // });
  }
};
