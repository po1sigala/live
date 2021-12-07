import { boxClick } from "./box";
import {headerClick} from "./header";
import '../css/style.css';
// Import images as Yellow and Blue
import Yellow from '../images/yellow-robot.png';
import Blue from '../images/blue-robot.png';

document.getElementById("boxBtn").addEventListener("click", boxClick);
document.getElementById("headerBtn").addEventListener("click", headerClick);

// Set src of #box element to Yellow
document.getElementById("box").src = Yellow;