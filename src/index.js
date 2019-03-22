export function helloWebpack() {
  document.getElementsByClassName('hello-webpack')[0].textContent =
    'Hello webpack!';
}

import $ from 'jquery';

export function helloJqueryExternal() {
  $('.hello-jquery-external').text('Hello jquery external!');
}
