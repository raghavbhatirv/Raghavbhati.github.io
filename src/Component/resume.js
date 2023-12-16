import resume from "../Assets/RaghavResume.pdf"
export const handleDwonloadResume = () => {
    const link = document.createElement("a");
    link.download = "RaghavBhati.pdf";
    link.href = resume;
    link.click();
}
