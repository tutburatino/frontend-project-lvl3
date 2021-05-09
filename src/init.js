// eslint-disable-next-line import/no-unresolved
import initialBody from './initial-body.html';
import './style.scss';

export default () => {
  document.title = 'RSS reader';
  document.body.outerHTML = initialBody;
};
