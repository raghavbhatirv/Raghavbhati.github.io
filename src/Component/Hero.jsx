import headerimg from "../Images/headerimg.png"
import "./hero.css"
const Hero = () => {
    return (
        <div id="home" className="w-full mt-14">
            <div className="bg-gradient-to-r from-main-dark from-50% to-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex py-32 items-center gap-6 max-md:flex-col-reverse max-md:py-16">
                        <div className="w-6/12 max-md:w-full max-md:pt-4" id="user-detail-intro">
                            <div className=" bg-main-light inline-block py-0.5 px-2 rounded-lg cursor-pointer my-4">
                                <div className="flex items-center gap-2 ">
                                    <div className="w-2 h-2 bg-main-dark rounded-full relative">
                                        <div className="animate-ping absolute  h-2 w-2 bg-main-dark rounded-full"> </div>
                                    </div>
                                    <div>
                                        <p className="text-main-dark text-sm capitalize">AVAILABLE FOR WORK</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-white text-3xl font-medium py-3 max-sm:text-2xl">
                                Hey<span aria-label="Waving Hand">👋</span>, My Self Raghav
                            </h2>
                            <h1 className="text-6xl text-main-light font-semibold py-1.5 max-sm:text-4xl">I'm a Full Stack Developer</h1>
                            <h3 className="text-white font-normal text-2xl py-3 max-sm:text-lg">I build things for web!</h3>
                        </div>
                        <div className="w-6/12 text-center  max-md:w-full">
                            <div className="w-6/12 m-auto drop-shadow-xl max-xl:w-9/12 max-md:w-8/12">
                                <img className="w-full home-img" src={headerimg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex w-full py-4 justify-between items-center">
                        <div className="w-6/12 max-lg:w-full">
                            <div className="flex gap-3 w-full">
                                <div className="flex gap-2 items-center w-6/12">
                                    <div>
                                        <h1 className="text-4xl text-main-light font-semibold max-sm:text-2xl">1000+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light max-sm:text-xs">Hour Of Coding Experience</p>
                                    </div>
                                </div>
                                <div className="flex  gap-2 items-center w-6/12 justify-center">
                                    <div>
                                        <h1 className="text-5xl text-main-light font-semibold max-sm:text-2xl">3+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light max-sm:text-xs">Projects completed around world</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right max-lg:hidden">
                            <div className="flex items-center gap-3">
                                <div>
                                    <h2 className="text-white text-lg font-medium">Connect with me:</h2>
                                </div>
                                <div className='flex w-5/12 m-auto justify-center gap-3'>
                                    <div className="text-xl bg-main-light px-3 py-2 rounded-full transform transition-transform hover:scale-110 hover:cursor-pointer"><a href='https://github.com/Raghavbhati' target="_blank"><i class="fa-brands fa-github"></i></a></div>
                                    <div className="text-xl bg-main-light px-3 py-2 rounded-full transform transition-transform hover:scale-110 hover:cursor-pointer"><a href='https://www.linkedin.com/in/raghavbhatirv/' target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></div>
                                    <div className="text-xl bg-main-light px-3 py-2 rounded-full transform transition-transform hover:scale-110 hover:cursor-pointer"><a href='https://twitter.com/raghavbhatirv/' target="_blank"><i class="fa-brands fa-x-twitter"></i></a></div>
                                    <div className="text-xl bg-main-light px-3 py-2 rounded-full transform transition-transform hover:scale-110 hover:cursor-pointer"><a href='https://raghavbhati.github.io/' target="_blank"><i class="fa-solid fa-globe"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;