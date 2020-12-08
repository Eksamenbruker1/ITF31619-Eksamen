import React from "react"
import {Switch,Route,withRouter}  from 'react-router-dom';

//Components
import Hjem from "../Sider/Hjem";
import Kontorer from "../Sider/Kontorer";
import Kontor from "../Sider/Kontor";
import Fagartikler from "../Sider/Fagartikler";
import Fagartikkel from "../Sider/Fagartikkel";
import OpprettFagartikkel from "../Sider/OpprettFagartikkel";
import OppdaterFagartikkel from "../Sider/OppdaterFagartikkel";
import Kontakt from "../Sider/Kontakt";
import Login from "../Sider/Login";
import Registrer from "../Sider/Registrer";
import Store from "../GlobalState"

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
                    <Route key="login" path="/login/:back" exact component={Login} />
                    <Route key="registrer" path="/registrer/:back" exact component={Registrer} />
                </Switch>
            </Store>
        </div>
)
}

export default withRouter(Routes);