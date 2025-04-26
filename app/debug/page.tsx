"use client"

import DoodleCard from "@/components/ui-elements/doodle-card"
import DoodleButton from "@/components/ui-elements/doodle-button"
import { AuthStatus } from "@/components/auth-status"

export default function DebugPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Local Authentication Debug</h1>
      <p className="text-lg mb-8">
        This page shows the current authentication status and allows you to test the local authentication system.
      </p>

      <div className="grid gap-8">
        <DoodleCard className="p-6">
          <h2 className="text-2xl font-bold mb-4">Authentication Status</h2>
          <p className="mb-4">
            The authentication system is now running locally using localStorage. This is for development purposes only.
          </p>
          <AuthStatus />
        </DoodleCard>

        <DoodleCard className="p-6">
          <h2 className="text-2xl font-bold mb-4">Local Storage Debug</h2>
          <p className="mb-4">
            You can manually clear the local storage to log out:
          </p>
          <DoodleButton 
            onClick={() => {
              localStorage.removeItem('user_data');
              window.location.reload();
            }}
          >
            Clear Local Storage
          </DoodleButton>
        </DoodleCard>
      </div>
    </div>
  )
}
