const ProjectItem = ({image, title, description, github, live, tech})=>{
    console.log(github)
    console.log(live)
    return(
        <div className="p-3 bg-main-light rounded-lg transform transition-transform hover:scale-105 project-card">
            <div className="w-full">
                <img className="rounded-lg" src={image}></img>
            </div>
            <div className="py-3">
                <h2 className="text-main-dark font-semibold text-2xl project-title">{title}</h2>
                <p className="text-dark text-sm project-description">{description}</p>
                <div className="flex flex-wrap gap-1 pt-2 project-tech-stack">
                    {tech.map((element)=>(
                        <h2 className="bg-dark rounded-md px-2 text-light text-sm ">{element}</h2>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 pt-2">
                <a className="w-full text-center bg-main-dark rounded-md text-white py-1.5 font-medium cursor-pointer hover:bg-main project-github-link" href={github}><i className="fa-brands fa-github pr-1"></i>Github</a>
                <a className="w-full text-center bg-main-dark rounded-md text-white py-1.5 font-medium cursor-pointer hover:bg-main project-deployed-link" href={live}> <i class="fa-solid fa-arrow-trend-up pr-1"></i>Live Demo</a>
            </div>
        </div>
    )

}
export default ProjectItem;