const ProjectItem = ({image, title, description, github, live})=>{
    return(
        <div className="p-3 bg-main-light rounded-lg transform transition-transform hover:scale-105 project-card">
            <div className="w-full">
                <img className="rounded-lg" src="https://via.placeholder.com/1080x720/eee?text=3:2"></img>
            </div>
            <div className="py-3">
                <h2 className="text-main-dark font-semibold text-2xl project-title">{title}</h2>
                <p className="text-dark text-sm project-description">{description}</p>
            </div>
            <div className="flex gap-2 pt-2">
                <a className="w-full text-center bg-main-dark rounded-md text-white py-1.5 font-medium cursor-pointer hover:bg-main project-github-link" href={github}>Github</a>
                <a className="w-full text-center bg-main-dark rounded-md text-white py-1.5 font-medium cursor-pointer hover:bg-main project-deployed-link" href={live}>Live Demo</a>
            </div>
        </div>
    )

}
export default ProjectItem;