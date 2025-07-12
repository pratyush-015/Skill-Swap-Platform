'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { fakeProfile } from '@/lib/fakeprofiles'

export default function EditProfilePage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: fakeProfile.name,
    avatarUrl: fakeProfile.avatarUrl,
    role: fakeProfile.role,
    bio: fakeProfile.bio,
    skills: fakeProfile.skills.join(', '), // comma-separated for input
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.split(',').map(s => s.trim()),
        }),
      })

      if (res.ok) {
        setSuccess(true)
        setTimeout(() => router.push('/profile'), 1000)
      } else {
        alert('Update failed')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            placeholder="Avatar URL"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role (e.g. Student @ NIT)"
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="w-full border px-4 py-2 rounded resize-none"
            rows={4}
            required
          />
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            className="w-full border px-4 py-2 rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Updating...' : 'Save Changes'}
          </button>
        </form>

        {success && (
          <p className="text-green-600 text-center font-medium">Profile updated!</p>
        )}
      </div>
    </main>
  )
}
