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
  padding: 10px 40px;
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

export const FormContainer = styled.div`
  width: 40%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
`;

export const BackBtn = styled.button`
  background-color: #5196F8;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
`;


export const StatusText = styled.p<{ size?: string, textShadow?: string, color?: string, weight?: string, background?: string }>`
  font-size: ${props => props.size};
  color: ${props => props.color === 'active' ? "#228b22" : "#800000"};
  font-weight: ${props => props.weight};
  background-color: ${props => props.background};
  text-shadow: ${props => props.textShadow === 'active' ? "5px -10px 22px rgba(34,139,34,1)" : "5px -10px 22px rgba(128,0,0,1)"};
`;


export const Input = styled.input`
  font-size: 1.5em;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: 1.5px solid #A5A9B2;
  border-radius: 3px;

  ::placeholder {
    color: #A5A9B2;
  }

  :focus {
    border: 1px solid #5196F8;
    box-shadow: 11px 13px 5px 0px rgba(81,150,248,0.18);
    -webkit-box-shadow: 11px 13px 5px 0px rgba(81,150,248,0.18);
    -moz-box-shadow: 11px 13px 5px 0px rgba(81,150,248,0.18);
  }
`;


export const SubmitBtn = styled.button`
  background-color: #030303;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  padding: 0.75em 1.5em;
  border-radius: 5px;
  margin-top: 2rem;
`;


export const Label = styled.label`
  color: #030303;
  font-size: 1.3em;
`;