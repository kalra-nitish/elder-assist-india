"use client";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Privacy Policy">
        <section className="cookies-1-section">
          <div className="auto-container">
            <div className="section_heading mb_20"></div>
            <div className="privacy-container">
              <ul>
                <h4>Information Collection and Use</h4>
                <p>
                  We collect several types of information to provide and improve
                  our services to you, including personal data, usage data, and
                  tracking data.
                </p>
                <ol>
                  <li>
                    <strong>Personal Data:</strong> While using our Website, we
                    may ask you to provide us with certain personally
                    identifiable information, such as your name, email address,
                    phone number, and address. This information is used to
                    contact or identify you.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We may also collect information
                    on how the Website is accessed and used. This may include
                    your computer's Internet Protocol (IP) address, browser
                    type, browser version, the pages of our Website that you
                    visit, the time and date of your visit, and other diagnostic
                    data.
                  </li>
                  <li>
                    <strong>Tracking & Cookies Data:</strong> We use cookies and
                    similar tracking technologies to track activity on our
                    Website and hold certain information.
                  </li>
                </ol>
              </ul>
              <li>
                <h4 className="privacy-headers">Use of Data</h4>
                <p>We use the collected data for various purposes:</p>
                <ul>
                  <li>To provide and maintain our services.</li>
                  <li>To notify you about changes to our services.</li>
                  <li>
                    To allow you to participate in interactive features of our
                    service.
                  </li>
                  <li>To provide customer support.</li>
                  <li>
                    To gather analysis or valuable information so that we can
                    improve our services.
                  </li>
                  <li>To monitor the usage of the website.</li>
                  <li>To detect, prevent and address technical issues.</li>
                </ul>
              </li>
              <li>
                <h4 className="privacy-headers">Data Security</h4>
                <p>
                  The security of your data is important to us. We use
                  commercially acceptable means to protect your personal
                  information, but we cannot guarantee its absolute security.
                </p>
              </li>
              <li>
                <h4>Disclosure of Data</h4>
                <p>
                  We may disclose your personal information to third parties in
                  the following circumstances:
                </p>
                <ul>
                  <li>To comply with a legal obligation.</li>
                  <li>To protect and defend our rights or property.</li>
                  <li>
                    To prevent or investigate possible wrongdoing in connection
                    with our services.
                  </li>
                  <li>
                    To protect the personal safety of users of our services or
                    the public.
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="privacy-headers">Data Retention</h4>
                <p>
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected
                  or to comply with legal obligations.
                </p>
              </li>
              <li>
                <h4 className="privacy-headers">Your Rights</h4>
                <p>
                  You have the right to access, update, or delete your personal
                  information. If you wish to exercise any of these rights,
                  please contact us at info@elderassistindia.com.
                </p>
              </li>
              <li>
                <h4 className="privacy-headers">Third-Party Links</h4>
                <p>
                  Our Website may contain links to other sites that are not
                  operated by us. We are not responsible for the content or
                  privacy practices of these other sites.
                </p>
              </li>
              <li>
                <h4 className="privacy-headers">
                  Changes to This Privacy Policy
                </h4>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
              </li>
              <li>
                <h4 className="privacy-headers">Contact Us</h4>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at info@elderassistindia.com.
                </p>
              </li>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
