var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'data:image/jpeg;base64,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'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];

var Contact = React.createClass({
    render: function () {
        return (
            <li className="contact">
                <img className="contact-image" src={this.props.image} alt=""/>
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div className="contact-number">{this.props.phoneNumber}</div>
                </div>
            </li>
        );
    }
});

var ContactsList = React.createClass({
    getInitialState: function () {
        return {
            displayedContacts: CONTACTS
        };
    },

    heandleSearch: function (e) {
        var searchQuery = e.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render: function () {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.heandleSearch}/>

                <ul className="contact-list">
                    {
                        this.state.displayedContacts.map(function (el) {
                            return <Contact key={el.id}
                                            name={el.name}
                                            phoneNumber={el.phoneNumber}
                                            image={el.image}
                            />;
                        })
                    }
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <ContactsList />,
    document.getElementById('content')
);