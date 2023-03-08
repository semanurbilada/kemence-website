import Icons from "./Icons";
import { useState, useEffect } from "react";

export default function ContactItems() {
    const [ isVisible, setIsVisible ] = useState(true);

    useEffect(() => {
        const showItems = () => {
            const contactSection = document.getElementById("info");
            if ( window.scrollY + window.innerHeight >= contactSection.offsetTop ) {
                setIsVisible(false);
            } 
            else { 
                setIsVisible(true);
            }
        }
        window.addEventListener("scroll", showItems);

        return () => {
            window.removeEventListener("scroll", showItems);
        };
    }, [] )

    return isVisible ? (
        <div className="fixed md:bottom-10 bottom-5 md:right-10 right-5 flex md:flex-row flex-col items-center md:gap-6 gap-4 z-50">
            <a 
                className="fixed-button"
                href="tel:905313566230" 
                target='_blank' 
                rel='noopener noreferrer nofollow'
            >
                <Icons 
                    iconName="phone"
                    className="fixed-item">
                </Icons>
            </a>
            <a 
                className="fixed-button"
                href="https://api.whatsapp.com/send?phone=905313566230"
                target='_blank' 
                rel='noopener noreferrer nofollow'
            >
                <Icons 
                    iconName="whatsapp"
                    className="fixed-item">
                </Icons>
            </a>
        </div>
    ) : (
        <div></div>
    );
}