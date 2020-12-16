import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import NavbarContainer from './client/containers/NavbarContainer'
import Footer from './client/components/Footer';
import LandingPageContainer from './client/containers/LandingPageContainer';
import LoginPageContainer from './client/containers/LoginPageContainer';
import RegistrationPageContainer from './client/containers/RegistrationPageContainer'
import UserSettingsContainer from './client/containers/UserSettingsContainer';
import MeasurementConverterContainer from "./client/containers/MeasurementConverterContainer";
import FractionalCalculatorContainer from './client/containers/FractionalCalculatorContainer';
import ReferenceManualContainer from './client/containers/ReferenceManualContainer';
import ReferencePageContainer from './client/containers/ReferencePageContainer';

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
            <NavbarContainer />
            <Switch>
                <Route path='/' exact component={LandingPageContainer} />
                <Route path='/Login' render={() => (<LoginPageContainer userName={null} password={null} isLogged={false} />)} />
                <Route path='/Registration' component={RegistrationPageContainer} />
                <Route path='/UserSettings' component={UserSettingsContainer} />
                <Route path='/MeasurementConverter'  render={() => (<MeasurementConverterContainer />)}/>
                <Route path='/FractionalCalculator' component={FractionalCalculatorContainer} />
                <Route path='/ReferenceManual' exact component={ReferenceManualContainer} />
                <Route path='/ReferenceManual/TapAndDie' render={() => (<ReferencePageContainer referenceId="TapAndDie" referenceType="TapAndDie" chartTitle="Tap and Die Chart"/>)} />
                <Route path='/ReferenceManual/WrenchSize' render={() => (<ReferencePageContainer referenceId="WrenchSize" referenceType="WrenchSize" chartTitle="Wrench Sizing Chart"/>)} />
                <Route path='/ReferenceManual/DrillSize' render={() => (<ReferencePageContainer referenceId="DrillSize" referenceType="DrillSize" chartTitle="Drill Bit Size Chart"/>)} />
            </Switch>
            <Footer />
        </Router>
      </Provider>
    </Body>
  );
}

export default App;
