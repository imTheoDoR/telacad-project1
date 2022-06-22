import React, { Component } from 'react';
import { 
    Container, 
    Form, 
    Label, 
    Input, 
    InputItems, 
    Submit 
} from './User.styled';

class UserAddFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Specificam starea initiala al componentelor
            name: '',
            email: '',
            isGoldClient: false,
            errors: ''
        }
    }

    handleNameChange(event) {
        // console.log(event.target.value)
        const inputValue = event.target.value;
        this.setState({name: inputValue});
    }

    handleEmailChange(event) {
        const inputValue = event.target.value;
        this.setState({email: inputValue});
    }

    handleIsClientGoldChange(event) {
        const checkedValue = event.target.checked;
        this.setState({isGoldClient: checkedValue});
    }

    render() {
        const { name, email, isGoldClient } = this.state;
        const { submitAddForm } = this.props;

        return (
            <Container>
                <Form onSubmit={(event) => submitAddForm(event, name, email, isGoldClient)}>
                    <span>{this.props.errors}</span>
                    <InputItems>
                        <Label inputLabel uppercase htmlFor='name'>Nume</Label>
                        <Input 
                            type='text' 
                            name='name' 
                            value={this.state.name}
                            onChange={(event) => { this.handleNameChange(event) }}
                            useWidth
                        />
                    </InputItems>

                    <InputItems>
                        <Label inputLabel uppercase htmlFor='email'>Email</Label>
                        <Input 
                            type='email' 
                            name='email' 
                            value={this.state.email} 
                            onChange={(event) => { this.handleEmailChange(event) }}
                            useWidth
                        />
                    </InputItems>

                    <InputItems>
                        <Label htmlFor='gold-client'>Este client gold?</Label>
                        <Input 
                            type='checkbox' 
                            name='gold-client' 
                            checked={this.state.isGoldClient}
                            onChange={(event) => { this.handleIsClientGoldChange(event) }}
                        />
                    </InputItems>
                    
                    <Submit type='submit'>Adauga utilizator</Submit>
                </Form>
            </Container>
        );
    }
}

export default UserAddFrom;