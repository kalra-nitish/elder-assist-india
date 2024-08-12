


import mongoose from "mongoose";
import { ContactUsSchema} from "./contactus.mongo";
import { ContactUs } from "./contactus.type";


export async function postData(queryData: ContactUs): Promise<void> {
    try {
        await mongoose.connect(process.env.Mongo_DB_Connection)
        const contactUsInput = mongoose.model('ContactUs', ContactUsSchema);
        const newQuery = new contactUsInput({...queryData});
        await newQuery.save()
        mongoose.disconnect();
    }
    catch (error) {
        console.error('Failed to post new query details:', error);
        throw error;
    }
}
