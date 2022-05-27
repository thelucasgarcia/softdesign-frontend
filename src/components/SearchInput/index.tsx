import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
    SearchBar,
    Form,
    Element,
    InputCover,
    Input,
    Button
} from "./styles";

type FormValues = {
    term: string;
  };
  
interface SearchInpuInterface {
    callback: (data: FormValues) => void
}

const schema = yup.object({
    term: yup.string().required("Preencha o campo para pesquisar."),
}).required();

const SearchInput: React.FC<SearchInpuInterface> = ({ callback }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(data => {
        callback(data);
        reset({ term: "" });
    });

    return (
        <SearchBar>
            <Form onSubmit={onSubmit}>
                <Element>
                    <InputCover>
                        <Input {...register("term")} type="search" placeholder="Pesquisar histórias em quadrinhos" />
                    </InputCover>
                </Element>
                <Button type="submit"><FaSearch /></Button>
            </Form>
            { errors.term && <p>{errors.term.message}</p>}
        </SearchBar>
    );
};

export default SearchInput;