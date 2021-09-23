import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterContainer, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './Footer.elements';

function Footer() {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        SCM
                    </SocialLogo>
                    <WebsiteRights>Be Great 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/samuel.mock.14' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/sdotmock23/' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/samuel-mock-2744b584' target='_blank' aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://github.com/sdotmock24' aria-label="Github" target='_blank' aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
