import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-gray-100 p-4 shadow flex gap-6 justify-between items-center px-6'>
      <div className="flex gap-4">
        <Link href="/homepage" className="hover:underline text-gray-700 font-medium">Home</Link>
        <Link href="/" className="hover:underline text-gray-700 font-medium">Root</Link>
        <Link href="/login" className="hover:underline text-gray-700 font-medium">Login</Link>
      </div>

      {/* Profile Button on Right */}
      <Link href="/profile">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          My Profile
        </button>
      </Link>
    </nav>
  )
}
