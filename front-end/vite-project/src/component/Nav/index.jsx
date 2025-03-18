

const Nav = () => {
    return (
        <nav className="Nav">
            <h1>La pâtisserie 3WA</h1>
            <ul>
                <li>
                    <NavLink to={"/home"}>
                        HOME
                    </NavLink>
                </li>
                <li>
                <NavLink to={"/login"}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav