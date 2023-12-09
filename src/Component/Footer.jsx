import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="bg-main-dark py-10" id='contact'>
            <div className="w-10/12 m-auto text-center">
                <h2 className="text-main-light text-2xl font-semibold py-2">Let's discuss on something cool together</h2>
                <p className=' text-sm font-medium py-2 text-light' id='contact-email'>workmail.raghav@gmail.com</p>
                <p className=' text-sm text-light' id='contact-phone'>+91 7737309096</p>
                <div className='flex w-5/12 m-auto justify-center gap-3 py-10'>
                    <div className="text-xl bg-main-light px-3 py-2 rounded-full hover:opacity-70 hover:cursor-pointer" id='contact-github'><a href='https://github.com/Raghavbhati' target="_blank"><i class="fa-brands fa-github"></i></a></div>
                    <div className="text-xl bg-main-light px-3 py-2 rounded-full hover:opacity-70 hover:cursor-pointer" id='contact-linkedin'><a href='https://www.linkedin.com/in/raghavbhatirv/' target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></div>
                    <div className="text-xl bg-main-light px-3 py-2 rounded-full hover:opacity-70 hover:cursor-pointer"><a href='https://twitter.com/raghavbhatirv/' target="_blank"><i class="fa-brands fa-x-twitter"></i></a></div>
                    <div className="text-xl bg-main-light px-3 py-2 rounded-full hover:opacity-70 hover:cursor-pointer"><a href='https://raghavbhati.github.io/' target="_blank"><i class="fa-solid fa-globe"></i></a></div>
                </div>
            </div>
        </div>
    )
}
export default Footer;