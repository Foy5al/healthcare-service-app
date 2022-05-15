
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Header/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Login/Register/Register';
import Authprovider from './Context/Authprovider';
import Services from './components/Services/Services';
import Doctors from './components/Services/Doctors/Doctors';
import Appointment from './components/Services/Appointment/Appointment';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';

// custom style for this application
export const myTheme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#f48fb1',
    },
    alternate: {
      main: '#fff',
    },
    text: {
      secondary: '#212121',
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }

});

function App() {
  return (
    <>
      <Authprovider>
        <ThemeProvider theme={myTheme}>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/doctors'>
                <Doctors></Doctors>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
              <Route path='/profile'>
                <Login></Login>
              </Route>
              <Route path='/appointment'>
                <Appointment></Appointment>
              </Route>
              <Route exact path='/services'>
                <Services></Services>
              </Route>
              <Route exact path='/services/details/:servId'>
                <ServiceDetails></ServiceDetails>
              </Route>
              <Route path='*'>
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
        </ThemeProvider>
      </Authprovider>
    </>

  );
}

export default App;
