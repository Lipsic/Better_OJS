import styled from "styled-components";

export const NavMenuStyles = styled.nav`
width: 100%;
bottom: 0;
position: relative;
top: 1.1rem;

div{
  font-size: 14px;
  flex: repeat(8, 1fr);
}

ul {
  justify-content: center;
  display: flex;
}

div ul a{
  height: 100%;
  display: table;
  float: left;
  padding: 0px 20px;
  vertical-align: middle;
}
`;
