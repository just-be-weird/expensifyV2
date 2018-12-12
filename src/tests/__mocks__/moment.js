// import moment = require("moment");//this we can't use here as this will try to import mocked version of moment whick will lead to error 

const moment = jest.requireActual('moment');// this will import actual moment not mocked

export default ( timestamp = 0 ) => {
    return moment(timestamp);
};