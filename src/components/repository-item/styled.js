import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: lightcyan;
  background-image: linear-gradient(to left, #5B3256, #4B77BE);
  transition: transform .3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: white;


  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
`;