import Application from '../Application';
import Resources from '../Utils/Resources';
import ComputerSetup from './Computer';
import MonitorScreen from './MonitorScreen';
import Environment from './Environment';
import Decor from './Decor';
import CoffeeSteam from './CoffeeSteam';
import Cursor from './Cursor';
import AudioManager from '../Audio/AudioManager';
import * as THREE from 'three'; // Import Three.js

export default class World {
    application: Application;
    scene: THREE.Scene;
    resources: Resources;

    // Objects in the scene
    environment!: Environment; // Non-null assertion operator
    decor!: Decor; // Non-null assertion operator
    computerSetup!: ComputerSetup; // Non-null assertion operator
    monitorScreen!: MonitorScreen; // Non-null assertion operator
    coffeeSteam!: CoffeeSteam; // Non-null assertion operator
    cursor!: Cursor; // Non-null assertion operator
    audioManager!: AudioManager; // Non-null assertion operator

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.resources = this.application.resources;

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.environment = new Environment();
            this.decor = new Decor();
            this.computerSetup = new ComputerSetup();
            this.monitorScreen = new MonitorScreen();
            this.coffeeSteam = new CoffeeSteam();
            this.audioManager = new AudioManager();
            // Initialize other objects as needed
        });
    }

    update() {
        if (this.monitorScreen) this.monitorScreen.update();
        if (this.environment) this.environment.update();
        if (this.coffeeSteam) this.coffeeSteam.update();
        if (this.audioManager) this.audioManager.update();
        // Add updates for other objects as needed
    }
}
