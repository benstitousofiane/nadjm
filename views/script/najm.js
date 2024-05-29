surah = document.getElementById("surah")
surahs = document.getElementById("surahs")
loading = document.getElementById("loading")
star = document.getElementById("star")

function loadingAnimation(){
    star.style.animation = "rotation 4s linear infinite"
    loading.style.display = "block"
    
    setTimeout(() => {
        star.style.animation = "none"
        loading.style.display = "none"
    }, 3000)
}


// for surah
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
    page_counter = data.verses[0].v2_page
    maximumPage = maxPage(data)
    // console.log(maxPage(data))
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
        
        // decoration

            let pageSection = document.createElement("section")
            pageSection.id= `${page_counter}`
            
            let pageNumber = document.createElement("p")
            pageNumber.className = "pageNumber"
            pageNumber.innerText = `${page_counter}`
            
        
            let separation = document.createElement("hr")
            
            
            surah.append(pageSection)
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
            genPages(data)
        })
        .catch(error => console.log(error))
}

// genSurah(2) // display the surah number 2

// for surahs

function genSurahs(){
    fetch(`https://api.quran.com/api/v4/chapters`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 114; i++){
                let chapter = document.createElement("a")
                chapter.className = "chapter"
                chapter.href = `./${data.chapters[i].id}`
                chapter.id = `${data.chapters[i].id}`
                chapter.innerText = `${data.chapters[i].id}/${data.chapters[i].name_simple}`

                surahs.appendChild(chapter)
            }
        })
        .catch(error => console.log(error))
}