import { Icon } from '@iconify/react';
import bgabout from "../Images/bgabout.png"
import TechStackItem from './TechStackItem';
import { handleDwonloadResume } from './resume';
const About = () => {
    const mainDivStyle = {
        background: `url(${bgabout}) no-repeat left center`,
        backgroundSize: 'cover',
        minHeight: '100vh',
    };
    return (
        <div className="bg-light w-full" style={mainDivStyle}>
            <div className="w-10/12 m-auto py-10">
                <div className="flex about section py-4" id='about'>
                    <div className="w-5/12 max-lg:w-full max-xl:w-7/12">
                        <h2 className="font-semibold text-dark text-3xl py-2">About me</h2>
                        <p className="text-main-dark" id="user-detail-name">My tech journey kicked off with a passion for content creation on YouTube and then this passion soon extended to blogging. The world of possibilities in web development soon captivated me, especially during my time working on WordPress.</p>
                        <br></br>
                        <p className="text-main-dark"> Keen to explore the intricate world of coding further, I enrolled in the Masai School bootcamp. This decision marked a significant milestone in my ongoing tech voyage.</p>
                        <br></br>
                        <div className='text-left' onClick={handleDwonloadResume} id="resume-button-2">
                            <div className='py-1 inline-block'>
                                <div className='flex gap-2 bg-main-dark rounded-md items-center py-1 px-3 cursor-pointer'>
                                    <i className="fa-solid fa-download text-white text-base"></i>
                                    <p className=" text-white font-normal text-base">Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pt-8" id='skills'>
                    <div className="text-left w-7/12 max-xl:w-8/12 max-lg:w-full">
                        <h2 className="font-semibold text-dark text-2xl py-1">My Skills</h2>
                        <p className="font-semibold text-dark">Tech stack I've working with</p>
                        <div className='grid grid-cols-4 max-md:grid-cols-3 py-4 gap-2 max-sm:grid-cols-2 '>
                            <TechStackItem icon={<Icon icon="skill-icons:html" />} name={"HTML"} />
                            <TechStackItem icon={<Icon icon="skill-icons:react-dark" />} name={"CSS"} />
                            <TechStackItem icon={<Icon icon="skill-icons:javascript" />} name={"Javascript"} />
                            <TechStackItem icon={<Icon icon="skill-icons:tailwindcss-light" />} name={"Tailwind"} />
                            <TechStackItem icon={<Icon icon="skill-icons:bootstrap" />} name={"Bootstrap"} />
                            <TechStackItem icon={<Icon icon="skill-icons:java-light" />} name={"JAVA"} />
                            <TechStackItem icon={<Icon icon="skill-icons:react-light" />} name={"React"} />
                            <TechStackItem icon={<Icon icon="skill-icons:redux" />} name={"Redux"} />
                            <TechStackItem icon={<Icon icon="skill-icons:nodejs-light" />} name={"Node.js"} />
                            <TechStackItem icon={<Icon icon="skill-icons:expressjs-light" />} name={"Express.js"} />
                            <TechStackItem icon={<Icon icon="skill-icons:mongodb" />} name={"MongoDB"} />
                            <TechStackItem icon={<Icon icon="skill-icons:vscode-light" />} name={"VScode"} />
                        </div>
                        <div className='py-3'>
                            <p className="font-semibold text-lg text-dark">Other Skills:</p>
                            <div className='grid grid-cols-4 max-md:grid-cols-3 py-1 gap-2 max-sm:grid-cols-2'>
                                <TechStackItem icon={<Icon icon="skill-icons:wordpress" />} name={"Wordpress"} />
                                <TechStackItem icon={<Icon icon="skill-icons:github-light" />} name={"Github"} />
                                <TechStackItem icon={<Icon icon="logos:firebase" />} name={"Firebase"} />
                                <TechStackItem icon={<Icon icon="skill-icons:figma-light" />} name={"Figma"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;