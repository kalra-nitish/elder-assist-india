"use client"

import Layout from "@/components/layout/Layout"
import { useAuth } from '@/context/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const { user, signInWithGoogle } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Sign in error:', error);
        }
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sign In">
                <div>
                    <section className="myaccount-section">
                        <div className="auto-container">
                            <div className="row clearfix justify-content-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="login-inner text-center">
                                        <h3 className="mb-4">Welcome to Elder Assist India</h3>
                                        <p className="mb-5">Sign in with your Google account to continue</p>
                                        <button 
                                            onClick={handleGoogleSignIn} 
                                            className="google-signin-btn d-flex align-items-center justify-content-center mx-auto"
                                            style={{
                                                padding: '12px 30px',
                                                border: '1px solid #ddd',
                                                borderRadius: '30px',
                                                backgroundColor: '#fff',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                fontSize: '16px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            <i 
                                                className="fab fa-google"
                                                style={{
                                                    marginRight: '10px',
                                                    fontSize: '18px',
                                                    color: '#4285f4'
                                                }}
                                            />
                                            Sign in with Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
