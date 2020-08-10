import Anchor from './utils/anchor';
import { html } from 'lit-html';
import Image from './elements/image';

const Product = () => html`

  <h1>Product page</h1>
  ${Image('chrisandrewca')}
  ${Anchor({ content: 'Back home', href: '/' })}`;

export default Product;