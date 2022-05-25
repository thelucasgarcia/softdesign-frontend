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
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            term: 'marvel'
        }
    });
    const onSubmit = handleSubmit(callback);

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