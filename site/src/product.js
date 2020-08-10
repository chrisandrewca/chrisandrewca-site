import Anchor from './utils/anchor';
import { html } from 'lit-html';
import Image from './elements/image';
import { update } from './utils/render';

(async () => {
  const result = await fetch('/api/product/1', {
    method: 'GET',
    headers: { accept: 'application/json' }
  });

  const { product } = await result.json();
  update(Product(product));
})();

const Product = ({ title }) => html`

  ${Anchor({ content: 'Edit', href: '/' })}
  <h1>${title}</h1>

  ${Anchor({ content: 'Edit', href: '/' })}
  ${Image('chrisandrewca')}

  ${Anchor({ content: 'Edit', href: '/' })}
  <select>
    <option>Womens</option>
    <option>Mens</option>
  </select>

  ${Anchor({ content: 'Edit', href: '/' })}
  <select>
    <option>Beefy</option>
    <option>Sport</option>
  </select>

  ${Anchor({ content: 'Buy', href: '/' })}

  ${Anchor({ content: 'Back home', href: '/' })}`;

export default Product;