/* eslint-disable no-unused-vars */
const BLANK = ''
const SPACE = '&nbsp;'
const TAB = '&nbsp;&nbsp;&nbsp;&nbsp;'
const NEWLINE = '<br>'
const NEWBREAK = '\n'
function clr () {
  document.body.style.fontFamily = 'Arial Black'
  document.body.innerHTML = BLANK
}
function out (newText) {
  document.body.innerHTML += newText
}
function output (newText) {
  document.body.innerHTML += NEWLINE + NEWBREAK + newText
}
