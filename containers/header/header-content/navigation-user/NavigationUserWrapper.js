import styled from "styled-components";

const NavigationUserWrapper = styled.div`
display: flex;
justify-content: flex-end;
top: 0;
min-height: 30px;
padding-left: 0.714rem;
padding-right: 0.714rem;
box-sizing: border-box;

ul{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-size: .93rem;
  padding: 0.714rem;
}

li {
  text-align: center;
  display: inline-block;
}
`;

export default NavigationUserWrapper;
