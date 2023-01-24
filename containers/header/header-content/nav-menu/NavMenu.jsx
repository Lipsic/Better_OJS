import React from "react"
import { NavMenuStyles } from "./NavMenuStyles";


const NavMenu = () => {

  return (

    <NavMenuStyles>
      <div className="navigation_primary_row">
        <div className="navigation_primary_wrapper">
          <ul className="navigation_primary">
            <a>CAPA</a>
            <a>SOBRE</a>
            <a>ACESSO</a>
            <a>CADASTRO</a>
            <a>PESQUISA</a>
            <a>ATUAL</a>
            <a>ANTERIORES</a>
            <div>
              <a>
                <span>"Buscar"</span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </NavMenuStyles>
  )
}

export default NavMenu;