import { html, render } from 'lit-html';

const App = (document) => {
  const app = html`
    <picture>
      <source type="image/webp" media="(min-width: 450px)" srcset="/media/512/chrisandrewca.webp" />
      <source type="image/jpeg" media="(min-width: 450px)" srcset="/media/512/chrisandrewca.jpg" />
      <source type="image/webp" media="(min-width: 321px)" srcset="/media/375/chrisandrewca.webp" />
      <source type="image/jpeg" media="(min-width: 321px)" srcset="/media/375/chrisandrewca.jpg" />
      <img src="/media/270/chrisandrewca.webp" /><!-- TODO fix me -->
    </picture>
    <div>
      <a href='#'>Buy my T-Shirt</a>
    </div>`;

  render(app, document.body);
};

if (import.meta.hot) {
  import.meta.hot.accept();
}

export default App;