import { NavLink } from "react-router-dom"



export default function Navbar () {
    return(
        <>
            <ul>
                <li>
                    <NavLink className="" to="/login">
                        Crea Libro
                    </NavLink>
                </li>
            </ul>
        </>
    )
}