import { Icon } from '@iconify/react';
import TechStackItem from './TechStackItem';
const About = () => {
    return (
        <div className="bg-light w-full">
            <div className="w-10/12 m-auto py-10">
                <div className="flex about section" id='about'>
                    <div className="w-5/12">
                        <h2 className="font-semibold text-dark text-2xl py-2">About me</h2>
                        <p className="text-main-dark ">My tech journey kicked off with a passion for content creation on YouTube and then this passion soon extended to blogging. The world of possibilities in web development soon captivated me, especially during my time working on WordPress.</p>
                        <br></br>
                        <p className="text-main-dark"> Keen to explore the intricate world of coding further, I enrolled in the Masai School bootcamp. This decision marked a significant milestone in my ongoing tech voyage.</p>
                    </div>
                </div>
                <div className="flex justify-between" id='skills'>
                    <div>

                    </div>
                    <div className="text-left w-6/12">
                        <h2 className="font-semibold text-dark text-2xl py-1">My Skills</h2>
                        <p className="font-semibold text-dark">Tech stack I've working with</p>
                        <div className='grid grid-cols-4 py-4 gap-2'>
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
                            <div className='grid grid-cols-4 gap-2'>
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