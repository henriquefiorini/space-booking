import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  padding-right: 12px;
  padding-left: 12px;
  line-height: 1.5;
  border: 2px solid #D3DCE6;
  border-radius: 4px;
  background-color: #FFF;
  resize: none;
  outline: none;

  &:hover {
    border-color: #C0CCDA;
  }

  &:focus,
  &:active {
    border-color: #592DEA;
  }

  &:disabled {
    background: #E0E6ED;
    border-color: #E0E6ED;
    opacity: .8;
  }
`;

export default Input;
