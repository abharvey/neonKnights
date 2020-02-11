import { store } from "./ContextProviders/DataProvider";
import { themeToggle } from "./ContextProviders/ThemeProvider";

import Header from "./Header";
import ContentPanel from "./ContentPanel";
import FooterNavigation from "./FooterNavigation";

export { store, themeToggle };

export { Header, ContentPanel, FooterNavigation };

export { ContextProviders } from "./ContextProviders/ContextProviders";
export { CleanStyles } from "./CleanStyles";

export {
    EXTRASMALL,
    SMALL,
    MEDIUM,
    LARGE,
    EXTRALARGE
} from "./ContextProviders/theme";
