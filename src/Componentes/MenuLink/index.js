import { NavLink } from 'react-router-dom'
import styles from './menuLink.module.css'

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>)
}