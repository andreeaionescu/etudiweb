import React from 'react';
import { Grid } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import { Login, SignUp, ConfirmSignUp } from './../components/login.js';
import SimpleLogo from './../components/simpleLogo.js';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            authenticationCode: '',
            step: 0,
            existingUser: null,
        }
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    signUp = async () => {
        const {username, password, email, phone_number } = this.state
        try {
            await Auth.signUp({ username, password, attributes: {email, phone_number}})
            console.log('successfully signed up!')
            this.setState({step: 1})
        } catch (err) {
            console.log('error signing up: ', err)
            if (err.code === "UsernameExistsException") {
                this.setState({existingUser: true, errMessage: err.message})
            }
        }
    }

    confirmSignUp = async () => {
        const { username, authenticationCode } = this.state
        try {
            await Auth.confirmSignUp(username, authenticationCode)
            console.log('user succesfully signed up!')
            this.setState({step: 2})
        } catch (err) {
            console.log('error confirming sing up: ', err)
        }
    }

    signIn = async () => {
        const { username, password } = this.state
        try {
            await Auth.signIn(username, password)
            console.log('user succesfully signed in!')
            this.setState({signedIn: true})
        } catch (err) {
            console.log('error logging in: ', err)
        }
    }

    clickSignIn = () => {
        this.setState({existingUser: false})
    }

    clickLogIn = () => {
        this.setState({existingUser: true})
    }

    displaySignUpOptions = () => {
        switch(this.state.step){
            case 0:
                return <SignUp singUp={this.signUp} handleOnChange={this.handleOnChange}/>
                break;
            case 1:
                return <ConfirmSignUp confirmSignUp={this.confirmSignUp} handleOnChange={this.handleOnChange}/>
                break;
            default:
                return <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/>
        }
    }

    displayBasedOnUserType = (existingUser) => {
        if (!existingUser) return
        return existingUser===true ? <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/> : this.displaySignUpOptions()
    }

    render(){
        const classes = this.props.classes;

        return (
            <Grid container spacing={4} direction="column" justify="center" alignItems="center" style={{height:'80%'}}>
                <Grid item>
                    <SimpleLogo classes={classes}/>
                </Grid>
                <Grid item>
                    {this.state.existingUser ? <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/> : this.displaySignUpOptions(this.state.step)}    
                </Grid>
            </Grid>
        )
    }

}

export default LoginForm