function renderFrontFaceAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderHaftFaceLeftAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderEarLeftAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderHaftFaceRightAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderEarRightAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderNoseAdmin(x, y, width, height, index) {
    var img = SceneCanvas.display.image({
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

function renderPanelBackgroundAdmin(x, y, width, height) {
    var regC = SceneCanvas.display.rectangle({
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

function renderPanelThumbAdmin(x, y, width, height, titleHeigth, contentHeight) {

    var itemHeight = height / 6;

    var regC = SceneCanvas.display.rectangle({
        x: x,
        y: y,
        width: width,
        height: height + titleHeigth + 6 * contentHeight,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'panel',
        objectType: "ThumbButton",
    });

    // title
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: 0,
        width: width,
        height: titleHeigth,
        stroke: "2px #FFF",
        fill: "#172539",
        itemType: 'title',
        objectType: "",
    });

    var text0 = SceneCanvas.display.text({
        x: 4,
        y: titleHeigth / 2,
        font: "bold 14px sans-serif",
        text: "Cornice",
        fill: "#FFF",
        origin: { x: "left", y: "center" },
    });

    regItem.addChild(text0);

    regC.addChild(regItem);

    // Ear left btn
    var yPos = titleHeigth;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "EarLeft",
        itemIndex: 0
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderEarLeftThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Dietro orecchio sinistro",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // HafFaceLeft btn
    yPos += itemHeight + contentHeight;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 1,
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderHafFaceLeftThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Faccia laterale sinistra",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // Face btn
    yPos += itemHeight + contentHeight;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 2,
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderFrontFaceThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Faccia",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // HafFaceRight btn
    yPos += itemHeight + contentHeight;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 3,
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderHafFaceRightThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Faccia laterale destra",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // EarRight btn
    yPos += itemHeight + contentHeight;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 4,
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderEarRightThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Dietro orecchio destro",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    // Nose btn
    yPos += itemHeight + contentHeight;
    var regItem = SceneCanvas.display.rectangle({
        x: 0,
        y: yPos,
        width: width,
        height: itemHeight + contentHeight,
        stroke: "2px #FFF",
        fill: "rgba(0,0,0, 0.0)",
        itemType: 'button',
        objectType: "HafFaceLeft",
        itemIndex: 5,
    });

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    var img = SceneCanvas.display.image({
        x: 0,
        y: 0,
        image: renderNoseThumb(),
        width: width,
        height: itemHeight,
    });

    regItem.addChild(img);

    var text0 = SceneCanvas.display.text({
        x: width / 2,
        y: itemHeight + contentHeight - 10,
        font: "normal 10px sans-serif",
        text: "Sotto il naso",
        fill: "#FFF",
        origin: { x: "center", y: "center" },
    });

    regItem.addChild(text0);

    var regItemBg = SceneCanvas.display.rectangle({
        x: 2,
        y: 2,
        width: width - 4,
        height: itemHeight + contentHeight - 4,
        stroke: "0px #000000",
        fill: "rgba(0,0,0, 0.0)",
    });

    regItem.addChild(regItemBg);

    regC.addChild(regItem);

    return regC;
}

function renderPanelListPointAdmin(x, y, width, height) {
    var regC = SceneCanvas.display.rectangle({
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

function renderPanelListPointItemAdmin(x, y, width, height, index) {
    var regC = SceneCanvas.display.rectangle({
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

function renderPointItemAdmin(x, y, s) {
    var cir = SceneCanvas.display.ellipse({
        x: x,
        y: y,
        radius: 4,
        stroke: "0px #000",
        fill: "#F00",
        origin: { x: "center", y: "center" },
    });

    var text0 = SceneCanvas.display.text({
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

function renderPanelGridAdmin(x, y, width, height) {
    var regC = SceneCanvas.display.rectangle({
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

function renderPanelDoHinhAdmin(x, y, width, height) {
    var regC = SceneCanvas.display.rectangle({
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

function renderAccessControlAdmin(x, y) {
    var cir = SceneCanvas.display.ellipse({
        x: x,
        y: y,
        radius: 8,
        stroke: "1px #000",
        fill: "linear-gradient(320deg, rgba(201,201,201, 1.0) , rgba(50,50,50, 1.0))",
        origin: { x: "center", y: "center" },
    });

    var cir1 = SceneCanvas.display.rectangleArc({
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

    var cir1 = SceneCanvas.display.rectangleArc({
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

    var cir1 = SceneCanvas.display.ellipse({
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



