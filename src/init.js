import './style.scss';
import * as fs from 'fs';

const body = fs.readFileSync('./init-body.html', 'utf-8');

console.log(fs.readFileSync);

export default () => {
  document.title = 'RSS reader';
  document.body.outerHTML = body;
};
