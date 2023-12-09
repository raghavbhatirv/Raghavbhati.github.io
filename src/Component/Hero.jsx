const Hero = () => {
    return (
        <div>
            <div className="w-full bg-gradient-to-r from-main-dark from-50% to-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex justify-between py-32">
                        <div className="w-5/12">
                            <h2 className="text-white text-3xl font-medium py-3">Hello👋,</h2>
                            <h1 className="text-6xl text-main-light font-semibold py-1.5">I'm a MERN Stack Developer</h1>
                            <h3 className="text-white font-normal text-2xl py-3">I build things for web!</h3>
                            <div className="flex">
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-dark">
                <div className="w-10/12 m-auto">
                    <div className="flex w-full py-4 justify-between">
                        <div className="w-6/12">
                            <div className="flex gap-3 w-full">
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <h1 className="text-5xl text-main-light font-semibold">1000+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light ">Hour Of Coding Experience</p>
                                    </div>
                                </div>
                                <div  className="flex  gap-4 items-center">
                                    <div>
                                        <h1 className="text-5xl text-main-light font-semibold">3+</h1>
                                    </div>
                                    <div>
                                        <p className="text-white text-base font-light ">Projects completed around the world</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;