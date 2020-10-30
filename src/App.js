import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import LandingPageContainer from './containers/LandingPageContainer';
// import MeasurementConverter from './pages/MeasurementConverter'
// import FractionalCalculator from './pages/FractionalCalculator'
// import ReferenceManual from './pages/ReferenceManual'
// import TapAndDie from './pages/refManualPages/TapAndDie'
// import WrenchSize from './pages/refManualPages/WrenchSize'
// import DrillSize from './pages/refManualPages/DrillSize'
// import UserAdd from './pages/refManualPages/UserAdd'

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
                {/* <Route path='/MeasurementConverter' component={MeasurementConverter} />
                <Route path='/FractionalCalculator' component={FractionalCalculator} />
                <Route path='/ReferenceManual' exact component={ReferenceManual} />
                <Route path='/ReferenceManual/TapAndDie' component={TapAndDie} />
                <Route path='/ReferenceManual/WrenchSize' component={WrenchSize} />
                <Route path='/ReferenceManual/DrillSize' component={DrillSize} />
                <Route path='/ReferenceManual/UserAdd' component={UserAdd} /> */}
            </Switch>
            <Footer />
        </Router>
      </Provider>
    </Body>
  );
}

export default App;
