const fs = require("fs");
csv = fs.readFileSync("suicide-rate.csv")
var array = csv.toString().split("\n");
let headers = array[0].split(",")
let result=[]

const isCountry = (result, code) => {
    let i = false;
    result.forEach(element => {
        if (element.code == code) {
            i = true;
            return i
        }
    });
    return i
}
const getObjet = (result, code) => {
    let i = {}
    result.forEach(element => {
        if (element.code == code) {
            i = element;
            return i
        }
    });
    return i
}
for (let i = 1; i < array.length; i++) {

    let firstLine = array[i].split(",")
    if (!isCountry(result, firstLine[1])) {
        let obj = {}
        obj["code"] = firstLine[1]
        obj["countryname"] = firstLine[0]
        let objyears = {}
        objyears[firstLine[2]] = firstLine[3]
        obj["years"] = objyears
        result.push(obj)
    }
    else {
        let obj = getObjet(result,firstLine[1]) 
        let objyears = obj.years// a partir de obj 
        objyears[firstLine[2]] = firstLine[3]
        obj["years"] = objyears
       
    }
}
let json = JSON.stringify(result);
fs.writeFileSync('output.json', json);
