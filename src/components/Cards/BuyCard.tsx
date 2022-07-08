import React, {FC} from 'react';
import Button from "components/UI/Button/Button";
import Image, {StaticImageData} from "next/image";
import cl from './styles/BuyCard.module.scss'

interface BuyCardProps {
    title: string,
    text: string,
    price: string,
    xprice?: string,
    percent?: string,
    image: StaticImageData
}

const BuyCard: FC<BuyCardProps> = ({
    title, text, price, xprice,percent, image
                     }) => {
    return (
        <div className={cl.Root}>
            <div className={cl.Img}>
                <span>{percent}</span>
                <Image
                    src={image}
                />
            </div>
            <div className={cl.Body}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div>
                    <div>
                        <span>{price}</span>
                        {
                            xprice ? <strike>{xprice}</strike> : null
                        }
                    </div>
                    <Button type='btn-primary'>Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;