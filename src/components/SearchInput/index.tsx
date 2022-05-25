import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import {
    SearchBar,
    Form,
    Element,
    InputCover,
    Input,
    Button
} from './styles';

type FormValues = {
    term: string;
  };
  
interface SearchInpuInterface {
    callback: (data: FormValues) => void
}

const SearchInput: React.FC<SearchInpuInterface> = ({ callback }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

    const onSubmit = handleSubmit(data => {
        callback(data);
        reset({ term: '' });
    });

    return (
        <SearchBar>
            <Form onSubmit={onSubmit}>
                <Element>
                    <InputCover>
                        <Input {...register('term')} placeholder="Pesquisar histórias em quadrinhos" />
                    </InputCover>
                </Element>
                <Button type="submit"><FaSearch /></Button>
            </Form>
        </SearchBar>
    );
}

export default SearchInput;