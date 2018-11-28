import moment from "moment";

//as we need a test expense data 
export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0//Jan 1 1975
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }];