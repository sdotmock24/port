import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IconContext } from 'react-icons';
import ShareLink from 'react-linkedin-share-link';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <IconContext.Provider value={{ color: "white", size: "1em" }}>
            <footer class="bg-dark text-white pt-4 pb-4 text-center">

                <div class="container p-4">

                    <section class="mb-auto mx-5 p-5">    

                        <a href="#" class="btn btn-outline-secondary btn-floating m-1 .bg-transparent"><h1><AiFillFacebook /></h1></a>
                        
                     
                         
                        <a href="https://www.linkedin.com/in/samuel-mock-2744b584" target='_blank'  class="btn btn-outline-secondary btn-floating m-1"><h1><AiFillLinkedin /></h1></a>
                               
                       
                            
                        <a href="#" class="btn btn-outline-secondary btn-floating m-1"><h1><AiOutlineMail /></h1></a>
        

                    </section>

                </div>
        
            </footer>
        </IconContext.Provider>
            
    )
}

export default Footer;
