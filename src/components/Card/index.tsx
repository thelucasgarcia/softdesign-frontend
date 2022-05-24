import React from 'react';

import { Caption, Container, Date, Title, Image, Info } from './styles';

interface CardInterface {
    thumbnail: string;
    title: string,
    caption: string,
    date: any,
    id: number,

}

const Card: React.FC<CardInterface> = ({ id, date, title, caption, thumbnail }) => {
    return (
        <Container>
            <picture>
                <Image src={thumbnail}/>
            </picture>
            <Info>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Info>
        </Container>
    )
}

export default React.memo(Card);