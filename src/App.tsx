import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {MyDay} from './pages/Myday';
import {Important}  from './pages/Important';
import {Planned}  from './pages/Planned';
import {AssignedToYou} from "./pages/AssignedToYou"
import {Tasks} from "./pages/Tasks"
import {NewList} from "./pages/Tasks"
import Sidebar from './components/Todofiles/Sidebar';

const App = () => {
  return (   
  <div>
   <Router>
         <Sidebar />
              <Switch>
                <Route path="/tasks/myday" component={MyDay} exact></Route>
                <Route path="/tasks/important" component={Important} exact></Route>
                <Route path="/tasks/planned" component={Planned} exact></Route>
                <Route path="/tasks/assigned_to_me" component={AssignedToYou} exact></Route>
                <Route path="/tasks" component={Tasks} exact></Route>
                <Route  component={NewList}></Route>
            </Switch>
         </Router> 
      </div>
  );
}

export default App;