'use client'

import { useState } from "react"
import ExchangeCard from "@/components/ExchangeCard"
import { listings as allListings } from "@/lib/fakeListing"

const ITEMS_PER_PAGE = 6

export default function Homepage() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(allListings.length / ITEMS_PER_PAGE)
  const startIdx = (page - 1) * ITEMS_PER_PAGE
  const currentListings = allListings.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  const handleRequest = (id: string) => {
    alert(`Request sent for listing ${id}`)
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-4 pt-10 pb-24 relative">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          🎯 Skill Exchange Listings
        </h1>

        {/* Exchange Cards */}
        {currentListings.map((listing) => (
          <ExchangeCard key={listing.id} data={listing} onRequest={handleRequest} />
        ))}
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
