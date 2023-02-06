import styled, { css } from "styled-components";

const Boton = styled.button`
  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  margin: 4px 4px;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  width: ${(props) => props.large ? '100%' : 'auto'};

  &:hover {
    color: #fff;
  }

  ${(props) => props.black && css`
    background: #000;
    color: #fff;
  `}

  ${(props) => props.marginTop && css`
    margin-top: 10px;
  `}

  ${(props) => props.marginBottom && css`
    margin-bottom: 10px;
  `}
`;

export default Boton;