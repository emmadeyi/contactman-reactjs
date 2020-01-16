import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-primary">
                                    Contact List
                            </span>
                            </h1>
                            {contacts.map((contact) => (
                                <Contact contact={contact} key={contact.id} />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;
