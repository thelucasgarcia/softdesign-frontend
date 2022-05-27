import { render, screen } from "@testing-library/react";

import Button from './index';

describe('Button Component', () => {
    it('should render a button', () => {
        render(<Button />)
    })
})