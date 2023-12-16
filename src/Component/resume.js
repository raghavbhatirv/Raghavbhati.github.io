import resume from "../Assets/RaghavResume.pdf"
export const handleDwonloadResume = () => {
    const link = document.createElement("a");
    link.download = "RaghavBhati.pdf";
    link.href = resume;
    link.click();
    window.open("https://drive.google.com/file/d/1VS0vfkt7mivJBgBKkpC9qLRbClTU6S_5/view?usp=sharing", "_blank");
}
