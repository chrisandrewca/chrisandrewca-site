import Anchor from './utils/anchor';
import { html } from 'lit-html';

const Product = () => html`
  <h1>Product page</h1>
  ${Anchor({ content: 'Back home', href: '/'})}`;

export default Product;