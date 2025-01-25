data: {
    isDarkMode: false,
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark');
        // Additional dark mode logic if needed
    }
}