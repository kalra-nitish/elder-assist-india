import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="navigation">
        {/*<li className="dropdown"><Link href="/">Home</Link>*/}
        {/*    <ul>*/}
        {/*        <li><Link href="/">Home Page 1</Link></li>*/}
        {/*        <li><Link href="/index-2">Home Page 2</Link></li>*/}
        {/*        <li><Link href="/index-3">Home Page 3</Link></li>*/}
        {/*        <li><Link href="/index-4">Home Page 4</Link></li>*/}
        {/*    </ul>*/}
        {/*</li>*/}
        <li>
          <Link href="/services">Elderly Care Services</Link>
        </li>
        {/*    <ul>*/}
        {/*        <li><Link href="/services-1">Services 1</Link></li>*/}
        {/*        <li><Link href="/services-2">Services 2</Link></li>*/}
        {/*        <li><Link href="/service-details">Service Details</Link></li>*/}
        {/*    </ul>*/}
        {/*</li>*/}
        {/*<li className="dropdown"><Link href="/living-option">Living Option</Link>*/}
        {/*    <ul>*/}
        {/*        <li><Link href="/living-option">Living Option</Link></li>*/}
        {/*        <li><Link href="/living-option-details">Living Option Details</Link></li>*/}
        {/*    </ul>*/}
        {/*</li>*/}
        {/* <li>
          <Link href="/subscription-plan">Subscription Plan</Link>
        </li> */}
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/faq">Faq</Link>
        </li>
        {/*<li className="dropdown"><Link href="/blog-grid">Pages</Link>*/}
        {/*    <ul>*/}
        {/*        <li><Link href="/about">About</Link></li>*/}
        {/*        <li className="dropdown"><Link href="/event-grid">Event</Link>*/}
        {/*            <ul>*/}
        {/*                <li><Link href="/event-grid">Event Grid</Link></li>*/}
        {/*                <li><Link href="/event-list">Event List</Link></li>*/}
        {/*                <li><Link href="/event-details">Event Details</Link></li>*/}
        {/*            </ul>*/}
        {/*        </li>*/}
        {/*        <li className="dropdown"><Link href="/donation">Donation</Link>*/}
        {/*            <ul>*/}
        {/*                <li><Link href="/donation">Donation</Link></li>*/}
        {/*                <li><Link href="/donation-details">Donation Details</Link></li>*/}
        {/*            </ul>*/}
        {/*        </li>*/}
        {/*        <li className="dropdown"><Link href="/volunteer">Volunteer</Link>*/}
        {/*            <ul>*/}
        {/*                <li><Link href="/volunteer">Volunteer</Link></li>*/}
        {/*                <li><Link href="/volunteer-details">Volunteer Details</Link></li>*/}
        {/*            </ul>*/}
        {/*        </li>*/}
        {/*        <li><Link href="/portfolio-grid">Portfolio</Link></li>*/}
        {/*        <li><Link href="/testimonials">Testimonials</Link></li>*/}
        {/*        <li><Link href="/faq">Faq</Link></li>*/}
        {/*        <li><Link href="/career">Career</Link></li>*/}
        {/*        <li><Link href="/error">404 Error Page</Link></li>*/}
        {/*    </ul>*/}
        {/*</li>*/}
        <li>
          <Link href="/about">About Us</Link>
        </li>
        {/*<li className="dropdown"><Link href="#">Blog</Link>*/}
        {/*    <ul>*/}
        {/*        <li><Link href="/blog-grid">Blog Grid</Link></li>*/}
        {/*        <li><Link href="/blog-standard">Blog Standard</Link></li>*/}
        {/*        <li><Link href="/blog-details">Blog Details</Link></li>*/}
        {/*    </ul>*/}
        {/*</li>*/}
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
          {/* <div>
            <Link href="/login" className="btn-1">
              Login<span></span>
            </Link>
          </div> */}
      </ul>
    </>
  );
}
