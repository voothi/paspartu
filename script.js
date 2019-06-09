"use strict";

const formParams = {
    "formParamsWidth": picInsert.picInsertWidth,
    "formParamsLength": picInsert.picInsertLength,
    // "formParamDepth": 0,
    "formMaterial": 0,
    "formParamDepth": 0,
};

const picInsert = {
    "picInsertLength": 0,
    "picInsertWidth": 0,
};

const frame = {
    "frameExternalLength": 0,
    "frameExternalWidth": 0,
    "frameExternalWidth": 0,
};

const frameBaguette = [
    {
        "manufacturer": "nelson",
        "color": "silver",
        "price": {
            "value": 100,
            "currency": "rub",
            "unit": "m",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "frameBaguetteExternalCommonLength": 0, //общий погонаж багета по большей стороне
        "frameBaguetteFacialWidth": 25, //ширина лицевой части багета
        "frameBaguetteProfileWidth": 9, //толщина профиля багета
        "frameBaguetteProfileHeight": 12 //высота профиля багета
    },
    {
        "manufacturer": "nelson",
        "color": "black",
        "price": {
            "value": 200,
            "currency": "rub",
            "unit": "m",
            "amountUnit": 1,
            "physicalQuantity": "distance",
        },
        "frameBaguetteExternalCommonLength": 0, //общий погонаж багета по большей стороне
        "frameBaguetteFacialWidth": 25, //ширина лицевой части багета
        "frameBaguetteProfileWidth": 9, //толщина профиля багета
        "frameBaguetteProfileHeight": 12 //высота профиля багета
    },
];

const frameBack = [
    {
        "color": "silver",
        "price": 100,
        "unit": "m",
        "amountUnit": 1,
        "conditions"
        "frameBaguetteExternalLength": 0,
        "frameBaguetteExternalWidth": 0,

    }
];

const cart;
amountFrameBaguetteInCart