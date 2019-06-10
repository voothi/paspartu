"use strict";

const order = {
    "picInsertExtHorizontal": 0,
    "picInsertExtVertical": 0,

    "frameBaguetteColor": 0,
    "frameInsertMaterial": 0,
    "frameBackMaterial": 0,

    "frameBaguettePrice": 0,
    "frameInsertPrice": 0,
    "frameBackPrice": 0,

    "frameAmount": 1,

    "perimeterSquareFrameBaguette": 0,
    "areaSquarePicInsert": 0,

    "frameBaguetteCost": 0,
    "frameInsertCost": 0,
    "frameBackCost": 0,

    "orderSumCost": 0,

    calcPerimeterSquareFrameBaguette: function () {
        this.perimeterSquareFrameBaguette = (this.picInsertExtHorizontal + this.picInsertExtVertical) * 2;
    },
    calcAreaSquarePicInsert: function () {
        this.areaSquarePicInsert = this.picInsertExtHorizontal * this.picInsertExtVertical;
    },
    getFrameBaguettePrice: function () {
        this.frameBaguettePrice = frameBaguette[this.frameBaguetteColor].price.value;
    },
    getFrameInsertPrice: function () {
        this.frameInsertPrice = frameInsert[this.frameInsertMaterial].price.value;
    },
    getFrameBackPrice: function () {
        this.frameBackPrice = (frameBack[this.frameBackMaterial].price.value);
    },
    calcFrameBaguetteCost: function () {
        this.frameBaguetteCost = this.frameAmount * (this.perimeterSquareFrameBaguette * this.frameBaguettePrice);
    },
    calcFrameInsertCost: function () {
        this.frameInsertCost = this.frameAmount * (this.areaSquarePicInsert * this.frameInsertPrice);
    },
    calcFrameBackCost: function () {
        this.frameBackCost = this.frameAmount * (this.areaSquarePicInsert * this.frameBackPrice);
    },
    calcOrderSumCost: function () {
        this.orderSumCost = this.frameBaguetteCost + this.frameInsertCost + this.frameBackCost;
    },
    convertRubPennyToRub: function (valueInRubPenny) {
        return valueInRubPenny / 100;
    },

};

const picInsert = {
    "extVertical": 0,
    "extHorizontal": 0,
};

const frame = {
    "extVertical": 0,
    "extHorizontal": 0,
};

const frameBaguette = {
    "silver": {
        "manufacturer": "nelson",
        "material": "aluminium",
        "color": {
            "en": "silver",
            "ru": "Серебро"
        },
        "price": {
            "value": 10,
            "currency": "penny rub",
            "unit": "mm",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "extLengthCommon": 0, //общий погонаж багета по большей стороне
        "width": 25, //шиsрина багета
        "sectionWidth": 9, //толщина в срезе багета
        "sectionHeight": 12 //высота в срезе профиля багета
    },
    "black": {
        "manufacturer": "nelson",
        "material": "aluminium",
        "color": {
            "en": "black",
            "ru": "Черный"
        },
        "price": {
            "value": 20,
            "currency": "penny rub",
            "unit": "mm",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "extLengthCommon": 0,
        "width": 25,
        "sectionWidth": 9,
        "sectionHeight": 12
    },
};

const frameInsert = {
    "acrylic": {
        "manufacturer": "nelson",
        "material": {
            "en": "acrylic",
            "ru": "Акрил"
        },
        "color": "transparent",
        "price": {
            "value": 50,
            "currency": "penny rub",
            "unit": "mm^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //3мм
    },
    "plexiglass": {
        "manufacturer": "nelson",
        "material": {
            "en": "plexiglass",
            "ru": "Оргстекло"
        },
        "color": "transparent",
        "price": {
            "value": 50,
            "currency": "penny rub",
            "unit": "mm^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 0,
    },
};

const frameBack = {
    "hardboard": {
        "manufacturer": "nelson",
        "material": {
            "en": "hardboard",
            "ru": "Оргалит"
        },
        "color": "none",
        "price": {
            "value": 10,
            "currency": "penny rub",
            "unit": "mm^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": "?",
    },
    "pvc": {
        "manufacturer": "nelson",
        "material": {
            "en": "pvc",
            "ru": "ПВХ"
        },
        "color": "none",
        "price": {
            "value": 30,
            "currency": "penny rub",
            "unit": "mm^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //mm
    },
};