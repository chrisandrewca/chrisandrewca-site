import Anchor from './utils/anchor';
import { html } from 'lit-html';
import Image from './elements/image';

const Product = () => html`

  ${Anchor({ content: 'Edi', href: '/' })}
  <h1>You are good Tee</h1>

  ${Anchor({ content: 'Edit', href: '/' })}
  ${Image('chrisandrewca')}

  ${Anchor({ content: 'Edi', href: '/' })}
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