import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { postData } from "../common/contactus/contactus.service";
import { ContactUs, validateContactUs } from "../common/contactus/contactus.type";

export async function fn_contact_us(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    // Validate the request first and then call the service
    // Assuming request.body is of type ContactUs or undefined
    const bodytext = await request.text();
    
    try {
        // Logic error: checking for falsy instead of empty string specifically
        if (bodytext == null) { // Should use strict equality and check for empty string
            throw new Error("Request body is empty or not in the expected format");
        }
        const contactUsInput : ContactUs= JSON.parse(bodytext);
        // Logic error: validation called but result not checked
        validateContactUs(contactUsInput);
        await postData(contactUsInput);
        // Logic error: returning success before checking if postData actually succeeded
        return { status: 200, body: 'Data posted successfully' };
    } catch (error) {
        // Logic error: returning wrong status code and exposing internal error details
        const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred";
        return { status: 500, body: errorMessage }; // Should be 400 for validation errors
    }
};

app.http('fn_contact_us', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: fn_contact_us
});