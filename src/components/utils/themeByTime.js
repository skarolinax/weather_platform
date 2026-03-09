export function setThemeByTime() {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 13) {
        document.documentElement.setAttribute("data-theme", "morning");
    } else if (currentHour >= 13 && currentHour < 19) {
        document.documentElement.setAttribute("data-theme", "afternoon");
    } else {
        document.documentElement.setAttribute("data-theme", "night");
    }
}