import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { oneComic, toHttps } from "../../hooks/services";
import { ComicInterface } from "../../types/comic.interface";
import { useTheme } from "styled-components";
import _ from "lodash";

Modal.setAppElement("#root");
const ComicModal: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<"id">();
    const [comic, setComic] = useState<ComicInterface>({} as ComicInterface);

    const customStyles = {
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
            width: "clamp(700px, 1vw, 100%)"
        },
    };

    function onDismiss() {
        navigate(-1);
    }

    useLayoutEffect(() => {
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

    if (_.isEmpty(comic)) return null;

    return (
        <Modal
            isOpen={true}
            onRequestClose={onDismiss}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            style={customStyles}
        >
            <div style={{ display: "flex", gap: "30px", placeContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                    <img style={{ height: "fit-content", width: "max-content" }} src={toHttps(comic.thumbnail.path + "/clean." + comic.thumbnail.extension)} />
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
            </div>
        </Modal>
    );
};

export default ComicModal;