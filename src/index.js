export function helloWebpack() {
  document.getElementsByClassName('hello-webpack')[0].textContent =
    'Hello webpack!';
}

export const helloBabel = () => {
  document.getElementsByClassName('hello-babel')[0].textContent =
    'Hello babel!';
} 

import $ from 'jquery';
export function helloJqueryExternal() {
  $('.hello-jquery-external').text('Hello jquery external!');
}
