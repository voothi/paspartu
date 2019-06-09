"use strict";

const picInsert = {
    "extVertical": 0,
    "extHorizontal": 0,

};

const frame = {
    "extVertical": 0,
    "extHorizontal": 0,
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
        "extLengthCommon": 0, //общий погонаж багета по большей стороне
        "width": 25, //ширина лицевой части багета
        "sectionWidth": 9, //толщина в срезе багета
        "sectionHeight": 12 //высота в срезе профиля багета
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
        "extLengthCommon": 0, //общий погонаж багета по большей стороне
        "width": 25, //ширина лицевой части багета
        "sectionWidth": 9, //толщина в срезе багета
        "sectionHeight": 12 //высота в срезе профиля багета
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
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 0,
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
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //mm
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
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 3, //3мм
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
        "extVertical": 0,
        "extHorizontal": 0,
        "depth": 0,
    },
];
