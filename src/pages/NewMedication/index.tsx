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
    return (
        <Wrapper>
            <StyledHeader>
                <LogoDiv>
                    <Logo>RemindMe</Logo>
                </LogoDiv>
                <LogoutBtn>Logout</LogoutBtn>
            </StyledHeader>
            <Content>
                <SubHeader>
                    <BackBtn>Back</BackBtn>
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

                    <SubmitBtn>Save</SubmitBtn>
                </FormContainer>
            </Content>
        </Wrapper>
    );
};

export default NewMedication;
