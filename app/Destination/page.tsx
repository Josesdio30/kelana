// app/destination/page.tsx
"use client";

import Image from "next/image";

export default function DestinationPage() {
  return (
    <main className="bg-[#F8EDE6] min-h-screen px-8 py-16 md:px-16 space-y-24">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="md:w-1/2">
          <Image
            src="/images/destination-padarsunset.jpg"
            alt="Padar Island"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[#f48c06] italic">
            Trip Type / Activity
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
            What’s Your Kelana Style for This Journey?
          </h3>
          <ul className="space-y-3 text-lg text-[#333]">
            <li>• Travel Matching / Open Trip</li>
            <li>• Private / Customize Trip</li>
            <li>• Kelana Hidden Gems</li>
            <li>• Local Hero Experiences</li>
            <li>
              • Mystery Destination – <span className="font-semibold text-black">Coming Soon</span>
            </li>
            <li>
              • Eco Challenge Trip – <span className="font-semibold text-black">Coming Soon</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Travel Matching Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Travel Matching</h2>
          <p className="text-lg mb-4">
            <strong>Solo traveler?</strong> You don’t have to travel alone.
          </p>
          <p className="text-md mb-4">
            <span className="font-semibold text-[#d46c6c]">Our Travel Matching</span> feature helps you
            connect with fellow explorers who share your travel style through personalized
            <span className="text-[#d46c6c]"> Open Trips</span>.
          </p>
          <ul className="list-disc ml-6 text-md">
            <li>Adventure</li>
            <li>Snorkeling / Diving</li>
            <li>Trekking</li>
            <li>Cultural Discovery</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/travel-matching.png"
            alt="Travel Matching"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Section lainnya tinggal lanjutkan seperti ini, contoh: Private Trip, Local Hero, Hidden Gems, dll. */}
    </main>
  );
}
