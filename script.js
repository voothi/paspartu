"use strict";

let forms = document.forms[0];
let buttonCalculate = forms.querySelector('div[name="calculate"]');

function getOrder() {
    // alert("еуые");
    order.picInsertExtHorizontal = forms.querySelector('input[name="picInsertExtHorizontal"]').value;
    order.picInsertExtVertical = forms.querySelector('input[name="picInsertExtVertical"]').value;
    order.frameBaguetteColor = forms.querySelector('select[name="frameBaguetteColor"]').value;
    order.frameBackMaterial = forms.querySelector('select[name="frameBackMaterial"]').value;
    order.frameInsertMaterial = forms.querySelector('select[name="frameInsertMaterial"]').value;
    order.frameAmount = forms.querySelector('input[name="frameAmount"]').value;
    // console.log("test");
}

buttonCalculate.addEventListener("click", getOrder);



