import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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


export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const Input = styled.input`
  font-size: 0.9rem;
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #A5A9B2;

  ::placeholder {
    color: #A5A9B2;
  }

  :focus {
    border-bottom: 1px solid #5196F8;
  }
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
  margin-top: 2.5rem;
`;

export const Heading = styled.p`
  color: #030303;
  font-size: 2rem;
`;

export const Text = styled.p<{ size?: string, bottom?: string, color?: string, weight?: string, top?: string }>`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-bottom: ${props => props.bottom};
  margin-top: ${props => props.top};
  font-weight: ${props => props.weight};
`;


export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const LoginText = styled.span<{ size?: string, bottom?: string, color?: string, weight?: string, top?: string }>`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-bottom: ${props => props.bottom};
  margin-top: ${props => props.top};
  font-weight: ${props => props.weight};
  cursor: pointer;
`;
//
// export const BannerContent = styled.div`
//   width: 50%;
//   display: flex;
//   padding-top: 10rem;
//   padding-left: 10rem;
//   padding-right: 10rem;
// `;
//
//
// export const ImgContent = styled.div`
//   padding-top: 4rem;
//   width: 50%;
//   padding-right: 5rem;
// `;
//
//
// export const BannerContentChild = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
//
// export const BannerText = styled.p<{ size?: string, bottom?: string, color?: string, weight?: string }>`
//   font-size: ${props => props.size};
//   color: ${props => props.color};
//   margin-bottom: ${props => props.bottom};
//   font-weight: ${props => props.weight};
// `;

