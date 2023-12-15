import headerimg  from "../Images/headerimg.png"
const Hero = () => {
    
    return (
        <div id="home" className="w-full">
            <div className="bg-gradient-to-r from-main-dark from-50% to-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex py-32 items-center flex-wrap max-sm:flex-col-reverse">
                        <div className="w-6/12 max-sm:w-full" id="user-detail-intro">
                            <h2 className="text-white text-3xl font-medium py-3" id="user-detail-name">Hey👋, My Self Raghav</h2>
                            <h1 className="text-6xl text-main-light font-semibold py-1.5">I'm a Full Stack Developer</h1>
                            <h3 className="text-white font-normal text-2xl py-3">I build things for web!</h3>
                            <div className="flex">
                            </div>
                        </div>
                        <div className="w-6/12 text-center  max-sm:w-full">
                            <div className="w-6/12 m-auto drop-shadow-xl">
                            <img className="w-full home-img" src={headerimg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex w-full py-4 justify-between">
                        <div className="w-6/12 max-sm:w-full">
                            <div className="flex gap-3 w-full">
                                <div className="flex gap-4 items-center w-6/12">
                                    <div>
                                        <h1 className="text-4xl text-main-light font-semibold">1000+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light ">Hour Of Coding Experience</p>
                                    </div>
                                </div>
                                <div className="flex  gap-4 items-center w-6/12">
                                    <div>
                                        <h1 className="text-5xl text-main-light font-semibold">3+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light ">Projects completed around the world</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right max-sm:hidden">
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