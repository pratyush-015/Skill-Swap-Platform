'use client'

import Image from "next/image";
import { ExchangeListing } from "@/types/Exchange";

type Props = {
    data: ExchangeListing
    onRequest: (listingId: string) => void
}

export default function ExchangeCard({ data, onRequest }: Props) {
  return (
    <div className="bg-blue-100 shadow-sm  rounded-xl p-6 w-full flex gap-6 justify-between items-start max-w-4xl">
      {/* Left: User & Items */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16">
            <Image
              src={data.user.avatarUrl}
              alt={data.user.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{data.user.name}</h2>
            <p className="text-sm text-gray-500">{data.user.role}</p>
          </div>
        </div>

        {/* Items List */}
        <ul className="list-disc list-inside mb-2 text-gray-800">
          {data.items.map((item) => (
            <li key={item.id}>
              <span className="font-medium">{item.title}</span>: {item.description}
            </li>
          ))}
        </ul>

        {data.notes && (
          <p className="text-sm text-gray-600 mt-2 italic">"{data.notes}"</p>
        )}
      </div>

      {/* Right: Request Button */}
      <div>
        <button
          onClick={() => onRequest(data.id)}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Request Exchange
        </button>
      </div>
    </div>
  )
}