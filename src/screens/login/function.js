export function modLoginData(data) {
    let respData = {
        id: "",
        name: "",
        email: "",
        phone: "",
        type: ""
    }
    if (Object.keys(data).length > 0) {
        if (data.id == undefined || data.id == null) {
            respData.id = ""
        } else {
            respData.id = data.id
        }
        if (data.name == undefined || data.name == null) {
            respData.name = ""
        } else {
            respData.name = data.name
        }
        if (data.email == undefined || data.email == null) {
            respData.email = ""
        } else {
            respData.email = data.email
        }
        if (data.phone == undefined || data.phone == null) {
            respData.phone = ""
        } else {
            respData.phone = data.phone
        }
        if (data.type == undefined || data.type == null) {
            respData.type = ""
        } else {
            respData.type = data.type
        }
    }

    return respData

}