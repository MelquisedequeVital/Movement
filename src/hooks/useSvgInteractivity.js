import { useEffect, useRef } from "react";

export function useSvgInteractivity(src, router, applyInteractivity, removeInteractivity) {
    const objectRef = useRef(null);

    useEffect(() => {
        const currentObject = objectRef.current;
        const listenersAttached = [];

        const handleLoad = () => {
            applyInteractivity(currentObject, router, listenersAttached);
        };

        if (currentObject) {
            if (currentObject.contentDocument && currentObject.contentDocument.readyState === "complete") {
                handleLoad();
            } else {
                currentObject.addEventListener("load", handleLoad);
            }
        }

        return () => {
            if (currentObject) {
                currentObject.removeEventListener("load", handleLoad);
            }
            removeInteractivity(currentObject, listenersAttached);
        };
    }, [src, router, applyInteractivity, removeInteractivity]);

    return objectRef;
}