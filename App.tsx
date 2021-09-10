import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {MyDay} from './pages/TasksCategories/Overview';
import {Important}  from './pages/TasksCategories/Important';
import {Planned}  from './pages/TasksCategories/Planned';
import {AssignedToYou} from "./pages/TasksCategories/AssignedToYou"
import {Tasks} from "./pages/TasksCategories/Tasks"
import {NewList} from "./pages/TasksCategories/Tasks"
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