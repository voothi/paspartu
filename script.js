"use strict";

let forms = document.forms[0];
let buttonCalculate = forms.querySelector('div[name="calculate"]');

function getOrder() {
    order.picInsertExtHorizontal = forms.querySelector('input[name="picInsertExtHorizontal"]').value;
    order.picInsertExtVertical = forms.querySelector('input[name="picInsertExtVertical"]').value;
    order.frameBaguetteColor = forms.querySelector('select[name="frameBaguetteColor"]').value;
    order.frameBackMaterial = forms.querySelector('select[name="frameBackMaterial"]').value;
    order.frameInsertMaterial = forms.querySelector('select[name="frameInsertMaterial"]').value;
    order.frameAmount = forms.querySelector('input[name="frameAmount"]').value;
}

buttonCalculate.addEventListener("click", getOrder);

console.log(order.picInsertExtHorizontal);

let orderHorizontal = order.picInsertExtHorizontal;
let orderVertical = order.picInsertExtVertical;
let orderFrameBaguette = frameBaguette[order.frameBaguetteColor];
let orderFrameBack = frameBack[order.frameBackMaterial];
let orderFrameInsert = frameInsert[order.frameInsertMaterial];
let orderFrameAmount = order.frameAmount;

function calcPerimeterSquareFrameBaguette(calcOrderHorizontal, calcOrderVertical) {
    return 2 * (calcOrderHorizontal + calcOrderVertical);
}

let orderFrameBaguetteCost = calcPerimeterSquareFrameBaguette(orderHorizontal, orderVertical) * orderFrameBaguette.price.value;
// let orderFramePerimeter
