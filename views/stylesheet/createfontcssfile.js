const fs = require("fs")

async function fontBuild(file, index){
    await fs.write(file, `@font-face {\nfont-family: "page${index}";\nsrc: url("fahadcomplexv2imagesfont/p${index}.woff2");\n}\n\n`, () => {})
}

fs.open('fahadcomplexev2.css', 'w', (err, file) => {

    for (let i = 1; i < 605; i++){
        fontBuild(file,i)
    }
    
    fs.close(file)
})
