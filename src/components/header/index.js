import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks"

const Header = () => {
    const { getUser } = useGithub();
    const [usernameFormSearch, setUsernameFormSearch] = useState();
    const submitGetUser = () => {
        if(!usernameFormSearch) return;
        return getUser(usernameFormSearch);
    };

    return (
    <header>
        <S.Wrapper>
            <input type="text" placeholder="Digite o username para pesquisa..." onChange={(event) => setUsernameFormSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
        </S.Wrapper>
    </header>
    );
}

export default Header;;