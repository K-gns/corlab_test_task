export const scrollToElement = (elementId: string) => {
    if (typeof document !== 'undefined') {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
};