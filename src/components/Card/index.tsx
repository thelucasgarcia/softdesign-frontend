import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../../hooks/context";
import { toHttps } from "../../hooks/services";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";

import { Container, Date, Title, Image, Info, Favorite } from "./styles";
interface CardInterface {
    id: number,
    title: string,
    description: string,
    date: string,
    active: boolean,
    thumbnail: {
        path: string;
        extension: string;
    }
}

const Card: React.FC<CardInterface> = ({ id, date, title, description, active, thumbnail }) => {
    const { toggleFavorite } = useFavorites();
    const navigate = useNavigate();
    const location = useLocation();

    function handleFavorite() {
        toggleFavorite({
            id: id, 
            title: title,
            image: toHttps(thumbnail.path + "/standard_medium." + thumbnail.extension),
            details: description
        });
    }

    const handleModal = () => {
        navigate(`/comic/${id}`, {
            state: { background: location }
        });
    };

    return (
        <Container title={title}>
            <Favorite active={active} onClick={handleFavorite}>
                {active ? <MdBookmarkAdded /> : <MdBookmarkAdd/>}
            </Favorite>
            <Image src={toHttps(thumbnail.path + "/portrait_fantastic." + thumbnail.extension)} title={title}/>
            <Info onClick={handleModal}>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Info>
        </Container>
    );
};

export default React.memo(Card);