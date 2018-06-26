// The external interface to the game
class Game {
    constructor() {
        // Nothing for now
    }

    public run(): void {
        console.log(this.welcomeText("Pani Magister"));
    }

    private welcomeText(guest: string): string {
        return `Henlo ${guest}`;
    }
}

// main logic - has to be in the same file for now, until we add rollup.js
const game = new Game();
game.run();