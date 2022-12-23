// import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <div className={s.Navbar}>

            <div className={s.item}>
                {/* <NavLink to="/Create">Create</NavLink> */}
                {/* <Rating rating={1} maxRating={5} /> */}


                <Menu>
                    <Menu.Item as={Link} to='/Create'>
                        Home
                    </Menu.Item>
            
                    <Menu.Item as={Link} to='/Read'>
                    Read
                    </Menu.Item>
                    <Menu.Item as={Link} to='/Ubdate'>
                    Ubdate
                    </Menu.Item>

                    <Menu.Item as={Link} to='/FormField'>
                    Form
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}


export default Navbar