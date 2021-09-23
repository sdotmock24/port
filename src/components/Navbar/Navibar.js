import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavItemBtn } from './Navibar.elements';


function Navibar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon />
                        SCM
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/aboutme'>
                                About Me
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/skills'>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (<NavBtnLink  to="/contactme">
                                <Button primary>Contact Me</Button>
                            </NavBtnLink>) : (
                                <NavBtnLink to="/contactme">
                                    <Button fontBig primary>
                                        Contact Me
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navibar;
