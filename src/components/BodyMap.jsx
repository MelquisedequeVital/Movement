import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const createSvgHandlers = (svgElement, textSvg, router) => {
    const clickHandler = () => {
        router.push(`/workout-list?bodyPart=${svgElement.id}`);
    };

    const mouseOverHandler = () => {
        svgElement.style.fill = "green";
        svgElement.style.transition = "transform 0.3s ease";
        svgElement.style.transform = "translate(4px, -4px)";
        svgElement.style.zIndex = "1";
        if (textSvg) {
            textSvg.textContent = svgElement.id;
        }
    };

    const mouseOutHandler = () => {
        svgElement.style.fill = "";
        svgElement.style.transition = "transform 0.3s ease";
        svgElement.style.transform = "translate(0px, 0px)";
        if (textSvg) {
            textSvg.textContent = "";
        }
    };

    return { clickHandler, mouseOverHandler, mouseOutHandler };
};

const applyInteractivity = (currentObject, router, listenersAttached) => {
    const svgDoc = currentObject?.contentDocument;
    if (!svgDoc) return;

    const svgElements = svgDoc.querySelectorAll(".hover");
    const textSvg = svgDoc.getElementById("muscle-name");

    svgElements.forEach((svgElement) => {
        svgElement.style.cursor = "pointer";

        const { clickHandler, mouseOverHandler, mouseOutHandler } = createSvgHandlers(svgElement, textSvg, router);

        svgElement.addEventListener("click", clickHandler);
        svgElement.addEventListener("mouseover", mouseOverHandler);
        svgElement.addEventListener("mouseout", mouseOutHandler);

        listenersAttached.push({
            element: svgElement,
            click: clickHandler,
            mouseover: mouseOverHandler,
            mouseout: mouseOutHandler
        });
    });
};

const removeInteractivity = (listenersAttached) => {
    listenersAttached.forEach((item) => {
        if (item.element) {
            item.element.removeEventListener("click", item.click);
            item.element.removeEventListener("mouseover", item.mouseover);
            item.element.removeEventListener("mouseout", item.mouseout);
        }
    });
};

export default function BodyMap({ id, src }) {
    const objectRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const currentObject = objectRef.current; 
        let listenersAttached = [];

        const handleLoad = () => {
            removeInteractivity(listenersAttached);
            listenersAttached = [];
            applyInteractivity(currentObject, router, listenersAttached);
        };

        if (currentObject) {
            currentObject.addEventListener("load", handleLoad);
            
            if (currentObject.contentDocument && currentObject.contentDocument.readyState === "complete") {
                handleLoad();
            }
        }

        return () => {
            if (currentObject) {
                currentObject.removeEventListener("load", handleLoad);
            }
            removeInteractivity(listenersAttached);
        };
    }, [router, src]);
    
    return (
        <object
            ref={objectRef}
            className="w-full md:w-1/2 h-[80vh] svg"
            id={id}
            data={src}
            type="image/svg+xml"
        />
    );
}