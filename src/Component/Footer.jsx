import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <div className="bg-main-dark py-10">
            <div className="w-10/12 m-auto text-center">
                <h2 className="text-main-light text-2xl font-semibold py-2">Let's discuss on something cool together</h2>
                <p className=' text-sm text-light'>workmail.raghav@gmail.com</p>
                <div className='flex w-5/12 m-auto justify-center gap-3 py-10'>
                    <div className="text-4xl"><Icon icon="skill-icons:github-dark" /></div>
                    <div className="text-4xl"><Icon icon="skill-icons:linkedin" /></div>
                    <div className="text-4xl"><Icon icon="skill-icons:twitter" /></div>
                    <div className="text-4xl"><Icon icon="mynaui:globe" /></div>
                </div>
            </div>
        </div>
    )
}
export default Footer;