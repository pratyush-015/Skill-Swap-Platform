// src/lib/fakeListings.ts

import { ExchangeListing } from "@/types/Exchange"

export const listings: ExchangeListing[] = Array.from({ length: 20 }, (_, i) => {
  const id = `listing-${i + 1}`
  const names = ["Tanbir Laskar", "Sarah Mehta", "Ravi Kumar", "Priya Sharma", "Ankit Singh", "Ayesha Rahman", "Neha Joshi", "Rohan Das"]
  const roles = ["Student @ NIT", "3rd Year CSE", "Backend Developer", "App Dev Enthusiast", "AI/ML Student", "Competitive Coder"]
  const skillsHave = [
    "Python, ML, DS",
    "React, Next.js",
    "Java, Spring Boot",
    "Leetcode 1500+",
    "3D Modelling, Blender",
    "Arduino, IoT Projects",
    "UI/UX, Figma",
    "Android Dev, Kotlin",
  ]
  const skillsNeed = [
    "Singing", "Dancing", "Photography", "Swimming", "Public Speaking", "Painting", "Guitar", "Sketching"
  ]

  return {
    id,
    user: {
      name: names[i % names.length],
      avatarUrl: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${30 + i}.jpg`,
      role: roles[i % roles.length],
    },
    items: [
      { id: `have-${i}`, title: "Skill have", description: skillsHave[i % skillsHave.length] },
      { id: `need-${i}`, title: "Skill required", description: skillsNeed[i % skillsNeed.length] },
    ],
    notes: `Interested in skill trade. Listing #${i + 1}`,
  }
})
