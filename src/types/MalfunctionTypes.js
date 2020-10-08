import { Apple, Drone, Pencil } from '../components/icons/Icons';

const malfucntionsTypes = [
    {
        type: "drone_crashed",
        text: "Drone crashed",
        icon: Drone
    },
    {
        type: "drone_dropped_fruit",
        text: "Drone dropped fruit",
        icon: Apple
    },
    {
        type: "custom",
        text: "other",
        icon: Pencil
    }
]

export default malfucntionsTypes;