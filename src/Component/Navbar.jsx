import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = () => {
    return (
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
                    <div className='max-lg:hidden'>
                        <p className="rounded-md bg-main-light text-dark py-1 px-3 font-semibold text-lg nav-link resume cursor-pointer  hover:border-white border hover:bg-transparent hover:text-white">Resume</p>
                    </div>
                    <div className='hidden max-lg:block'>
                        <i className="fa-solid fa-bars text-white text-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;