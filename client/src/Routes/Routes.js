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
import OpprettKategori from "../Sider/OpprettFagartikkel";
import Kontakt from "../Sider/Kontakt";
import Registrer from "../Sider/Registrer";
import Login from "../Sider/Login";


const Routes = ({location}) => {
    
    const exlcudedPaths = [
        '/registrer',
        '/Create-poll'

    ]
return(
        <div className="App">
               
                <Switch>
                    <Route  path="/" exact component={Hjem} />
                    <Route path="/kontorer" exact component={Kontorer} />
                    <Route path="/kontor" exact component={Kontor} />
                    <Route path="/fagartikler" exact component={Fagartikler} />
                    <Route path="/fagartikkel" exact component={Fagartikkel} />
                    <Route path="/registrer" exact component={Registrer} />
                    <Route path="/opprett-fagartikkel" exact component={OpprettFagartikkel} />
                    <Route path="/oppdater-fagartikkel" exact component={OppdaterFagartikkel} />
                    <Route path="/opprett-fagartikkel" exact component={OpprettKategori} />
                    <Route path="/kontakt" exact component={Kontakt} />
                    <Route path="/login" exact component={Login} />
                </Switch>
        </div>
)
}

export default withRouter(Routes);