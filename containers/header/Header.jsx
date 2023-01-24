import React from "react";
import { NavigationUser, DropdownMenu, WebsiteName, NavMenu } from "./header-content"
import { HeaderStyles, HeaderWrapperStyles } from "./headerStyles";


const Header = () => {

    return (
        <HeaderStyles>
            <HeaderWrapperStyles>
                <NavigationUser />
                <DropdownMenu />
                <WebsiteName />
                <NavMenu />
            </HeaderWrapperStyles>
        </HeaderStyles>
    );
};

export default Header;
