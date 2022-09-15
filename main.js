
 // const api = 'https://script.google.com/macros/s/AKfycbxU4KBrfUX9DYMJvrhL-sIkPlEJ40zcl7Z18Z5vm8ayH4EZGtoYcqDwlkYNvCjXCQ6v/exec'

const gElId = (id) => { return document.getElementById(id) };
const gElCl = (cl) => { return document.getElementsByClassName(cl) };
const gElTg = (tg) => { return document.getElementsByTagName(tg) };
const quSel = (sl) => { return document.querySelector(sl) };
const quSAl = (sl) => { return document.querySelectorAll(sl) };

const crtEl = (el) => { return document.createElement(el) };

const setLocal = (keyName, keyVal) => { window.localStorage.setItem(keyName, keyVal) };
const getLocal = (keyName) => { return window.localStorage.getItem(keyName) };
const setSess = (keyName, keyVal) => { window.sessionStorage.setItem(keyName, keyVal) };
const getSess = (keyName) => { return window.sessionStorage.getItem(keyName) };

const eachLp = function(arr, func) { arr.forEach(function(row) { func(row) }) }; //forEachLoop

const fetchRes = async (url) => { //FetchRequest
  const response = await fetch(url);
  return response.json();
};