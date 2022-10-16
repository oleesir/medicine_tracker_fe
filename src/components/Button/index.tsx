import {StyledButton} from "./styles";

export const Button = ({children,yes}:{children:any,yes:string}) => {
    return (
        <StyledButton bc={yes}>{children}</StyledButton>
    );
};

export default Button;
