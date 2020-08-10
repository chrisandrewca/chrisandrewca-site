import Anchor from './utils/anchor';
import { html } from 'lit-html';

const Home = () => html`

    <picture>
      <source type="image/webp" media="(min-width: 450px)" srcset="/media/512/chrisandrewca.webp" />
      <source type="image/jpeg" media="(min-width: 450px)" srcset="/media/512/chrisandrewca.jpg" />
      <source type="image/webp" media="(min-width: 321px)" srcset="/media/375/chrisandrewca.webp" />
      <source type="image/jpeg" media="(min-width: 321px)" srcset="/media/375/chrisandrewca.jpg" />
      <img src="/media/270/chrisandrewca.webp" /><!-- TODO fix me -->
    </picture>
  
    <div>
      ${Anchor({ content: 'Buy my T-Shirt', href: '/product'})}
    </div>`;

export default Home;