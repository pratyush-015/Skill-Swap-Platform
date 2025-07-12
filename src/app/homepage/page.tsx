'use client'
import ExchangeCard from "@/components/ExchangeCard"
import { ExchangeListing } from "@/types/Exchange"

const listings: ExchangeListing[] = [
    {
        id: "listing-1",
        user: {
        name: "Tanbir Laskar",
        avatarUrl: "/avatar.jpg",
        role: "Student @ NIT Silchar",
        },
        items: [
        { id: "i1", title: "Skill have", description: "Python, ML, DS" },
        { id: "i2", title: "Skill required", description: "Singing" },
        ],
        notes: "Really in need..",
    },
    {
        id: "listing-2",
        user: {
        name: "Sarah Mehta",
        avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
        role: "2nd year ECE",
        },
        items: [
        { id: "i1", title: "Skill have", description: "Competetive Programming, Backend" },
        { id: "i2", title: "Skill required", description: "Swimming" },
        ],
        notes: "Be good at it",        
    },
]

export default function Homepage() {
    const handleRequest = (listingId : string) => {
        alert(`Request sent for listing $(listingId)`)
        // later sned post request to backend
    }

    return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 gap-6">
        {listings.map((listing) => (
            <ExchangeCard key={listing.id} data={listing} onRequest={handleRequest} />
        ))}
    </main>
    )
}