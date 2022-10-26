import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor:"black"
}
export const darkTheme = {
    body:"#000",
    fontColor:"white"
}
 
export const GlobalStyles = createGlobalStyle`
    
        body{
            background-color:${(props)=>props.theme.body}
        }
`