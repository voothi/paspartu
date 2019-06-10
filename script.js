"use strict";

let forms = document.forms[0];
let buttonCalculate = forms.querySelector('div[name="calculate"]');

function getOrder() {
    order.picInsertExtHorizontal = Number.parseInt(forms.querySelector('input[name="picInsertExtHorizontal"]').value);
    order.picInsertExtVertical = Number.parseInt(forms.querySelector('input[name="picInsertExtVertical"]').value);
    order.frameBaguetteColor = forms.querySelector('select[name="frameBaguetteColor"]').value;
    order.frameInsertMaterial = forms.querySelector('select[name="frameInsertMaterial"]').value;
    order.frameBackMaterial = forms.querySelector('select[name="frameBackMaterial"]').value;
    order.frameAmount = Number.parseInt(forms.querySelector('input[name="frameAmount"]').value);

    // if(order.picInsertExtHorizontal <) {

    // }

    order.calcPerimeterSquareFrameBaguette();

    order.getFrameBaguettePrice();
    order.calcFrameBaguetteCost();

    order.calcAreaSquarePicInsert();

    order.getFrameInsertPrice();
    order.calcFrameInsertCost();

    order.getFrameBackPrice();
    order.calcFrameBackCost();

    order.calcOrderSumCost();

    outResult();
}

buttonCalculate.addEventListener("click", getOrder);

function outResult() {
    let resultDiv = document.querySelector('.result');
    resultDiv.innerText =
        `
Заказ:

Тираж: ${order.frameAmount} шт.

- Багет -
    Цвет: ${frameBaguette[order.frameBaguetteColor].color.ru}
    Цена: ${order.frameBaguettePrice} коп./мм
Стоимость: ${order.convertRubPennyToRub(order.frameBaguetteCost)} руб.

- Вставка -
    Материал: ${frameInsert[order.frameInsertMaterial].material.ru + " " + frameInsert[order.frameInsertMaterial].depth + " мм"}
    Цена: ${order.frameInsertPrice} коп./кв. мм 
Стоимость: ${order.convertRubPennyToRub(order.frameBackCost)} руб.

- Задник -
    Материал: ${frameBack[order.frameBackMaterial].material.ru + " " + frameBack[order.frameBackMaterial].depth + " мм"}
    Цена: ${order.frameBackPrice} коп./кв. мм 
Стоимость: ${order.convertRubPennyToRub(order.frameInsertCost)} руб.

Сумма: ${order.convertRubPennyToRub(order.orderSumCost)} руб.
        `;
}
