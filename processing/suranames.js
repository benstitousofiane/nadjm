const quran_hafs = require("../public/qurandatas/hafsData_v2-0.json")

let suraNames = []

for (let i = 0; i < quran_hafs.length; i++){
    if ( !(suraNames.includes(quran_hafs[i].sura_name_ar)) ){
           suraNames.push(quran_hafs[i].sura_name_ar)
    }
}

suraLens = []
ayaCounter = 0

for (const suraName of suraNames){
    for (let i = 0; i < quran_hafs.length; i++){
        if (quran_hafs[i].sura_name_ar == suraName){
            ayaCounter += 1
        }
    }
    suraLens.push(ayaCounter)
    ayaCounter = 0
}


console.log("[")

for (let i = 0; i < suraNames.length; i++){
    process.stdout.write("[")
    process.stdout.write("\"")
    process.stdout.write(suraNames[i])
    process.stdout.write("\",")
    i == 113 ? console.log(`${suraLens[i]}]`) : console.log(`${suraLens[i]}],`)
}


// for generate suraInfos.json


console.log("]")
console.log("")
console.log(suraNames.length)
console.log(suraLens.length)

// for displaying normaly arab text
// console.log(quran_hafs[0].sura_name_ar.split("").reverse().join(""))