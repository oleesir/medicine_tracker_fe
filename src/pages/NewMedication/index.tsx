import {useNavigate} from "react-router-dom";
import {
    Logo,
    LogoDiv,
    StyledHeader,
    Wrapper,
    Content,
    LogoutBtn,
    SubHeader,
    BackBtn,
    FormContainer,
    Input,
    SubmitBtn, Label
} from "../NewMedication/styles";




const NewMedication = () => {
    let navigate = useNavigate();

    const back = () => {
        return navigate(-1);
    };

    const logout = () => {
        return navigate("/");
    };

    const navToHome = () => {
        return navigate("/home");
    };

    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo>RemindMe</Logo>
                </LogoDiv>
                <LogoutBtn onClick={logout}>Logout</LogoutBtn>
            </StyledHeader>
            <Content>
                <SubHeader>
                    <BackBtn onClick={back}>Back</BackBtn>
                </SubHeader>
                <FormContainer>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text"  id="name" placeholder="Name"/>

                    <Label htmlFor="dose">Dose</Label>
                    <Input type="text" id="dose" placeholder="200"/>

                    <Label htmlFor="unit">Unit</Label>
                    <Input type="text" id="unit" placeholder="mg,microgram or ml"/>

                    <Label htmlFor="end_date">End Date</Label>
                    <Input type="text" id="end_date" placeholder="yyyy-mm-dd"/>

                    <Label htmlFor="first_dose">First Dose</Label>
                    <Input type="text"  id="first_dose" placeholder="12:00PM"/>

                    <Label htmlFor="second_dose">Second Dose</Label>
                    <Input type="text" id="second_dose" placeholder="12:00PM"/>

                    <Label htmlFor="third_dose">Third Dose</Label>
                    <Input type="text" id="third_dose" placeholder="12:00PM"/>

                    <SubmitBtn onClick={navToHome}>Save</SubmitBtn>
                </FormContainer>
            </Content>
        </Wrapper>
    );
};

export default NewMedication;
