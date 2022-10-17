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
} from "../Signup/styles";

const Signup = () => {
    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo>RemindMe</Logo>
                </LogoDiv>
            </StyledHeader>
            <Content>
                <Container>
                    <Heading>Create an account</Heading>
                    <Text color="#A5A9B2" bottom="1rem" size="1rem">Let's get started.</Text>
                    <Input type="text" placeholder="First name"/>
                    <Input type="text" placeholder="Last name"/>
                    <Input type="text" placeholder="Email"/>
                    <Input type="text" placeholder="Password"/>
                    <SignupBtn>Sign up</SignupBtn>
                    <LoginContainer>
                        <Text color="#A5A9B2" bottom="1rem" size="1rem">Already have an account? <LoginText
                            color="#030303" bottom="1rem" size="1rem">LogIn</LoginText></Text>
                    </LoginContainer>
                </Container>
            </Content>
        </Wrapper>
    );
};

export default Signup;
