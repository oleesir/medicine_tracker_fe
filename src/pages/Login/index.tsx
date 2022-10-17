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
    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo>RemindMe</Logo>
                </LogoDiv>
            </StyledHeader>
            <Content>
                <Container>
                    <Heading>Welcome back</Heading>
                    <Input type="text" placeholder="Email"/>
                    <Input type="text" placeholder="Password"/>
                    <SignupBtn>Login</SignupBtn>
                    <LoginContainer>
                        <Text color="#A5A9B2" bottom="1rem" size="1rem">Don't have an account? <LoginText
                            color="#030303" bottom="1rem" size="1rem">Signup</LoginText></Text>
                    </LoginContainer>
                </Container>
            </Content>
        </Wrapper>
    );
};

export default Login;
