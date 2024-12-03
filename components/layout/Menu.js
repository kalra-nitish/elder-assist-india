"use client"

import Link from "next/link";
import { useAuth } from '@/context/AuthContext';

export default function Menu() {
  const { user } = useAuth();

  return (
    <>
      <ul className="navigation">
        <li>
          <Link href="/services">Elderly Care Services</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/faq">Faq</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          {user ? (
            <Link href="/profile" className="profile-menu-link">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="profile-photo-small" />
              ) : (
                <i className="fas fa-user-circle"></i>
              )}
              <span className="profile-name">{user.displayName || 'Profile'}</span>
            </Link>
          ) : (
            <Link href="/appointment" className="login-menu-link">
              <i className="fas fa-sign-in-alt"></i> Login
            </Link>
          )}
        </li>
      </ul>
    </>
  );
}
