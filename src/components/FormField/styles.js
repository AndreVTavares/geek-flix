import styled from "styled-components";

// export const FormLabel = styled.label`
//   font-size: 16px;
//   font-weight: normal;
//   pointer-events: none;
//   position: relative;
//   left: 5px;
//   top: 50px;
//   transition: 300ms ease all;

//   &:focus {
//     top: -20px;
//     font-size: 12px;
//   }
// `;

export const FormInput = styled.input`
  background: black;
  color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: flex;
  width:  ${({type}) => type === 'color' ? `25%` : `40%`};
  height: ${({type}) => type === 'color' ? `50px` : `none`};
  border: none;
  border-radius: 0;
  border-bottom: ${({type}) => type === 'color' ? `none` : `3px solid #9ad5ff`}; 
  margin: 25px 0;

  &:focus {
    outline: none;
    border-bottom: ${({type}) => type === 'color' ? `none` : `5px solid #9ad5ff`};
  }
`;

