function addHover(svgObject){
    svgObject.addEventListener('load', () =>{
        const svgDoc = svgObject.contentDocument;
        const svgElements = svgDoc.getElementsByClassName("hover")
        
        Array.from(svgElements).forEach((svgElement) => {

            svgElement.addEventListener('click' ,() => {
                alert(svgElement)
            } )

            svgElement.addEventListener('mouseover', () => {
                svgElement.style.fill = "green"
                svgElement.style.transition = "transform 0.3s ease"
                svgElement.style.transform = "translate(4px, -4px)"
            });
    
            svgElement.addEventListener('mouseout', () => {
                svgElement.style.fill = '';
                svgElement.style.transition = "transform 0.3s ease"
                svgElement.style.transform = "translate(0px, 0px)"
            })
        })
    })
}

const front = document.getElementById("svg-front")

const back = document.getElementById("svg-back")

addHover(front)

addHover(back)



    
