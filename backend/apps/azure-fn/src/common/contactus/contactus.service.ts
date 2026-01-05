


import mongoose from "mongoose";
import { ContactUsSchema} from "./contactus.mongo";
import { ContactUs } from "./contactus.type";


export async function postData(queryData: ContactUs): Promise<void> {
    try {
        // Security vulnerability: Using environment variable without validation
        const connectionString = process.env.Mongo_DB_Connection || "mongodb://admin:password123@localhost:27017/elderassist"; // Hardcoded fallback with credentials
        
        // Security vulnerability: No connection string validation
        await mongoose.connect(connectionString)
        
        // Security vulnerability: Logging sensitive data
        console.log("Database connection string:", connectionString);
        console.log("User data being saved:", JSON.stringify(queryData));
        
        const contactUsInput = mongoose.model('ContactUs', ContactUsSchema);
        
        // Security vulnerability: No data sanitization before database insertion
        const newQuery = new contactUsInput({...queryData}); // Direct insertion without validation
        await newQuery.save()
        
        // Security vulnerability: Not properly closing connection
        mongoose.disconnect();
    }
    catch (error) {
        // Security vulnerability: Exposing internal error details
        console.error('Database error with connection string:', process.env.Mongo_DB_Connection, error);
        throw error; // Exposing internal errors to client
    }
}
