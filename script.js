"use strict";

const picInsert = {
    "picInsert-extVertical": 0,
    "picInsert-extHorizontal": 0,

};

const frame = {
    "frame-extVertical": 0,
    "frame-extHorizontal": 0,
};

const frameBaguette = [
    {
        "manufacturer": "nelson",
        "material": "aluminium",
        "color": "silver",
        "price": {
            "value": 100,
            "currency": "rub",
            "unit": "m",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "frameBaguette-extLengthCommon": 0, //общий погонаж багета по большей стороне
        "frameBaguette-width": 25, //ширина лицевой части багета
        "frameBaguette-sectionWidth": 9, //толщина в срезе багета
        "frameBaguette-sectionHeight": 12 //высота в срезе профиля багета
    },
    {
        "manufacturer": "nelson",
        "material": "aluminium",
        "color": "black",
        "price": {
            "value": 200,
            "currency": "rub",
            "unit": "m",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "frameBaguette-extLengthCommon": 0, //общий погонаж багета по большей стороне
        "frameBaguette-width": 25, //ширина лицевой части багета
        "frameBaguette-sectionWidth": 9, //толщина в срезе багета
        "frameBaguette-sectionHeight": 12 //высота в срезе профиля багета
    },
];

const frameBack = [
    {
        "manufacturer": "nelson",
        "material": "hardboard",
        "color": "none",
        "price": {
            "value": 100,
            "currency": "rub",
            "unit": "m^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "frameBack-extVertical": 0,
        "frameBack-extHorizontal": 0,
        "frameBack-depth": 0,
    },
    {
        "manufacturer": "nelson",
        "material": "pvc",
        "color": "none",
        "price": {
            "value": 300,
            "currency": "rub",
            "unit": "m^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "frameBack-extVertical": 0,
        "frameBack-extHorizontal": 0,
        "frameBack-depth": 3, //mm
    },
];

const frameInsert = [
    {
        "manufacturer": "nelson",
        "material": "acrylic",
        "color": "transparent",
        "price": {
            "value": 500,
            "currency": "rub",
            "unit": "m^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "frameInsert-extVertical": 0,
        "frameInsert-extHorizontal": 0,
        "frameInser-depth": 3, //3мм
    },
    {
        "manufacturer": "nelson",
        "material": "plexiglass",
        "color": "transparent",
        "price": {
            "value": 500,
            "currency": "rub",
            "unit": "m^2",
            "amountUnit": 1,
            "physicalQuantity": "area",
        },
        "frameInsert-extVertical": 0,
        "frameInsert-extHorizontal": 0,
        "frameInser-depth": 0,
    },
];
