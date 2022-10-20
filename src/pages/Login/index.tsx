import {useNavigate} from "react-router-dom";
import {
    Logo,
    LogoDiv,
    StyledHeader,
    Wrapper,
    Content,
    Container,
    Input,
    SignupBtn,
    Heading,
    Text,
    LoginContainer,
    LoginText
} from "../Login/styles";


const Login = () => {

    let navigate = useNavigate();

    const navToWelcome = () => {
        return navigate("/");
    };

    const navToHome = () => {
        return navigate("/home");
    };

    const navToSignup = () => {
        return navigate("/signup");
    };
    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo onClick={navToWelcome}>RemindMe</Logo>
                </LogoDiv>
            </StyledHeader>
            <Content>
                <Container>
                    <Heading>Welcome back</Heading>
                    <Input type="text" placeholder="Email"/>
                    <Input type="text" placeholder="Password"/>
                    <SignupBtn onClick={navToHome}>Login</SignupBtn>
                    <LoginContainer>
                        <Text color="#A5A9B2" bottom="1rem" size="1rem">Don't have an account? <LoginText
                            color="#030303" bottom="1rem" size="1rem" onClick={navToSignup}>Signup</LoginText></Text>
                    </LoginContainer>
                </Container>
            </Content>
        </Wrapper>
    );
};

export default Login;
