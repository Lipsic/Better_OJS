import styled from "styled-components";

export const HeaderStyles = styled.header`
width: 100%;
height: 150px;
display: block;
background-color: ${props => props.bg__Color ? '#3c92ba' : '#f2f2f2'};
border-bottom: 1px solid #ddd;

`;

export const HeaderWrapperStyles = styled.div`
width: 1000px;
height: 100%;
display: block;
margin: auto;
background-color: red;
`;

// const LogoContainer = styled.div`
// height: 100%;
// display: table;
// float: left;
//  `;