import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { oneComic, toHttps } from "../../hooks/services";
import { ComicInterface } from "../../types/comic.interface";
import { useTheme } from "styled-components";
import _ from "lodash";
import { ImSpinner3 } from "react-icons/im";
import { Container } from "./styles";

Modal.setAppElement("#root");

const ComicModal: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<"id">();
    const [comic, setComic] = useState<ComicInterface>({} as ComicInterface);

    const customStyles: Modal.Styles = {
        overlay: {
            zIndex: 999,
            background: "rgb(0 0 0 / 85%)",
        },
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: useTheme().colors.background,
            display: "flex",
            placeContent: "center"
        },
    };

    function onDismiss() {
        navigate(-1);
    }

    useEffect(() => {
        const controller = new AbortController();
        oneComic(Number(id), { signal: controller.signal }).then(result => {
            if (result.data.data.total) {
                setComic(result.data.data.results[0]);
            } else {
                onDismiss();
            }
        });
        return () => { controller.abort(); };
    }, []);

    function handleContent() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                    <img style={{ width: "100%", maxWidth: "600px" }} src={toHttps(comic.thumbnail.path + "/clean." + comic.thumbnail.extension)} />
                </div>
                <div style={{ flex: 1 }}>
                    <h3>{comic.title}</h3>
                    <strong>Publicado:</strong>
                    <div>{new Date(comic.dates[0].date).toLocaleDateString()}</div>
                    <br />
                    <strong>Escritor:</strong>
                    <div>{comic.creators.items.find(x => x.role === "writer")?.name}</div>
                    <br />
                    <strong>Artista da capa:</strong>
                    <div>{comic.creators.items.find(x => x.role.includes("cover"))?.name}</div>
                    <br />
                    <strong>Desenhista:</strong>
                    <div>{comic.creators.items.find(x => x.role.includes("inker"))?.name}</div>
                    <br />
                    <strong>Número de páginas:</strong>
                    <div>{comic.pageCount}</div>
                    <br />
                    <strong>Série:</strong>
                    <div>{comic.series.name}</div>
                    <br />
                    <div>{comic.description || comic.variantDescription}</div>
                </div>
            </React.Fragment>
        );
    }
    function handleLoading() {
        return (
            <div style={{ height: "100%", display: "flex", placeItems: "center"}}>
                <ImSpinner3 size={40} className="spinner"/>
            </div>
        );
    }
    
    return (
        <Modal
            isOpen={!!id}
            onAfterOpen={() => document.body.style.overflow = "hidden"}
            onAfterClose={() => document.body.style.overflow = "auto"}
            onRequestClose={onDismiss}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            style={customStyles}
        >
             <Container>
                {_.isEmpty(comic) ? handleLoading() : handleContent()}
             </Container>
        </Modal>
    );
};

export default ComicModal;