import { FaTrashAlt,FaPencilAlt } from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import {
    Logo,
    LogoDiv,
    StyledHeader,
    Wrapper,
    Content,
    LogoutBtn,
    SubHeader,
    TableContainer,
    NewBtn,
    TableLi,
    FirstColumn,
    SecondColumn,
    ThirdColumn,
    FourthColumn,
    FifthColumn,
    SixthColumn,
    SeventhColumn,
    EighthColumn,
    TableRow, NinthColumn, TenthColumn, StatusText
} from "../Home/styles";



const Home = () => {
    let navigate = useNavigate();

    const newMedication = () => {
        return navigate("/new_medication");
    };


    const logout = () => {
        return navigate("/");
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
                    <NewBtn  onClick={newMedication}>New</NewBtn>
                </SubHeader>
                <TableContainer>
                    <ul>
                        <TableLi>
                            <FirstColumn>Name</FirstColumn>
                            <SecondColumn>Dose</SecondColumn>
                            <ThirdColumn>Unit</ThirdColumn>
                            <FourthColumn>End Date</FourthColumn>
                            <FifthColumn>Status</FifthColumn>
                            <SixthColumn>First Dose</SixthColumn>
                            <SeventhColumn>Second Dose</SeventhColumn>
                            <EighthColumn>Third Dose</EighthColumn>
                            <NinthColumn></NinthColumn>
                            <TenthColumn></TenthColumn>
                        </TableLi>

                        <TableRow>
                            <FirstColumn>Zinnatifgh</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="active" textShadow="active">active</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>

                        <TableRow>
                            <FirstColumn>Zinnati</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="ended" textShadow="ended">ended</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>

                        <TableRow>
                            <FirstColumn>Zinnati</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="active" textShadow="active">active</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>

                        <TableRow>
                            <FirstColumn>Zinnati</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="ended" textShadow="ended">ended</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>

                        <TableRow>
                            <FirstColumn>Zinnati</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="ended" textShadow="ended">ended</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>

                        <TableRow>
                            <FirstColumn>Zinnati</FirstColumn>
                            <SecondColumn>200</SecondColumn>
                            <ThirdColumn>mg</ThirdColumn>
                            <FourthColumn>2022-11-20</FourthColumn>
                            <FifthColumn><StatusText color="active" textShadow="active">active</StatusText></FifthColumn>
                            <SixthColumn>09:00 AM</SixthColumn>
                            <SeventhColumn>12:00 PM</SeventhColumn>
                            <EighthColumn>03:00 PM</EighthColumn>
                            <NinthColumn><FaTrashAlt/></NinthColumn>
                            <TenthColumn><FaPencilAlt/></TenthColumn>
                        </TableRow>
                    </ul>
                </TableContainer>

            </Content>
        </Wrapper>
    );
};

export default Home;
