import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { router } from './Routes/Route/Route';
import { darkTheme, GlobalStyles, lightTheme } from './Theme/Theme';


const StyledApp = styled.div`
  color: ${(props)=>props.theme.fontColor}
`

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          {/* <button onClick={themeToggler}>Theme Change</button> */}
          <RouterProvider router={router}></RouterProvider>
          <Toaster />
        </div>
       </StyledApp>
     </ThemeProvider>
  );
}

export default App;
