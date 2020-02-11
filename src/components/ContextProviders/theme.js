import { css } from "styled-components";

import themed, { breakpoints } from "theme-responsively";

export const EXTRASMALL = "extraSmall";
export const SMALL = "small";
export const MEDIUM = "medium";
export const LARGE = "large";
export const EXTRALARGE = "extraLarge";
export const GIGANTIC = "gigantic";

const space = {
    [EXTRASMALL]: 4,
    [SMALL]: 8,
    [MEDIUM]: 12,
    [LARGE]: 16,
    [EXTRALARGE]: 20
};

const fontSize = {
    [EXTRASMALL]: "0.75rem",
    [SMALL]: "1rem",
    [MEDIUM]: "1.5rem",
    [LARGE]: "2rem",
    [EXTRALARGE]: "2.5rem"
};

const breaks = {
    [SMALL]: { max: 1024 },
    [LARGE]: { min: 1023 }
};

const theme = {
    [SMALL]: {
        break: breaks[SMALL],
        spacing: {
            [SMALL]: space[MEDIUM],
            [MEDIUM]: space[LARGE],
            [LARGE]: space[EXTRALARGE]
        },
        font: {
            [SMALL]: `font-size: ${fontSize[MEDIUM]}`,
            [MEDIUM]: `font-size: ${fontSize[LARGE]}`,
            [LARGE]: `font-size: ${fontSize[EXTRALARGE]}`
        }
    },
    [LARGE]: {
        break: breaks[LARGE],
        spacing: {
            [SMALL]: space[SMALL],
            [MEDIUM]: space[MEDIUM],
            [LARGE]: space[LARGE]
        },
        font: {
            [SMALL]: `font-size: ${fontSize[SMALL]}`,
            [MEDIUM]: `font-size: ${fontSize[MEDIUM]}`,
            [LARGE]: `font-size: ${fontSize[LARGE]}`
        }
    }
};

export const radical90s = {
    primary: "#FF2188",
    secondary: "#52489C",
    tertiary: "#77EFBF",

    primaryBackground: "#49CBE5",
    secondaryBackground: "#CFE560",
    lightBackground: "#fffafa",

    dropShadow: "#2D2856",

    lightText: "#fffafa",
    darkText: "#2D2856",

    error: "#FA113D"
};

export const darkMode = {
    primary: "#444",
    secondary: "#0E0F19",

    primaryBackground: "#000000",
    secondaryBackground: "#222",

    lightText: "#DDD",
    secondaryText: "#666",

    error: "#FA113D"
};

export default colors => ({
    colors,
    sizing: themed(css)(theme, "spacing"),
    font: themed(css)(theme, "font"),
    breakpoints: breakpoints(css)(breaks)
});
