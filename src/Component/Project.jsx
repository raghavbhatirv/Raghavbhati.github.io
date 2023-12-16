import ProjectItem from "./ProjextItem";

const Project = () => {
    return (
        <div className="w-full bg-main-dark py-14 " id="projects">
            <div className="m-auto w-10/12">
                <h2 className="text-main-light text-4xl font-semibold py-1.5">My Projects</h2>
                <p className="text-white font-normal text-xl py-0.5">Project that I've made so far:</p>
                <div className="py-8 grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2">
                    <ProjectItem
                        title={"Wood Fans Clone"}
                        description={"Crafted comfort, sustainable furniture for stylish, relaxing sanctuaries."}
                        github={"https://github.com/Raghavbhati/wood-fans"}
                        live={"https://obscene-clam-8417.vercel.app/"}
                        tech={["React", "Redux", "Javascript", "Tailwind CSS", "Firebase"]}
                    />
                    <ProjectItem
                        title={"Boat Clone"}
                        description={"Stylish audio gear site, user-friendly, authentic alternative."}
                        github={"https://github.com/RohanKansara01/boAt-Website-Clone"}
                        live={"https://shivering-need-4074.netlify.app/"}
                        tech={["HTML", "CSS", "Javascript"]}
                    />
                    <ProjectItem
                        title={"Glossier Clone"}
                        description={"Minimalist beauty brand, renowned for clean, chic product designs"}
                        github={"https://github.com/Saurav9284/Unite-5-Project-Female-Beauty-Product-"}
                        live={"https://delightful-phoenix-888d86.netlify.app/"}
                        tech={["HTML", "CSS", "Javascript", "Firebase"]}
                    />
                    <ProjectItem
                        title={"Glossier Clone"}
                        description={"Minimalist beauty brand, renowned for clean, chic product designs"}
                        github={"https://github.com/Saurav9284/Unite-5-Project-Female-Beauty-Product-"}
                        live={"https://delightful-phoenix-888d86.netlify.app/"}
                        tech={["HTML", "CSS", "Javascript", "Firebase"]}
                    />
                </div>
            </div>
        </div>
    )
}
export default Project;