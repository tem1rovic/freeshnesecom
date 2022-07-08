import React, {FC} from 'react';
import Container from "components/Container/Container";
import BuyCard from "components/Cards/BuyCard";
import Button from "components/UI/Button/Button";
import productImg from "static/images/product.png";
import cl from './styles/Headline.module.scss'

const Headline: FC = () => {
    return (
        <Container id='headline' padding='64px'>
            <div className={cl.Head}>
                <h2>Section Headline</h2>
                <Button arrow={true} type='btn-more'>More</Button>
            </div>
            <div className={cl.Root}>
                <BuyCard
                    title='Product Title'
                    text='Space for a small product description '
                    price='1.48 USD'
                    image={productImg}
                />
                <BuyCard
                    title='Product Title'
                    text='Space for a small product description '
                    price='1.48 USD'
                    image={productImg}
                />
                <BuyCard
                    title='Product Title'
                    text='Space for a small product description '
                    price='1.48 USD'
                    image={productImg}
                />
                <BuyCard
                    title='Product Title'
                    text='Space for a small product description '
                    price='1.48 USD'
                    image={productImg}
                />
            </div>
        </Container>
    );
};

export default Headline;