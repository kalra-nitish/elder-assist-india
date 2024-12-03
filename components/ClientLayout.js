"use client"

import { AuthProvider } from '@/context/AuthContext'

export default function ClientLayout({ children }) {
    return (
        <AuthProvider>
            <div className="page-wrapper">
                {children}
            </div>
        </AuthProvider>
    )
} 