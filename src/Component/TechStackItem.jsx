const TechStackItem = ({icon, name})=>{
    return (
        <div className="flex bg-main-dark rounded-lg p-1 py-1.5 items-center justify-center gap-2 transform transition-transform hover:scale-105 cursor-pointer hover:bg-dark">
            <div className="text-4xl skills-card-img text-center w-3/12">
                {icon}
            </div>
            <div>
                <h2 className="text-white text-base font-medium skills-card-name w-9/12">{name}</h2>
            </div>
        </div>
    )
}
export default TechStackItem;