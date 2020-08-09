import { html, render } from 'lit-html';

const App = (document) => {
  const app = html`<p>Hello, world!</p>`;
  render(app, document.body);
};

if (import.meta.hot) {
  import.meta.hot.accept();
}

export default App;