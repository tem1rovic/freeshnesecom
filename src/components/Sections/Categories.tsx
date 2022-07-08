import React, {FC} from 'react';
import Container from 'components/Container/Container';
import List from "components/UI/List/List";
import A from "components/A/A";
import Button from "components/UI/Button/Button";
import BuyCard from "components/Cards/BuyCard";
import productImg from "static/images/product.png";
import cl from './styles/Categories.module.scss'

const Categories: FC = () => {
    return (
        <Container id='categories' padding='64px' bg='white'>
            <div className={cl.Root}>
                <List title='Category menu'>
                    <A href='products/:id'>Bakery</A>
                    <A href='products/:id'>Fruit and vegetables</A>
                    <A href='products/:id'>Meat and fish</A>
                    <A href='products/:id'>Drinks</A>
                    <A href='products/:id'>Kitchen</A>
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

export default Categories;