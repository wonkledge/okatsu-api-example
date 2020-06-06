import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import sendResponse from "@wonkledge/okatsu/lib/response";
import Books from '../mockBooks';
import mapFields from "@wonkledge/okatsu/lib/datamapper"

const mapping = [
    {
        source: 'bestSeller',
        target: 'best_seller'
    },
    {
        source: 'sales',
        target: 'sales',
        transform: (sales) => sales > 100000 ? "Damn it, you're famous" : "Who are you ?"
    }
]

// Mock request to db
const fetchBooks = async (req) => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(Books), 1000);
    })
};

const getAllWithMapping = (req, res) => {
    return feature(sendResponse(res), mapFields(mapping), query(fetchBooks))(req);
}

export default getAllWithMapping;