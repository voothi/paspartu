"use strict";

const order = {
    "picInsertExtHorizontal": 0,
    "picInsertExtVertical": 0,
    "frameBaguetteColor": 0,
    "frameBackMaterial": 0,
    "frameInsertMaterial": 0,
    "frameAmount": 0
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
        "color": "silver",
        "price": {
            "value": 100,
            "currency": "rub",
            "unit": "mm",
            "amountUnit": 1000,
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
        "color": "black",
        "price": {
            "value": 200,
            "currency": "rub",
            "unit": "mm",
            "amountUnit": 1000,
            "physicalQuantity": "distance",
        },
        "extLengthCommon": 0,
        "width": 25,
        "sectionWidth": 9,
        "sectionHeight": 12
    },
};

const frameBack = {
    "hardboard": {
        "manufacturer": "nelson",
        "material": "hardboard",
        "color": "none",
        "price": {
            "value": 100,
            "currency": "rub",
            "unit": "mm^2",
            "amountUnit": 1000000,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 0,
    },
    "pvc": {
        "manufacturer": "nelson",
        "material": "pvc",
        "color": "none",
        "price": {
            "value": 300,
            "currency": "rub",
            "unit": "mm^2",
            "amountUnit": 1000000,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //mm
    },
};

const frameInsert = {
    "acrylic": {
        "manufacturer": "nelson",
        "material": "acrylic",
        "color": "transparent",
        "price": {
            "value": 500,
            "currency": "rub",
            "unit": "mm^2",
            "amountUnit": 1000000,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //3мм
    },
    "plexiglass": {
        "manufacturer": "nelson",
        "material": "plexiglass",
        "color": "transparent",
        "price": {
            "value": 500,
            "currency": "rub",
            "unit": "mm^2",
            "amountUnit": 1000000,
            "physicalQuantity": "area",
        },
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 0,
    },
};
