export function changeFormatData(data) {
    let imgData = { "uri": null, "type": "image/jpeg", "name": "", "height": 0, "width": 0, "orientation": "", isMirrored: null };
    if (data.path) {
        imgData.uri = "file://" + data.path;
    }
    if (data.path) {
        let tempArrPath = data.path.split("/");
        if (tempArrPath.length > 0) {
            imgData.name = tempArrPath[tempArrPath.length - 1];
        }
    }
    if (data.height) {
        imgData.height = data.height;
    }
    if (data.width) {
        imgData.width = data.width;
    }
    if (data.orientation) {
        imgData.orientation = data.orientation;
    }
    if (data.isMirrored) {
        imgData.isMirrored = data.isMirrored;
    }
    return imgData;
}