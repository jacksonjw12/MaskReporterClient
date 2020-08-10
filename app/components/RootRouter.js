import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
// import UnAuthorizedRouter from './UnAuthorizedRouter'
// import MainRouter from './MainRouter'
import env from '../environment';
import LoadingPage from "./LoadingPage";
import UnAuthorizedRouter from "./UnAuthorizedRouter";
import MainRouter from "./MainRouter";

export default class RootRouter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            view: 'loading',//loading, UnAuthorizedRouter, MainRouter
            authorized: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }
    async componentDidMount() {
        //do auth here based on saved credentials
        //expected to do nothing if no saved credentials are found

        // const email = await AsyncStorage.getItem('email');
        // const password = await AsyncStorage.getItem('password');
        // if (email && password) {
        //     //login
        //     this.login(email, password, this.handleLogin);
        // }
        if(false){
            this.setState({view:'MainRouter',authorized:true});
        }
        else{
            this.setState({view:"UnAuthorizedRouter"});
        }


    }
    login(email, password, callback) {

    }
    navigate(location) {
        if (this.state.authorized) {
            this.setState({view: location});
        }
    }
    async handleLogin(id, email, verified = false) {

    }
    async handleLogout(logout) {

    }
    handleSignUp(signUp) {

    }
    handleAuth(){
        this.setState({"view":"MainRouter"})
    }

    render() {
        console.log('rendering for', this.state.view);

        if (this.state.view === 'UnAuthorizedRouter') {
            return (
                <UnAuthorizedRouter
                    navigate={this.navigate}
                    onLogin={this.handleLogin}
                    onSignUp={this.handleSignUp}
                    authorize={this.handleAuth}
                />
            );
        } else if (this.state.view === 'MainRouter') {
            return <MainRouter navigate={this.navigate} handleLogout={this.handleLogout} />;
            // return(
            //     <OnBoardRouter
            //         navigate={this.navigate}
            //         onOnBoard={this.handleOnBoard}
            //     />
            // )
        } else{
            return <LoadingPage></LoadingPage>;
        }
    }
}
