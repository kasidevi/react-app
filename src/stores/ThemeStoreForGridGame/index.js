import { observable } from 'mobx';
class ThemeStoreForGridGame {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = 'Dark';
    }

    updateTheme = () => {
        if (this.selectedTheme === 'Dark') {
            this.selectedTheme = 'Light';
        }
        else {
            this.selectedTheme = 'Dark';
        }
    }
}

const themeStoreForGridgame = new ThemeStoreForGridGame();
export default themeStoreForGridgame;
