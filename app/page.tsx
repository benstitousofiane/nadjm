import { ReactNode } from "react";
import suraInfos from "../public/qurandatas/suraInfos.json"

import SuraButton from "./SuraButton";


export default function Home() {
  const suraIndexs =  []
  for (let i = 0; i < 114; i++){
    suraIndexs.push(i)
  }
  
  //sources : https://islamqa.info/fr/answers/5126/les-endroits-de-prosternation-dans-le-saint-coran%C2%A0
  const sujudTilawas = [7, 13, 16, 17, 19, 22, 25, 27, 32, 38, 41, 53, 84, 96]


  const suraButtons : ReactNode[] = []

  suraIndexs.forEach((suraIndex, index) => {
    suraButtons.push(<SuraButton key={index} 
      SuraName={suraInfos[suraIndex][0]} 
      SuraNo={suraIndex + 1} 
      SuraLen={suraInfos[suraIndex][1]}
      SujudTilawa={sujudTilawas.includes(suraIndex + 1) ? true : false}
      Basmala={suraIndex == 9 - 1 ? false : true}
      />)
  })
  
  return (
    <>
      <div className="flex flex-row-reverse flex-wrap gap-2 justify-center">
        {suraButtons}
      </div>
    </>
  );
}
