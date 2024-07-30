import { getData, singleRemove, storeData } from "../async-storage";


export const allStorageVariable = [
    "brandingListData",
    "GrievanceListData",
    "stockListData",
    "dashBoardData"

]


export async function storeBrandingListData(data) {
    if (data) {
        await storeData("brandingListData", data);
    }
}

export async function getBrandingListData() {
    let data = await getData("brandingListData");
    return data;
}

export async function removeBrandingListData() {
    await singleRemove("brandingListData");
}


export async function storeGrievanceListData(data) {
    if (data) {
        await storeData("GrievanceListData", data);
    }
}

export async function getGrievanceListData() {
    let data = await getData("GrievanceListData");
    return data;
}

export async function removeGrievanceListData() {
    await singleRemove("GrievanceListData");
}


export async function storeStockListData(data) {
    if (data) {
        await storeData("stockListData", data);
    }
}

export async function getStockListData() {
    let data = await getData("stockListData");
    return data;
}

export async function removeStockListData() {
    await singleRemove("stockListData");
}



export async function storeDashBoardData(data) {
    if (data) {
        await storeData("dashBoardData", data);
    }
}

export async function getDashBoardData() {
    let data = await getData("dashBoardData");
    return data;
}

export async function removeDashBoardData() {
    await singleRemove("dashBoardData");
}



