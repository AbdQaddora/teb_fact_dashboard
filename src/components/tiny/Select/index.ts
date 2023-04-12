import styled from 'styled-components';

const Select = styled.select`
  font-size: 16px;
  border: none;
  outline: none;

  border-radius: 4px;
  padding: 4px 24px 4px 12px;
  width: fit-content;
  max-width: 200px;
  
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.6569 10.3432L12.0001 16L6.3433 10.3432L5.65686 11.0296L12.0001 17.3728L18.3433 11.0296L17.6569 10.3432Z' fill='%231C1C1C'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0px center;
`;

export default Select;