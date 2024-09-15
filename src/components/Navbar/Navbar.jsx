import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__list__li}>
                    <a href="#AboutMe" className={s.nav__list__link}>About Me</a>
                </li>
                <li className={s.nav__list__li}>
                    <a href="#Portfolio" className={s.nav__list__link}>Portfolio</a>
                </li>
                <li className={s.nav__list__li}>
                    <a href="#Social" className={s.nav__list__link}>Social</a>
                </li>
            </ul>
            <img src="" alt="" />
        </nav>
    </>
  )
}

export default Navbar