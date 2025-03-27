function renderFrontFace(x, y, width, height, index)
{
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderFontFaceImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "FontFace",
        itemIndex: index,
    });

    return img;
}

function renderHaftFaceLeft(x, y, width, height, index) {
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderHafFaceLeftImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "HafFaceLeft",
        itemIndex: index,
    });

    return img;
}

function renderEarLeft(x, y, width, height, index) {
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderEarLeftImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "EarLeft",
        itemIndex: index,
    });

    return img;
}

function renderHaftFaceRight(x, y, width, height, index) {
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderHafFaceRightImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "HaftFaceRight",
        itemIndex: index,
    });

    return img;
}

function renderEarRight(x, y, width, height, index) {
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderEarRightImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "EarRight",
        itemIndex: index,
    });

    return img;
}

function renderNose(x, y, width, height, index) {
    var img = canvas.display.image({
        x: x,
        y: y,
        image: renderNoseImg(),
        width: width,
        height: height,
        itemType: 'background',
        objectType: "Nose",
        itemIndex: index,
    });

    return img;
}

function renderPanelBackground(x, y, width, height)
{
    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "Background",
    });

    return regC;
}

function renderPanelThumb(x, y, width, height, titleHeigth, contentHeight) {

    var itemHeight = height / 6;

    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height + titleHeigth,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "ThumbButton",
    });

    // title
    var regItem = canvas.display.rectangle({
        x: 0,
        y: 0,
        width: width,
        height: titleHeigth,
        stroke: "2px #FFF",
        fill: "#172539",
        itemType: 'title',
        objectType: "",
    });

    var text0 = canvas.display.text({
        x: 4,
        y: titleHeigth/2,
        font: "bold 14px sans-serif",
        text: "Cornice",
        fill: "#FFF",
        origin: { x: "left", y: "center" },
    });

    regItem.addChild(text0);

    regC.addChild(regItem);

    // Ear left btn
    var yPos = titleHeigth;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "EarLeft",
        itemIndex: 0
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderEarLeftThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // HafFaceLeft btn
    yPos += itemHeight;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 1,
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderHafFaceLeftThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // Face btn
    yPos += itemHeight ;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 2,
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderFrontFaceThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // HafFaceRight btn
    yPos += itemHeight;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 3,
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderHafFaceRightThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // EarRight btn
    yPos += itemHeight;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 4,
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderEarRightThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // Nose btn
    yPos += itemHeight;
    var regItem = canvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 1.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 5,
    });

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = canvas.display.image({
        x: 0,
        y: 3,
        image: renderNoseThumb(),
        width: width,
        height: itemHeight-6,
    });

    regItem.addChild(img);

    var regItemBg = canvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    return regC;
}

function renderPanelListPoint(x, y, width, height) {
    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "ListPoints",
    });

    return regC;
}

function renderPanelListPointItem(x, y, width, height, index) {
    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'pgPointItem',
        objectType: "ListPoints",
        itemIndex: index
    });

    return regC;
}

function renderPointItem(x,y, s, r, color)
{
    if (r == null || r == '' || r == undefined)
    {
        r = 4;
    }

    if (color == null || color == '' || color == undefined) {
        color = "#F00";
    }

    var cir = canvas.display.ellipse({
        x: x,
        y: y,
        radius: r,
        stroke: "0px #000",
        fill: color,
        origin: { x: "center", y: "center" },
    });

    var text0 = canvas.display.text({
        x: 0,
        y: -7,
        font: "normal 10px sans-serif",
        text: s,
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    cir.addChild(text0);

    return cir;
}

function renderPanelGrid(x, y, width, height) {
    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "Grid",
    });

    return regC;
}

function renderPanelDoHinh(x, y, width, height) {
    var regC = canvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "ListPoints",
    });

    return regC;
}

function renderAccessControl(x,y)
{
    var cir = canvas.display.ellipse({
        x: x,
        y: y,
        radius: 8,
        stroke: "1px #000",
        fill: "linear-gradient(320deg, rgba(201,201,201, 1.0) , rgba(50,50,50, 1.0))",
        origin: { x: "center", y: "center" },
    });

    var cir1 = canvas.display.rectangleArc({
        x: 0,
        y: 0,
        radius: 4,
        width: 8,
        height: 40,
        stroke: "1px #000",
        fill: "linear-gradient(0deg, rgba(201,201,201, 1.0) , rgba(50,50,50, 1.0))",
        origin: { x: "center", y: "top" },
    });

    cir.addChild(cir1);

    var cir1 = canvas.display.rectangleArc({
        x: 0,
        y: 34,
        radius: 8,
        width: 16,
        height: 100,
        stroke: "1px #000",
        fill: "linear-gradient(0deg, rgba(201,201,201, 1.0) , rgba(50,50,50, 1.0))",
        origin: { x: "center", y: "top" },
    });

    cir.addChild(cir1);

    var cir1 = canvas.display.ellipse({
        x: 0,
        y: 130,
        radius: 9,
        stroke: "1px #000",
        fill: "linear-gradient(320deg, rgba(201,201,201, 1.0) , rgba(50,50,50, 1.0))",
        origin: { x: "center", y: "center" },
    });

    cir.addChild(cir1);

    return cir;
}



