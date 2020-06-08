import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import sendResponse from "@wonkledge/okatsu/lib/response";
import checkParameters from "@wonkledge/okatsu/lib/validator";
import Books from '../mockBooks';

const validators = [
    {
        field: 'id',
        predicate: id => id.toString().match(/^[0-9]+$/),
        errorMessage: 'id must be integer'
    }
];

// Mock request to db
const fetchBooksById = async (params) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(Books.filter( book => book._doc.id == params.id)), 1000);
    })
};

//path parameter are store inside property params of object req
const getById = (req, res) => {
    console.log(req.params);
    return feature(sendResponse(res), query(fetchBooksById), checkParameters(validators))(req.params);
}

export default getById;