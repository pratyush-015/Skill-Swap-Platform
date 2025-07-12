import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow flex gap-4 justify-center">
      <Link href="/homepage" className="hover:underline text-black">
        Home
      </Link>
      <Link href="/" className="hover:underline text-black">
        home of home
      </Link>
      <Link href="/login" className="hover:underline text-black">
        Login
      </Link>
    </nav>
  )
}
