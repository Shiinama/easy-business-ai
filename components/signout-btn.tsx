'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function SignOutButton() {
  return (
    <Button
      className="w-24"
      variant="destructive"
      onClick={() => {
        signOut()
      }}
    >
      Signout
    </Button>
  )
}
