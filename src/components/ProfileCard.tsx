// src/components/ProfileCard.tsx

import Link from "next/link"

type Props = {
  user: {
    name: string
    avatarUrl: string
    role: string
    bio: string
    skills: string[]
  }
}

export default function ProfileCard({ user }: Props) {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-auto shadow-md space-y-4">
      <div className="flex items-center gap-4">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
        </div>
      </div>

      <p className="text-gray-700">{user.bio}</p>

      <div>
        <h3 className="font-semibold mb-1">Skills:</h3>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Link href="/profile/edit">
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Edit Profile
        </button>
    </Link>
    </div>
  )
}
