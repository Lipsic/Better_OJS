import React from "react";
import DropDownMenuStyles from "./dropDownMenuStyles";

const DropDownMenu = () => {

    return (
        <DropDownMenuStyles>
            <a href="#oji_content_main">Ir para o conteúdo principal</a>
            <a href="#siteNav">Ir para o menu de navegação principal</a>
            <a href="#homepageIssue">Ir para a edição atual</a>
            <a href="#oji_content_footer">Ir para o rodapé</a>
        </DropDownMenuStyles>
    )
}

export default DropDownMenu;