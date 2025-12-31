"use client"

import Layout from "@/components/layout/Layout";
import { useAuth } from '@/context/AuthContext';

export default function Profile() {
    const { user, signOut } = useAuth();

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="My Profile">
                <section className="profile-section">
                    <div className="auto-container">
                        <div className="profile-container">
                            <div className="profile-header">
                                <div className="profile-image">
                                    {user?.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" />
                                    ) : (
                                        <i className="fas fa-user-circle"></i>
                                    )}
                                </div>
                                <div className="profile-info">
                                    <h3>{user?.displayName || 'User'}</h3>
                                    <p>{user?.email}</p>
                                </div>
                            </div>
                            
                            <div className="profile-content">
                                <div className="profile-section">
                                    <h4>Account Settings</h4>
                                    {/* Add account settings options here */}
                                </div>
                                
                                <div className="profile-section">
                                    <h4>My Activities</h4>
                                    {/* Add user activity history here */}
                                </div>
                                
                                <button 
                                    onClick={() => signOut()} 
                                    className="theme-btn btn-style-one"
                                >
                                    <span className="btn-title">Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
} 