import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useFavorites } from "../../hooks/context";
import Paginate from "../Paginate";
import Button from "../Button";
import useEmail from "../../hooks/email";

import {
    Container, Title, List,
    Item,
    Thumbnail,
    Name,
    Delete
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const PAGE_SIZE = 5;

const Favorites: React.FC = () => {
    const { favorites, toggleFavorite, clearFavorites } = useFavorites();
    const [currentPage, setCurrentPage] = useState(1);
    const { sendFavoriteEmail } = useEmail();
    const navigate = useNavigate();
    const location = useLocation();

    function changePage(current: number) {
        setCurrentPage(current);
    }

    const displayFavorites = favorites.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE );

    const sendEmail = async () => {
        const { value: email } = await Swal.fire({
            title: "Digite seu email para enviar seus favoritos por email",
            input: "email",
            inputPlaceholder: "Informe seu email",
            confirmButtonText: "Enviar por email",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
          });
          
        if (email) {
            const params = { email: email, favorites: favorites };
            sendFavoriteEmail(params).then(() => {
                Swal.fire({ title: "Sucesso!", icon: "success", showConfirmButton: false, timer: 1500 })
                .then(() => { clearFavorites(); });
            }, (error) => {
                Swal.fire({ title: "Ocorreu um erro!", icon: "error", text: error.text, showConfirmButton: false, timer: 1500 });
            });
        }
    };

    if (!favorites.length) return null;
    
    return (
        <Container>
            <Title>Meus Favoritos</Title>
            <Container>
                <List>

                    {displayFavorites.map((result) => (
                        <Item key={result.id}>
                            <span>
                                <Thumbnail src={result.image} />
                                <Name onClick={() => navigate(`comic/${result.id}`, { state: {
                                    background: location
                                }})}>{result.title}</Name>
                            </span>
                            <Delete onClick={() => toggleFavorite(result)}>
                                <FaTrash />
                            </Delete>
                        </Item>
                    ))}
                </List>
                    <Paginate total={favorites.length} defaultPageSize={PAGE_SIZE} onChange={changePage} />
                    <Button onClick={sendEmail} style={{ marginTop: 15 }}>
                        Enviar por email
                    </Button>
            </Container>
        </Container>
    );
};

export default Favorites;