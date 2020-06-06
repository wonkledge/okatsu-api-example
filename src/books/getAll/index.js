import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import sendResponse from "@wonkledge/okatsu/lib/response";
import Books from '../mockBooks';


// Mock request to db
const fetchBooks = async () => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(Books), 1000);
    })
};

const getAll = (req, res) => {
    return feature(sendResponse(res), query(fetchBooks))(req);
}

export default getAll;