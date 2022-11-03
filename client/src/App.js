import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Landing, Home } from './pages/'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </div>
    )
}

export default App
