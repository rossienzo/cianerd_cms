import React from "react";
import Banner from "../banner/Banner";
import BannerItem from "../banner/BannerItem";
import CiaCarousel from "../carousel/CiaCarousel";
import iconLocation from "../../res/icons/location.png";
import "./Header.css";


const Header = (props) => (
    <header className="header">
        <CiaCarousel dataCarousel={ props.dataCarousel }/>
        <div className="container">
            <Banner>
                <BannerItem 
                    category="boardgame"
                    src={iconLocation}
                    alt="location"
                    thinText="VOCÊ É NOSSO CONVIDADO" 
                    boldText="VISITE A NOSSA LOJA"/>

                <BannerItem 
                    src={iconLocation}
                    alt="location"
                    thinText="VOCÊ É NOSSO CONVIDADO" 
                    boldText="VISITE A NOSSA LOJA"/>

                <BannerItem 
                    src={iconLocation}
                    alt="location"
                    thinText="VOCÊ É NOSSO CONVIDADO" 
                    boldText="VISITE A NOSSA LOJA"/>    
            </Banner>
        </div>        
    </header>
    
);

export default Header;