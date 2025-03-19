import { NavLink } from "react-router"

const Nav = () => {
    return (
        <nav className="Nav">
            <h1>La pâtisserie 3WA</h1>
                <div>
                    <NavLink to="/home" end>
                        HOME
                    </NavLink>
                    <NavLink to="/login" end>
                        Login
                    </NavLink>
                </div>
        </nav>
    )
}

export default Nav