"use client"
import { redirect } from "next/navigation"

interface Sura {
    SuraName : string | number
    SuraNo : number
    SuraLen : number | string
    Basmala : boolean
    SujudTilawa : boolean
}

const en_no2ar_no : (en_no : number) => string = (en_no : number) => {
    let ar_no : string = ""
    for (const digit of en_no.toString()){
        // ٠١٢٣٤٥٦٧٨٩
        if (digit == '0') ar_no += '٠'
        if (digit == '1') ar_no += '١'
        if (digit == '2') ar_no += '٢'
        if (digit == '3') ar_no += '٣'
        if (digit == '4') ar_no += '٤'
        if (digit == '5') ar_no += '٥'
        if (digit == '6') ar_no += '٦'
        if (digit == '7') ar_no += '٧'
        if (digit == '8') ar_no += '٨'
        if (digit == '9') ar_no += '٩'
    }
    return ar_no
}

export default function SuraButton(prop : Sura){
    return(
        <div className="border-2 rounded-2xl border-white text-white text-right w-52 text-2xl">
            <div className="flex flex-row-reverse gap-1 p-2">
                <button className="border border-white p-2 px-2 rounded-full text-xs">آيات : {prop.SuraLen}</button>
                {prop.SujudTilawa ? <button className="border border-white p-2 px-2 rounded-full text-xs">۩</button> : <></>}
                {!prop.Basmala ? <button className="border border-white p-2 px-2 rounded-full text-xs">ب x</button> : <></>}
            </div>

            <hr className="border-[1.75px]  "/>

            <div className="flex gap-2 items-center justify-end p-4" onClick={() => redirect(`/${prop.SuraNo}`)}>
                <p className="hafs text-3xl">{prop.SuraName}</p> <p className="border rounded-full px-5 border-white inline p-3 font-serif">{en_no2ar_no(prop.SuraNo)}</p>
            </div>
        </div>
    )
}