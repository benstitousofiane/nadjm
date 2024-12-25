import { ReactNode } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import quran_hafs from "../../public/qurandatas/hafsData_v2-0.json"
import basmala from "../../public/assets/images/basmala.png"


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

export default async function Sura({params} : {params : {suraid : number}}){
    
    const { suraid } = await params

    if (suraid != Math.floor(suraid) || Math.floor(suraid) < 1 || Math.floor(suraid) > 114){
        notFound()
    }
    
    const basmalaElement : ReactNode = suraid == 9 ? <></> : <Image src={basmala} width={1920} alt="basmala" className="w-96"/>
    
    let sura : ReactNode[] = []
    
    let page : ReactNode[] = []
    let page_no : number = 1

    let can_push_hr : boolean = false
    
    quran_hafs.forEach((verse, index) => {
        
        if (page_no != verse.page){
            sura.push( <div key={`page_${page_no}`}  className="flex flex-row-reverse flex-wrap justify-center">{page}</div> )
            
            if (verse.sura_no == suraid && can_push_hr){
                sura.push(<p key={`separation_text_${page_no}`} className="text-center font-serif mt-5">{en_no2ar_no(page_no)}</p>)
                sura.push( <hr key={`separation_${page_no}`} className="mb-5"/> )
            }
            page = []          
            page_no = verse.page
        }
        
        if (verse.page == page_no && verse.sura_no == suraid){
            let word_no : number = 1
            for (const word of verse.aya_text.split(" ")) {
                // highlight some sylboles
                if (word == "۩" || word == "۞"){
                    page.push( <p key={`verse_${verse.aya_no}_word_${word_no}`}  className="text-3xl text-yellow-200 glow leading-[3rem] ml-1 mr-1">{word}</p> )

                }
                else {
                    page.push( <p key={`verse_${verse.aya_no}_word_${word_no}`}  className="text-3xl leading-[3rem] ml-1 mr-1">{word}</p> )
                }
                word_no++
            }
            can_push_hr = true
        }
    })

    // empty the rest if there is a page not add by the changement of the page
    if (page.length > 0){
        sura.push( <div key={`page_${page_no}`}  className="flex flex-row-reverse flex-wrap justify-center">{page}</div> )
        page = []
    }

    sura.push(<p key={`separation_text_${page_no}`} className="text-center font-serif mt-5">{en_no2ar_no(page_no)}</p>)
    sura.push( <hr key={`separation_${page_no}`} className="mb-5"/> )


    return (
        <div className="flex flex-col justify-center items-center mt-5 mb-52">
            {basmalaElement}          
            <div className="text-white hafs max-w-96">{sura}</div>
        </div>
    ) 
}