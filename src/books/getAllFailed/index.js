import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import sendResponse from "@wonkledge/okatsu/lib/response";

// Mock request to db
const fetchBooks = async (req) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => reject('Something wrong happened'), 1000);
    })
};

const getAllFailed = (req, res) => {
    return feature(sendResponse(res), query(fetchBooks))(req);
}

export default getAllFailed