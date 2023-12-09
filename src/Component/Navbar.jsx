const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-main from-60% to-dark w-full" id="nav-menu">
            <div className="w-10/12 m-auto">
                <div className="flex justify-between p-3 items-center">
                    <div>
                        <h2 className="text-white font-medium text-2xl cursor-pointer">&lt;&frasl;Raghav&gt;</h2>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <a href="#"><li className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link home" >Home</li></a>
                            <a href="#"><li className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link about">About</li></a>
                            <a href="#"><li className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link skills" >Skills</li></a>
                            <a href="#"><li className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link projects" >Projects</li></a>
                            <a href="#"><li className="p-1 text-white font-medium text-lg hover:bg-main-dark rounded-md px-4 nav-link contact" >Contact</li></a>
                        </ul>
                    </div>
                    <div>
                        <p className="rounded-md bg-main-light text-dark py-1 px-3 font-semibold text-lg nav-link resume cursor-pointer">Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;