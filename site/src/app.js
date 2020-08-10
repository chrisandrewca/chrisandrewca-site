import { matchLocation, onLocationChanged } from './utils/location';
import { render } from 'lit-html';
import { replaceLocation } from './utils/location';

// TODO move into location.js
console.log('location', window.location);
//

const App = async () => {

  const pages = [
    { path: /^[/]$/, load: async () => (await import('./home')).default },
    { path: /^[/]product$/, load: async () => (await import('./product')).default }
  ];

  // TODO unsubscribe? check chrome event logger
  // but I think this is just one time, could use beforeUnload
  onLocationChanged(async () => {
    const location = matchLocation(pages);
    const content = await location.page.load();

    render(content(), window.document.body);
  });

  replaceLocation('/');
};

export default App;

if (import.meta.hot) {
  import.meta.hot.accept();
}