import { render } from 'lit-html';

export const update = async (html) => {
  render(html, window.document.body);
};