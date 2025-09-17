import slime_game1 from "../../../assets/games/slime adventure/1.jpg"
import slime_game2 from "../../../assets/games/slime adventure/2.jpg"
import slime_game3 from "../../../assets/games/slime adventure/3.jpg"
import slime_game4 from "../../../assets/games/slime adventure/6.jpg"

import bob_squares from "../../../assets/games/BobSquares/1.jpg"
import cube_land from "../../../assets/games/CubeLand/1.jpg"
import thebasement from "../../../assets/games/The Basement/1.jpg"
import xorcism from "../../../assets/games/Xorcism/1.jpg"

export const gamesData = [
    {
        images: [
            slime_game4,
            slime_game1,
            slime_game2,
            slime_game3
        ],
        video: "https://example.com/video.mp4",
        title: "A Slime's Small Hometown",
        description: "I have finally released a Beta Version of my first ever game on Itch.io",
        releaseDate: "2025-09-16",
        category: "Adventure",
        tags: ["singleplayer", "exploration"],
        link: "https://dustyhanscs.itch.io/a-slimes-small-hometown"
    },
]

export const oldGamesData = [
    {
        images: [
            thebasement
        ],
        video: "https://example.com/video2.mp4",
        title: "The Basement",
        description: "Release Soon",
        releaseDate: "2023-11-01",
        category: "Horror",
        tags: ["singleplayer", "exploration", "dungeon", "thrill", "psychological"],
        link: "soon"
    },
    {
        images: [
            xorcism
        ],
        video: "https://example.com/video3.mp4",
        title: "Xorcism(Discontinued)",
        description: "This is an old game description.",
        releaseDate: "2022-05-01",
        category: "Action",
        tags: ["strategy"],
        link: false
    },
    {
        images: [
            cube_land
        ],
        video: "https://example.com/video4.mp4",
        title: "Cube Land(Discontinued)",
        description: "This is a classic game description.",
        releaseDate: "2021-01-01",
        category: "Puzzle",
        tags: ["strategy"],
        link: false
    },
    {
        images: [
            bob_squares
        ],
        video: "https://example.com/video5.mp4",
        title: "Bob Square(Discontinued)",
        description: "This is a retro game description.",
        releaseDate: "2020-12-01",
        category: "Action",
        tags: ["retro"],
        link: false
    }
]