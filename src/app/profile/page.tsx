// src/app/profile/page.tsx

import ProfileCard from "@/components/ProfileCard"
import { fakeProfile } from "@/lib/fakeprofiles"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <ProfileCard user={fakeProfile} />
    </main>
  )
}
