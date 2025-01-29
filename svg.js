function addInteractivity(svgObject){
    svgObject.addEventListener('load', () =>{
        const svgDoc = svgObject.contentDocument;
        const svgElements = svgDoc.getElementsByClassName("hover")
        const textSvg = svgDoc.getElementById("muscle-name")

        
        Array.from(svgElements).forEach((svgElement) => {

            //add redirection
            svgElement.addEventListener('click' ,() => {
                window.location.href = `#${svgElement.id}`
            } )

            //add hoverand muscle name
            svgElement.addEventListener('mouseover', () => {
                svgElement.style.fill = "green"
                svgElement.style.transition = "transform 0.3s ease"
                svgElement.style.transform = "translate(4px, -4px)"
                svgElement.style.zIndex = "1"
                textSvg.textContent = `${svgElement.id}`
            });
    
            svgElement.addEventListener('mouseout', () => {
                svgElement.style.fill = '';
                svgElement.style.transition = "transform 0.3s ease"
                svgElement.style.transform = "translate(0px, 0px)"
                textSvg.textContent = ``
            })
        })
    })
}







const front = document.getElementById("svg-front")

const back = document.getElementById("svg-back")

addInteractivity(front)
addInteractivity(back)







    
