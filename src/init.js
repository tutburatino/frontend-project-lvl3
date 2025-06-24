import './style.scss';

import bodyHtml from './body.html';

export default () => {
  document.title = 'RSS reader';
  document.body.outerHTML = bodyHtml;
};
