import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  //background-color: blue;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  align-items: center;
`;


export const LogoDiv = styled.div`
  //background-color: pink;
`;

export const ButtonDiv = styled.div`
  //background-color: red;
`;


export const LoginBtn = styled.button`
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


export const SignupBtn = styled.button`
  background-color: #5196F8;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  padding: 0.75em 1.5em;
  border-radius: 5px;
`;


export const Logo = styled.h1`
  font-family: "Apple Symbols";
  color: #030303;
`;


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;


export const BannerContent = styled.div`
  width: 50%;
  display: flex;
  padding-top: 10rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;


export const ImgContent = styled.div`
  padding-top: 4rem;
  width: 50%;
  padding-right: 5rem;
`;


export const BannerContentChild = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerText = styled.p<{ size?: string, bottom?: string, color?: string, weight?: string }>`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-bottom: ${props => props.bottom};
  font-weight: ${props => props.weight};
`;


export const NumOfPeople = styled.span`
  color: #484848;
  font-size: 0.9rem;
  font-weight: bold;
`;


export const SignupBtnOne = styled.button`
  background-color: #030303;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border-radius: 5px;
`;


export const Pic = styled.img`
  width: 100%;
`;

