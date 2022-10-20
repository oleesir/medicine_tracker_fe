import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  //height: 100vh;
  display: flex;
  flex-direction: column;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  align-items: center;
`;


export const Logo = styled.h1`
  color: #030303;
  cursor: pointer;
`;

export const LogoDiv = styled.div`
  //background-color: pink;
`;

export const LogoutBtn = styled.button`
  border: 1px solid #EEEEEE;
  background-color: transparent;
  outline: none;
  color: #484848;
  cursor: pointer;
  font-size: 1em;
  margin-right: 1em;
  padding: 0.75em 1.5em;
  border-radius: 5px;
`;


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  align-items: center;
`;


export const SubHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;

`;


export const TableContainer = styled.div`
  width: 70%;
  margin-top: 3rem;
`;

export const TableLi = styled.li`
  border-radius: 3px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  color: #fff;
  background-color: #030303;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;


export const TableRow = styled.li`
  border-radius: 3px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  letter-spacing: 0.03em;
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
`;


export const FirstColumn = styled.div`
  flex-basis: 25%;
`;

export const SecondColumn = styled.div`
  flex-basis: 5%;
`;
export const ThirdColumn = styled.div`
  flex-basis: 5%;
`;

export const FourthColumn = styled.div`
  flex-basis: 10%;
`;

export const FifthColumn = styled.div`
  flex-basis: 5%;
`;

export const SixthColumn = styled.div`
  flex-basis: 10%;
`;

export const SeventhColumn = styled.div`
  flex-basis: 10%;
`;

export const EighthColumn = styled.div`
  flex-basis: 10%;
`;

export const NinthColumn = styled.div`
  flex-basis: 3%;
`;

export const TenthColumn = styled.div`
  flex-basis: 3%;
`;


export const NewBtn = styled.button`
  background-color: #5196F8;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  padding: 0.75em 1.5em;
  border-radius: 5px;
`;


export const StatusText = styled.p<{ size?: string, textShadow?: string, color?: string, weight?: string, background?: string }>`
  font-size: ${props => props.size};
  color: ${props => props.color === 'active' ? "#228b22" : "#800000"};
  font-weight: ${props => props.weight};
  background-color: ${props => props.background};
  text-shadow: ${props => props.textShadow === 'active' ? "5px -10px 22px rgba(34,139,34,1)" : "5px -10px 22px rgba(128,0,0,1)"};
`;


export const Container = styled.div`
  display: flex;
  width: 60%;
`;