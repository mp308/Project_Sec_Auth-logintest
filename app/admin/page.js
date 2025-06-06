'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Admin() {
    const { data: session, status } = useSession()

    console.log('session', session)
    console.log('status', status)

    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/')
        }
        if (status === 'authenticated' && session?.user?.role !== 'admin') {
            router.push('/profile')
        }
    }, [status, session, router])

    // When after loading success and have session, show profile
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div>
                    <h1 className="text-2xl font-semibold mb-6 text-center">
                        Welcome to the Admin Page
                    </h1>
                </div>
                <div className="bg-white p-6 rounded-md shadow-md">
                    {/* ทำการเพิ่มส่วนรูปภาพเข้ามา */}
                    <div className="text-center mb-4">
                        <img
                            src={session.user.image}
                            className="rounded-full w-20 h-20 mx-auto"
                        />
                    </div>
                    <p>
                        Welcome, <b>{session.user.name}!</b>
                    </p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>

        </>
    )
}