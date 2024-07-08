// deprecated
export const fetchScreens = () => {
  // 'serviceWorker' in navigator &&
  // !import.meta.env.DEV
  const sw: ServiceWorkerContainer =
    navigator.serviceWorker;
  // sw.ready.then((registration) => {
  //   if (!registration.active) return null;
  //   registration.active.postMessage({
  //     type: 'init-screens',
  //     records: allRecords,
  //     from: 'PROVIDER',
  //   });
  // });
  // sw.onmessage = (event) => {
  //   if (event.data.type === 'init-screens') {
  //     setRecords(event.data.records);
  //   }
  // };
  // sw.onmessageerror = (event) => {
  //   console.error(event);
  // };
};
