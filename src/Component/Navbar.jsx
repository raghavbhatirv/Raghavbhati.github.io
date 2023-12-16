import { useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import styles from "./Navbar.module.css";
import { handleDwonloadResume } from './resume';
const Navbar = () => {
    const [mobilemenuactive, setMobilemenuactive] = useState(false);
    const mobileMenu = () => {
        console.log(mobilemenuactive);
        setMobilemenuactive(!mobilemenuactive);
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-main from-60% to-dark w-full fixed top-0 left-0 z-40" id="nav-menu">
                <div className="w-10/12 m-auto">
                    <div className="flex justify-between py-3 items-center">
                        <div>
                            <h2 className="text-white font-medium text-2xl cursor-pointer">&lt;&frasl;Raghav&gt;</h2>
                        </div>
                        <div className='max-lg:hidden'>
                            <ul className="flex gap-4">
                                <Link className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link home" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                                <Link className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link about" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                                <Link className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link skills" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                                <Link className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link projects" to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                                <Link className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link contact" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                            </ul>
                        </div>
                        <div className='max-lg:hidden' id="resume-button-1">
                            <p onClick={handleDwonloadResume} className="rounded-md bg-main-light text-dark py-1 px-3 font-semibold text-lg nav-link resume cursor-pointer  hover:border-white border hover:bg-transparent hover:text-white">Resume</p>
                        </div>
                        <div onClick={mobileMenu} className='hidden max-lg:block'>
                            {mobilemenuactive ? <i className="fa-solid fa-xmark text-white text-2xl"></i> : <i className="fa-solid fa-bars text-white text-2xl"></i>}
                        </div>
                    </div>
                </div>
                <div
                    className={`${mobilemenuactive ? styles.mobileMenu_active : styles.mobile_menu
                        } hidden max-lg:block`}
                >
                    <div className="w-10/12 m-auto pt-5">
                        <div>
                            <ul className="list-none block text-center">
                                <Link onClick={mobileMenu} className="block py-2 text-main-dark font-medium text-lg home" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                                <Link onClick={mobileMenu} className="block py-2 text-main-dark font-medium text-lg about" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                                <Link onClick={mobileMenu} className="block py-2 text-main-dark font-medium text-lg skills" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                                <Link onClick={mobileMenu} className="block py-2 text-main-dark font-medium text-lg projects" to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                                <Link onClick={mobileMenu} className="block py-2 text-main-dark font-medium text-lg contact" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                            </ul>
                            <div className='text-center' onClick={handleDwonloadResume}  id="resume-button-2">
                                <div className='py-4 inline-block'>
                                    <div className='flex gap-2 bg-main-dark rounded-md items-center py-1 px-3 cursor-pointer'>
                                        <i className="fa-solid fa-download text-white text-lg"></i>
                                        <p className=" text-white font-medium text-lg">Resume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;