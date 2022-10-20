import {useNavigate} from "react-router-dom";
import {
    Wrapper,
    StyledHeader,
    LogoDiv,
    ButtonDiv,
    SignupBtn,
    LoginBtn,
    Logo,
    Content,
    BannerContent,
    ImgContent, BannerContentChild, BannerText, NumOfPeople, SignupBtnOne,Pic
} from "./styles";



const Welcome = () => {
    let navigate = useNavigate();

    const navToLogin = () => {
        return navigate("/login");
    };

    const navToSignup = () => {
        return navigate("/signup");
    };
    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo>RemindMe</Logo>
                </LogoDiv>
                <ButtonDiv>
                    <LoginBtn onClick={navToLogin}>Login</LoginBtn>
                    <SignupBtn onClick={navToSignup}>Sign up</SignupBtn>
                </ButtonDiv>
            </StyledHeader>
            <Content>
                <BannerContent>
                    <BannerContentChild>
                        <BannerText bottom='1rem' color='#727272' size='0.8rem'> <NumOfPeople>_15K</NumOfPeople> people
                            trust this app. </BannerText>
                        <BannerText bottom='1rem' color='#030303' size='2.5rem' weight='800'>A reminder made just for
                            you. </BannerText>
                        <BannerText bottom='4rem' color='#727272' size='1rem'>RemindMe is a task management program
                            developed by Olive Inc. the platforms that allows users to create lists of medications and set
                            notifications for themselves.</BannerText>
                        <div><SignupBtnOne onClick={navToSignup}>Sign up</SignupBtnOne></div>
                    </BannerContentChild>
                </BannerContent>
                <ImgContent><Pic src={'/reminder_photo.png'}/></ImgContent>
            </Content>

        </Wrapper>
    );
};

export default Welcome;
