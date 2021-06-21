import { themeBackgroundColor, themeDarkColor, themeLightColor, themeLightText, themeMidColor } from '../globalStyles'

const navbarHeight = 70

const sidebarWidth = 100

export const navbarStyle = {
    height: navbarHeight,
    display: "block",
    backgroundColor: themeBackgroundColor

};

export const navlinkContainerStyle = {
    textAlign: "center",
    verticalAlign: "center",
    height: "100%",
    padding: 10,
    minHeight: navbarHeight,
    backgroundColor: themeBackgroundColor
};

export const navlinkStyleBuilder = (selected) => {
    return { 
        textDecoration: "none",
        margin: "100",
        backgroundColor: selected ? themeMidColor : themeBackgroundColor,
        fontSize: "24px",
        fontWeight: "bold",
        height: "100%",
        color: themeLightText
    };
};

export const sidebarStyle = {
    backgroundColor: themeDarkColor,
    width: sidebarWidth,
    display: "inline-block",
    height: "100vh"
}

export const cornerButtonStyle = {
    width: sidebarWidth,
    display: "inline-block",
    color: themeLightColor,
    alignContent: "center",
    textAlign: "center",
    verticalAlign: "center",
    paddingTop: 10
}