'use client'

import { useMemo, useState } from "react"
import ExchangeCard from "@/components/ExchangeCard"
import { listings as allListings } from "@/lib/fakeListing"

const ITEMS_PER_PAGE = 6

export default function Homepage() {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState("")
    const [filterSkill, setFilterSkill] = useState("")
    
    const filteredListings = useMemo(() => {
        return allListings.filter((listing) => {
        const lowerSearch = searchTerm.toLowerCase()

        const userMatch = listing.user.name.toLowerCase().includes(lowerSearch)
        const skillMatch = listing.items.some(item =>
            item.description.toLowerCase().includes(lowerSearch)
        )

        const skillFilterMatch = filterSkill
            ? listing.items.some(item =>
                item.title === "Skill required" &&
                item.description.toLowerCase().includes(filterSkill.toLowerCase())
            )
            : true

        return (userMatch || skillMatch) && skillFilterMatch
        })
    }, [searchTerm, filterSkill])


    const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE)
    const startIdx = (page - 1) * ITEMS_PER_PAGE
    const currentListings = filteredListings.slice(startIdx, startIdx + ITEMS_PER_PAGE)

    const handleRequest = (id: string) => {
        alert(`Request sent for listing ${id}`)
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 px-4 pt-10 pb-24 relative">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">

            <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                <input
                    type="text"
                    placeholder="Search by name or skill..."
                    value={searchTerm}
                    onChange={(e) => {
                    setPage(1)
                    setSearchTerm(e.target.value)
                    }}
                    className="px-4 py-2 border border-gray-300 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <select
                    value={filterSkill}
                    onChange={(e) => {
                    setPage(1)
                    setFilterSkill(e.target.value)
                    }}
                    className="px-4 py-2 border border-gray-300 rounded w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Skills</option>
                    <option value="singing">Singing</option>
                    <option value="swimming">Swimming</option>
                    <option value="guitar">Guitar</option>
                    <option value="dancing">Dancing</option>
                    <option value="public speaking">Public Speaking</option>
                    <option value="painting">Painting</option>
                </select>
            </div>

            {/* Exchange Cards */}
            {currentListings.length > 0 ? (
                currentListings.map((listing) => (
                    <ExchangeCard key={listing.id} data={listing} onRequest={handleRequest} />
                ))
                ) : (
                <p className="text-center text-gray-500 mt-8">No listings match your search.</p>
            )}
        </div>

        {/* Fixed Pagination at Bottom */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-3">
            <div className="flex justify-center items-center gap-4">
            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                ⬅ Prev
            </button>

            <span className="font-medium text-lg">Page {page} of {totalPages}</span>

            <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next ➡
            </button>
            </div>
        </div>
        </main>
    )
}
