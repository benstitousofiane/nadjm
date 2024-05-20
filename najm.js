surah = document.getElementById("surah")

surah_number = 2



function maxPage(data){
    result = 1
    for (let i = 0; i < data.verses.length - 1; i++){
        if (data.verses[i].v2_page > result){
            result = data.verses[i].v2_page 
        }
    }
    return result
}

function genPages(data){
    maximumPage = maxPage(data)
    console.log(maxPage(data))
    for (let i = 0; i < data.verses.length - 1; i++){
        if (page_counter < maximumPage + 1){
            let page = document.createElement("p")
            page.className = "page"
            page.style.fontFamily = `page${page_counter}`
            console.log(data.verses.length)
            for (let j = 0; j < data.verses.length; j++){
                if (data.verses[j].v2_page == page_counter){
                    page.innerText += data.verses[j].code_v2
                    page.innerText += " "
                }
            }
        
            let pageNumber = document.createElement("p")
            pageNumber.className = "pageNumber"
            pageNumber.innerText = `${page_counter}`
        
            let separation = document.createElement("hr")
        
            surah.append(page)
            surah.append(pageNumber)
            surah.append(separation)
            page_counter++;
        }   
    }
}


function genSurah(surah_number){
    fetch(`https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${surah_number}`)
        .then(response => response.json())
        .then(data => {
            page_counter = data.verses[0].v2_page
            genPages(data)
        })
        .catch(error => console.log(error))
}

genSurah(18)