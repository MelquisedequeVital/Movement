import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function BodyMap({ id, src }) {
    const objectRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const currentObject = objectRef.current;

        const addInteractivity = () => {
            const svgDoc = currentObject?.contentDocument;
            if (!svgDoc) return;

            const svgElements = svgDoc.querySelectorAll(".hover");
            const textSvg = svgDoc.getElementById("muscle-name");

            svgElements.forEach((svgElement) => {
                svgElement.style.cursor = "pointer";

                svgElement.addEventListener("click", () => {
                    router.push(`/workout-list?bodyPart=${svgElement.id}`);
                });

                svgElement.addEventListener("mouseover", () => {
                    svgElement.style.fill = "green";
                    svgElement.style.transition = "transform 0.3s ease";
                    svgElement.style.transform = "translate(4px, -4px)";
                    svgElement.style.zIndex = "1";
                    if (textSvg) {
                        textSvg.textContent = `${svgElement.id}`;
                    }
                });

                svgElement.addEventListener("mouseout", () => {
                    svgElement.style.fill = "";
                    svgElement.style.transition = "transform 0.3s ease";
                    svgElement.style.transform = "translate(0px, 0px)";
                    if (textSvg) {
                        textSvg.textContent = "";
                    }
                });
            });
        };

        if (currentObject && currentObject.contentDocument) {
            addInteractivity();
        } else {
            currentObject?.addEventListener("load", addInteractivity);
        }

        return () => {
            currentObject?.removeEventListener("load", addInteractivity);
        };
    }, [router]);

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