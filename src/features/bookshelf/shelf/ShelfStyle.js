import styled from "styled-components/macro";

const ShelfDiv = styled.div`
   --item-width: 8em;

   display: block;
   text-decoration: none;
   color: black;
   /* line-height: 1; */
   width: 100%;
   padding: 16px;
   border-radius: 0 calc(var(--item-width)/2) calc(var(--item-width)/2) 0;
   border: none;
   cursor: pointer;
  
   &:hover {
     background-color: hsl(16deg, 100%, 60%);
     color: white;
     font-weight: 700;
   }
`;

export default ShelfDiv;