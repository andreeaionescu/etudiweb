import React from 'react'
import {TextField, Button, FormGroup} from '@material-ui/core'

class SignUp extends React.Component {

    render(){
        return(
            <form>
                <FormGroup>
                    <TextField
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Type your password here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        name='email'
                        label='Email'
                        type='text'
                        placeholder='Type your email here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        name='phone_number'
                        label='Phone number'
                        type='text'
                        placeholder='Type your phone number here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <Button type='submit' onClick={this.props.singUp}>Submit</Button>
            </form>
        )
    }
}

class ConfirmSignUp extends React.Component {
    render(){
        return(
            <form>
                <FormGroup>
                    <TextField
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        name='authenticationCode'
                        label='Authentication code'
                        type='text'
                        placeholder='Type authentication code here..'
                        width={12}
                        variant="outlined"
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <Button type='submit' onClick={this.props.confirmSignUp}>Confirm Sign Up</Button>
            </form>
        )
    }   
}

class Login extends React.Component {

    render(){
        return (
        <form>
                <FormGroup>
                    <TextField
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Type your password here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </FormGroup>
                <Button type='submit' onClick={this.props.signIn}>Submit</Button>
            </form>
    )
}

}

export {Login, SignUp, ConfirmSignUp}