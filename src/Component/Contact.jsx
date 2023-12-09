const Contact = () => {
    return (
        <div className="bg-light py-24 react-activity-calendar">
            <div className="w-10/12 m-auto">
                <div className="flex gap-3 justify-between">
                    <img 
                     id="github-streak-stats"
                        src="https://github-readme-stats.vercel.app/api?username=raghavbhati&theme=jolly&show_icons=true&hide_border=false&count_private=true"
                        alt="raghavbhati's Stats"
                    />
                    <img
                    id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=raghavbhati&theme=jolly&show_icons=true&hide_border=false&layout=compact"
                        alt="raghavbhati's Top Languages"
                    />
                    <img
                      id="github-streak-stats"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=raghavbhati&theme=jolly&hide_border=false"
                        alt="raghavbhati's Streak"
                    />
                </div>
            </div>
        </div>
    )
}
export default Contact;