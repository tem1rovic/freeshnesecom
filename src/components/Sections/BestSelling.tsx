import React, {FC} from 'react';
import Container from "components/Container/Container";
import List from "components/UI/List/List";
import A from "components/A/A";
import Button from "components/UI/Button/Button";
import BuyCard from "components/Cards/BuyCard";
import productImg from 'static/images/product.png'
import cl from './styles/BestSelling.module.scss'

const BestSelling: FC = () => {
    return (
        <Container id='bestselling' padding='64px'>
            <div className={cl.Root}>
                <List title='Best selling products'>
                    <A href='/bestselling/:id'>Kitchen</A>
                    <A href='/bestselling/:id'>Meat and fish</A>
                    <A href='/bestselling/:id'>Special nutrition</A>
                    <A href='/bestselling/:id'>Pharmacy</A>
                    <A href='/bestselling/:id'>Baby</A>
                    <Button type='btn-secondary' arrow={true}>More categories</Button>
                </List>
                <div className={cl.Products}>
                    <BuyCard
                        title='Product Title'
                        text='Space for a small product description '
                        price='1.48 USD'
                        image={productImg}
                    />
                    <BuyCard
                        title='Product Title'
                        text='Space for a small product description '
                        price='1.12 USD'
                        xprice='48.56'
                        image={productImg}
                        percent='-36%'
                    />
                    <BuyCard
                        title='Product Title'
                        text='Space for a small product description '
                        price='0.28 USD'
                        xprice='48.56'
                        image={productImg}
                        percent='-36%'
                    />
                </div>
            </div>
        </Container>
    );
};

export default BestSelling;