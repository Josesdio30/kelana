// app/About-Us/page.tsx (Next.js 13+)
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="bg-[#F8EDE6] min-h-screen px-8 py-16 md:px-16">
      <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Boring trips? <span className="text-black">Not our thing.</span>
          </h1>
          <p className="text-lg text-[#333] mb-4">
            Meet <strong>KelanaCrew!</strong> We’re not just about taking you on a trip —
            we’re here to make you fall in love with Indonesia.
          </p>
          <p className="text-lg text-[#333] mb-4">
            Every journey is carefully designed to bring you closer to nature, culture, and even parts of yourself you’ve never met before.
          </p>
          <p className="text-lg font-semibold text-[#D96B61] mb-6">
            Because we believe traveling isn’t just about where you go, but what you take home in your heart.
          </p>
          <Link href="/explore">
            <button className="bg-[#003049] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#00263d] transition">
              Read More
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <Image
            src="/images/view1.jpg"
            alt="Komodo hills"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/images/view2.png"
            alt="Sunset boats"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
