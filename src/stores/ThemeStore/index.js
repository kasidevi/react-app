import { observable } from 'mobx';
class ThemeStore {
    @observable selectedTheme
    @observable changeThemeToBody
    @observable changeThemeLight

    constructor() {
        this.changeThemeToBody = 'light';
        this.selectedTheme = true;
        this.changeThemeLight = 'light-color';
    }

    updateTheme = () => {
        alert('updateTheme');
        if (this.selectedTheme) {
            this.changeThemeToBody = 'dark';
            this.selectedTheme = false;
            this.changeThemeLight = 'light-dark';
            // this.setState({ changeThemeLight: 'light-dark', selectedTheme: false });
        }
        else {
            this.changeThemeToBody = 'light';
            this.selectedTheme = true;
            this.changeThemeLight = 'light-color';

            //   this.setState({ changeThemeLight: 'light-color', selectedTheme: true });
        }

    }
}

const themeStore = new ThemeStore();
export default themeStore;
