import { forwardRef, LegacyRef } from "react";
import { Container } from "./styles";

export const Radio = forwardRef(function Radio(
    {children, isSelected, ...rest}: Props,
    ref: LegacyRef<HTMLInputElement>,
) {
    return (
        <Container data-state={isSelected}>
            <input type="radio" ref={ref} {...rest} />
            {children}
        </Container>
    )
})