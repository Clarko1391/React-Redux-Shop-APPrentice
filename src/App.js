import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import LandingPageContainer from './containers/LandingPageContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import RegistrationPageContainer from './containers/RegistrationPageContainer'
import UserSettingsContainer from './containers/UserSettingsContainer';
import MeasurementConverterContainer from "./containers/MeasurementConverterContainer";
import FractionalCalculatorContainer from './containers/FractionalCalculatorContainer'
import ReferenceManualContainer from './containers/ReferenceManualContainer'
import TapAndDie from './pages/refManualPages/TapAndDie'
import WrenchSize from './pages/refManualPages/WrenchSize'
import DrillSize from './pages/refManualPages/DrillSize'
import UserAdd from './pages/refManualPages/UserAdd'

// CSS
const Body = styled.div`
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom,#383838, #383838, #6b2b2f, #6b2b2f);
  overflow-x: hidden;
`

function App( {store} ) {
  return (
    <Body>
      <Provider store={store} >
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={LandingPageContainer} />
                <Route path='/Login' render={(props) => (<LoginPageContainer {...props} userName={null} password={null} isLogged={false} />)} />
                <Route path='/Registration' component={RegistrationPageContainer} />
                <Route path='/UserSettings' component={UserSettingsContainer} />
                <Route path='/MeasurementConverter' component={MeasurementConverterContainer} />
                <Route path='/FractionalCalculator' component={FractionalCalculatorContainer} />
                <Route path='/ReferenceManual' exact component={ReferenceManualContainer} />
                <Route path='/ReferenceManual/TapAndDie' component={TapAndDie} />
                <Route path='/ReferenceManual/WrenchSize' component={WrenchSize} />
                <Route path='/ReferenceManual/DrillSize' component={DrillSize} />
                <Route path='/ReferenceManual/UserAdd' component={UserAdd} />
            </Switch>
            <Footer />
        </Router>
      </Provider>
    </Body>
  );
}

export default App;
