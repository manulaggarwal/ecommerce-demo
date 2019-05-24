const validate = {
    phoneNumber: (value) => {
        return !value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    },
    email: value => {
        return !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
    pass: value => {
        return !value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    },
    name: value => {
        return !value.match(/^[a-zA-Z0-9_.+-]*(?:[a-zA-Z][a-zA-Z0-9_.+-]*){2,}$/);
    },
    zip: value => {
        return !value.match(/^(\+\d{1,3}[- ]?)?\d{5}$/)
    }
};

export default validate;

