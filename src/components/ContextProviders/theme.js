import { css } from "styled-components";

import themed from "theme-responsively";

export const EXTRASMALL = "extraSmall";
export const SMALL = "small";
export const MEDIUM = "medium";
export const LARGE = "large";
export const EXTRALARGE = "extraLarge";

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
    [MEDIUM]: "1.35rem",
    [LARGE]: "1.6rem",
    [EXTRALARGE]: "2rem"
};

const theme = {
    [SMALL]: {
        break: { max: 1024 },
        spacing: {
            [SMALL]: space[EXTRASMALL],
            [MEDIUM]: space[SMALL],
            [LARGE]: space[MEDIUM]
        },
        font: {
            [SMALL]: `font-size: ${fontSize[EXTRASMALL]}`,
            [MEDIUM]: `font-size: ${fontSize[SMALL]}`,
            [LARGE]: `font-size: ${fontSize[MEDIUM]}`
        }
    },
    [LARGE]: {
        break: { min: 1023 },
        spacing: {
            [SMALL]: space[SMALL],
            [MEDIUM]: space[LARGE],
            [LARGE]: space[EXTRALARGE]
        },
        font: {
            [SMALL]: `font-size: ${fontSize[MEDIUM]}`,
            [MEDIUM]: `font-size: ${fontSize[LARGE]}`,
            [LARGE]: `font-size: ${fontSize[EXTRALARGE]}`
        }
    }
};

export const radical90s = {
    primary: "#EA4693",
    secondary: "#52489C",
    tertiary: "#77EFBF",

    primaryBackground: "#49CBE5",
    secondaryBackground: "#CFE560",

    primaryText: "#2D2856",
    secondaryText: "#F9CCE1",

    error: "#FA113D"
};

export const darkMode = {
    primary: "#444",
    secondary: "#0E0F19",

    primaryBackground: "#000000",
    secondaryBackground: "#222",

    primaryText: "#DDD",
    secondaryText: "#666",

    error: "#FA113D"
};

export default colors => ({
    colors,
    sizing: themed(css)(theme, "spacing"),
    font: themed(css)(theme, "font")
});
