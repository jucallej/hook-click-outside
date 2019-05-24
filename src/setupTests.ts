import * as Enzyme from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

import {JSDOM} from 'jsdom';
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// @ts-ignore
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

// @ts-ignore
global.window = window;
// @ts-ignore
global.document = window.document;
// @ts-ignore
global.navigator = {
  userAgent: 'node.js',
};
// @ts-ignore
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
// @ts-ignore
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

copyProps(window, global);

export default undefined;
