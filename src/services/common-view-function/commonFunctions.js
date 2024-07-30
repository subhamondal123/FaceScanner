export function modifyArrIntoTwoObjArrList(detailData) {
    let modData = [];
    let dividesBy = 2;
    if (detailData !== undefined && detailData.length > 0) {
        let divission = parseInt(detailData.length / dividesBy);
        let reminder = parseInt(detailData.length % dividesBy);
        for (let i = 0; i < divission; i++) {
            let subDivArr = [];
            for (let j = 0; j < dividesBy; j++) {
                subDivArr.push(detailData[i * dividesBy + j]);
            }
            modData.push(subDivArr)
        }
        if (reminder > 0) {
            let reminderArr = [];
            for (let i = 0; i < reminder; i++) {
                reminderArr.push(detailData[(divission * dividesBy) + i]);
            }
            modData.push(reminderArr)
        }
    }
    return modData;
}

export function textTruncate(stringValue,maxlength){
    if (stringValue.length > maxlength) {
        return stringValue.slice(0, maxlength) + "...";
      } else {
        return stringValue;
      }
}


export function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

export function sortArrayByNameAscending(array){
    const sortedArray = array.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return sortedArray;
}


export function getDesiredLocationFormat(data) {
    // Convert the data into the desired format
    const convertedData = [];

    for (const item of data) {
        const countryIndex = convertedData.findIndex((c) => c.id === item.countryId);

        if (countryIndex === -1) {
            const newCountry = {
                id: item.countryId,
                name: item.countryName,
                state: [
                    {
                        id: item.stateId,
                        name: item.stateName,
                        city: [
                            {
                                id: item.cityId,
                                name: item.cityName,
                                zone: [
                                    {
                                        id: item.zoneId,
                                        name: item.zoneName
                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            convertedData.push(newCountry);
        } else {
            const stateIndex = convertedData[countryIndex].state.findIndex((s) => s.id === item.stateId);

            if (stateIndex === -1) {
                const newState = {
                    id: item.stateId,
                    name: item.stateName,
                    city: [
                        {
                            id: item.cityId,
                            name: item.cityName,
                            zone: [
                                {
                                    id: item.zoneId,
                                    name: item.zoneName
                                }
                            ]
                        }
                    ]
                };

                convertedData[countryIndex].state.push(newState);
            } else {
                const cityIndex = convertedData[countryIndex].state[stateIndex].city.findIndex((c) => c.id === item.cityId);

                if (cityIndex === -1) {
                    const newCity = {
                        id: item.cityId,
                        name: item.cityName,
                        zone: [
                            {
                                id: item.zoneId,
                                name: item.zoneName
                            }
                        ]
                    };

                    convertedData[countryIndex].state[stateIndex].city.push(newCity);
                } else {
                    const newZone = {
                        id: item.zoneId,
                        name: item.zoneName
                    };

                    convertedData[countryIndex].state[stateIndex].city[cityIndex].zone.push(newZone);
                }
            }
        }
    }
    let outputData = JSON.stringify(convertedData, null, 2);
    return outputData

}