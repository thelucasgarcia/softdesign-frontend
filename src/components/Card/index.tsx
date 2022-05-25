import React from 'react';
import { toHttps } from '../../hooks/services';

import { Container, Date, Title, Image, Info } from './styles';

interface CardInterface {
    thumbnail: string;
    title: string,
    caption: string,
    date: any,
    id: number,
    active: boolean
}

const Card: React.FC<CardInterface> = ({ id, date, title, caption, active, thumbnail }) => {
    return (
        <Container active={active}>
            <Image src={toHttps(thumbnail)}/>
            <Info>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Info>
        </Container>
    )
}

export default React.memo(Card);