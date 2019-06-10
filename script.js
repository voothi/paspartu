"use strict";

let forms = document.forms[0];
let buttonCalculate = forms.querySelector('div[name="calculate"]');

function getOrder() {
    order.picInsertExtHorizontal = +forms.querySelector('input[name="picInsertExtHorizontal"]').value;
    order.picInsertExtVertical = +forms.querySelector('input[name="picInsertExtVertical"]').value;
    order.frameBaguetteColor = forms.querySelector('select[name="frameBaguetteColor"]').value;
    order.frameBackMaterial = forms.querySelector('select[name="frameBackMaterial"]').value;
    order.frameInsertMaterial = forms.querySelector('select[name="frameInsertMaterial"]').value;
    order.frameAmount = forms.querySelector('input[name="frameAmount"]').value;

    order.calcPerimeterSquareFrameBaguette();
    order.calcAreaSquarePicInsert();
    order.getFrameBaguettePrice();
    order.calcFrameBaguetteCost();
    // order.convertRubPennyToRub(order.calcFrameBaguetteCost);

    console.log(order.convertRubPennyToRub(order.frameBaguetteCost));

    outResultBaguetteCost();
}

buttonCalculate.addEventListener("click", getOrder);

// function resultBaguetteCost(par1, par2) {

// }

function outResultBaguetteCost(par1) {
    let resultDiv = document.querySelector('.result');
    resultDiv.innerText = 
`
Заказ:
Тираж, шт.: ${order.frameAmount}
- Багет
Цвет: ${order.frameBaguetteColor},
Цена (коп./кв. мм): ${order.frameBaguettePrice},
Стоимость: ${order.convertRubPennyToRub(order.frameBaguetteCost)} руб.
`;
}

// console.log(order.picInsertExtHorizontal);

// let orderHorizontal = order.picInsertExtHorizontal;
// let orderVertical = order.picInsertExtVertical;
// let orderFrameBaguette = frameBaguette[order.frameBaguetteColor];
// let orderFrameBack = frameBack[order.frameBackMaterial];
// let orderFrameInsert = frameInsert[order.frameInsertMaterial];
// let orderFrameAmount = order.frameAmount;

// let orderFrameBaguetteCost = calcPerimeterSquareFrameBaguette(order.picInsertExtHorizontal, order.picInsertExtVertical) * frameBaguette[order.frameBaguetteColor].price.value;
// let orderFramePerimeter
