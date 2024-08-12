import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { postData } from "../common/contactus/contactus.service";
import { ContactUs, validateContactUs } from "../common/contactus/contactus.type";

export async function fn_contact_us(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    // Validate the request first and then call the service
    // Assuming request.body is of type ContactUs or undefined
    const bodytext = await request.text();
    
    try {
        if (!bodytext) {
            throw new Error("Request body is empty or not in the expected format");
        }
        const contactUsInput : ContactUs= JSON.parse(bodytext);
        validateContactUs(contactUsInput);
        await postData(contactUsInput);
        return { status: 200, body: 'Data posted successfully' };
    } catch (error) {
        // Assuming error is of type Error
        const errorMessage = (error instanceof Error) ? error.message : "An unknown error occurred";
        return { status: 400, body: errorMessage };
    }
};

app.http('fn_contact_us', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: fn_contact_us
});