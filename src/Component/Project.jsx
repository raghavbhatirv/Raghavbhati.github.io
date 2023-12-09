import ProjectItem from "./ProjextItem";

const Project = () =>{
    return (
        <div className="w-full bg-main-dark py-14 ">
            <div className="m-auto w-10/12">
                <h2 className="text-main-light text-4xl font-semibold py-1.5">My Projects</h2>
                <p className="text-white font-normal text-xl py-0.5">Project that I've made so far:</p>
                <div className="py-8 flex gap-7">
                    <ProjectItem title={"Wood Fans Clone"} description={"Crafted comfort, sustainable furniture for stylish, relaxing sanctuaries."}/>
                    <ProjectItem title={"Boat Clone"} description={"Stylish audio gear site, user-friendly, authentic alternative."}/>
                    <ProjectItem title={"Glossier Clone"} description={"Minimalist beauty brand, renowned for clean, chic product designs"}/>
                </div>
            </div>
        </div>
    )
}
export default Project;