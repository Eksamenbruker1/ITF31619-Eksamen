import React from "react"
import {Switch,Route,withRouter,Redirect}  from 'react-router-dom';
import { useAuthContext } from '../Components/context/AuthProvider';
//Components
import Hjem from "../Sider/Hjem";
import Kontorer from "../Sider/Kontorer";
import Kontor from "../Sider/Kontor";
import Fagartikler from "../Sider/Fagartikler";
import Fagartikkel from "../Sider/Fagartikkel";
import OpprettFagartikkel from "../Sider/OpprettFagartikkel";
import OppdaterFagartikkel from "../Sider/OppdaterFagartikkel";
import Profil from "../Sider/Profil";
import Kontakt from "../Sider/Kontakt";
import Login from "../Sider/Login";
import Registrer from "../Sider/Registrer";
import Store from "../GlobalState"


const AuthenticatedRoutes = ({ children, ...rest }) => {
    const { isLoggedIn, isLoading } = useAuthContext();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn && !isLoading ? (
            <div>{children}</div>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  
  const AdminRoutes = ({ children, ...rest }) => {
    const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
  
    return (
      <Route
        {...rest}
        render={() => isLoggedIn && isAdmin && !isLoading && children}
      />
    );
  };

const Routes = ({location}) => {

    const login = "login"
    const register = "register"

    const exlcudedPaths = [
        '/registrer',
        '/Create-poll'

    ]
    
return(
        <div className="App">
            <Store>
                <Switch>
                    <Route  path="/" exact component={Hjem} />
                    <Route path="/kontorer" exact component={Kontorer} />
                    <Route path="/kontor/:navn" exact component={Kontor} />
                    <Route path="/fagartikler" exact component={Fagartikler} />
                    <Route path="/fagartikkel/:artikkel" exact component={Fagartikkel} />
                    <Route path="/opprett-fagartikkel" exact component={OpprettFagartikkel} />
                    <Route path="/oppdater-fagartikkel/:artikkel" exact component={OppdaterFagartikkel} />
                    <Route path="/kontakt" exact component={Kontakt} />
                    <Route path="/profil" exact component={Profil} />
                    <Route key="login" path="/login/:back" exact component={Login} />
                    <Route key="registrer" path="/registrer/:back" exact component={Registrer} />
                </Switch>
            </Store>
        </div>
)
}

export default withRouter(Routes);