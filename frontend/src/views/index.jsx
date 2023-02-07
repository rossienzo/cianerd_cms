import React, {Component} from "react";
import Header from "../common/layout/Header";
import Main from "../common/layout/Main";
import Cards from "../common/card/Cards";
import GeekCard from "../common/card/GeekCard";

import News from "../common/news/News";
import Navigation from "../common/navigation/Navigation";
import Footer from "../common/layout/Footer";
import axios from "axios";

const localURL = "http://localhost:1337";
const token = "4e5c563267323d4ff974c5eb8e90a17674a4c8c3e21b7a564eff26f12e86a33c280a0c2e712f7c7e069896fcad5b854da635ac5b262f96357d4bb6e36131f6045d6ca2577e9e785fdd6ca22d227fbe5fbcad86e72658032beaa15785a7bc465517ae2aedd38cd18062e8bc5dda2a31eef7d14e64747b6e21e9a3d62b55028e28";

class Index extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            data: []
        }
    }

    async componentDidMount() 
    {
        this.setState({ ...this.state, data: await this.getData()})
    }

    async getData()
    {
        return await axios.get("http://localhost:1337/api/products?populate=product_image",{
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            return response.data.data;
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <Navigation />
                <Header />
                <Main>  
                    <h2>NOSSOS GEEKS</h2>
                    <Cards>
                       {this.state.data.map(item => (
                            <GeekCard 
                                imgSrc={localURL + item.attributes.product_image.data[0].attributes.url}
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