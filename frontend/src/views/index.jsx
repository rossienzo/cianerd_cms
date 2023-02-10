import React, {Component} from "react";
import Header from "../common/layout/Header";
import Main from "../common/layout/Main";
import Cards from "../common/card/Cards";
import GeekCard from "../common/card/GeekCard";

import News from "../common/news/News";
import Navigation from "../common/navigation/Navigation";
import Footer from "../common/layout/Footer";
import axios from "axios";

class Index extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            dataCarousel: [],
            dataCards: []
        }
    }

    async componentDidMount() 
    {
        this.setState({ ...this.state,
            dataCarousel: await this.getData(process.env.REACT_APP_CAROUSEL_URL , process.env.REACT_APP_CAROUSEL_TOKEN), 
            dataCards: await this.getData(process.env.REACT_APP_CARDS_ITENS_URL, process.env.REACT_APP_CARDS_ITENS_TOKEN)})
    }

    async getData(url, token)
    {
        return await axios.get(url, {
            headers: { Authorization: `Bearer ${ token }` }
        }).then(response => {
            return response.data.data;
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <Navigation />
                <Header dataCarousel={ this.state.dataCarousel }/>
                <Main>  
                    <h2>NOSSOS GEEKS</h2>
                    <Cards>
                       {this.state.dataCards.map(item => (
                            <GeekCard 
                                idKey={item.id}
                                imgSrc={process.env.REACT_APP_URL_LOCAL + item.attributes.product_image.data[0].attributes.url}
                                category={item.attributes.category}
                                title={item.attributes.title}    
                                mark={item.attributes.mark}    
                                duration={item.attributes.duration}    
                                group={item.attributes.group}    
                                language={item.attributes.language}    
                                gender={item.attributes.gender}    
                                material={item.attributes.material}    
                                manufacturer={item.attributes.manufacturer}    
                                model={item.attributes.model}    
                                weight={item.attributes.weight}    
                                age={item.attributes.age}    
                                dimension={item.attributes.dimension}    
                                description={item.attributes.description}    
                            />
                       ))}
                    </Cards>

                    <a className="see-more text-center d-flex justify-content-center" href="#">Ver Mais</a>
                </Main>
                
                <News text="Receba as novidades por E-mail" />
                
                <Footer />
            </React.Fragment>
        );
    }
} 

export default Index;