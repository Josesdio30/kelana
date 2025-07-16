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

      {/* Travel Matching Trip Pricelist */}
      <section className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-[#f48c06] italic font-semibold text-3xl block">Open Trip</span>
          Travel Matching Trip Pricelist
        </h2>
        <div className="overflow-x-auto w-full flex justify-center mt-8">
          <table className="min-w-[600px] w-[600px] md:w-[800px] border-2 border-black text-center bg-white">
            <thead>
              <tr className="border-2 border-black">
                <th className="py-4 px-2 text-xl font-bold border-2 border-black">Trip</th>
                <th className="py-4 px-2 text-xl font-bold border-2 border-black">Price (Start From Rp)/ Person</th>
              </tr>
            </thead>
            <tbody className="text-lg font-semibold">
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">1 Day Trip Luxury Boat</td>
                <td className="py-4 border-2 border-black">1.500.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">1 Day Trip Speed Boat</td>
                <td className="py-4 border-2 border-black">1.350.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">3 Days 2 Night</td>
                <td className="py-4 border-2 border-black">2.650.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">4 Days 3 Night</td>
                <td className="py-4 border-2 border-black">5.400.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#d46c6c] font-bold text-md mt-6 text-center">Note: Price may change depending on your travel dates and boat availability.</p>
      </section>

      {/* Private/Customize Trip Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="md:w-1/2">
          <span className="text-[#f48c06] italic font-bold text-3xl md:text-4xl block mb-2">Trip Type / Activity</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-2">Private<span className="text-black">/Customize Trip</span></h2>
          <div className="w-fit mb-4">
            <span className="block bg-[#b35c5c] text-white text-center px-8 py-1 rounded-full font-semibold text-lg md:text-xl" style={{letterSpacing: '1px'}}>#The Trip is Yours</span>
          </div>
          <p className="text-lg font-semibold mb-2 mt-4">Want a trip that feels totally you?</p>
          <p className="text-md mb-4">No worries! We’ve got private and customized trips made to fit your style.</p>
          <p className="text-lg font-bold mb-2 mt-4">With this trip, you can:</p>
          <ul className="list-disc ml-6 text-md mb-2">
            <li>Choose your own destinations and trip duration</li>
            <li>You also can pick activities based on your interests:
              <ul className="list-[circle] ml-6 mt-1">
                <li>Premium Snorkeling/Diving</li>
                <li>Local Coffee/Food Tasting Session</li>
                <li>Trekking Activity</li>
                <li>Fishing with Locals / Fishing Charter</li>
                <li>Tenun Workshop</li>
                <li>Onboard Private Chef / Custom Menu</li>
                <li>Sunrise Yoga</li>
                <li>Massage Therapy</li>
                <li>Sports</li>
                <li>and many more</li>
              </ul>
            </li>
            <li>Set your travel style: luxury, local, adventure, or a mix of everything</li>
            <li>Travel with anyone you want — solo, with your partner, besties, or family</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/view1.jpg"
            alt="Private Customize Trip"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Private/Customize Trip Pricelist */}
      <section className="flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span className="text-[#f48c06] italic font-semibold text-3xl block">Open Trip</span>
          Private/Customize Trip Pricelist
        </h2>
        <div className="overflow-x-auto w-full flex justify-center mt-8">
          <table className="min-w-[600px] w-[600px] md:w-[800px] border-2 border-black text-center bg-white">
            <thead>
              <tr className="border-2 border-black">
                <th className="py-4 px-2 text-xl font-bold border-2 border-black">Trip</th>
                <th className="py-4 px-2 text-xl font-bold border-2 border-black">Price (Start From Rp)/ Person</th>
              </tr>
            </thead>
            <tbody className="text-lg font-semibold">
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">2D1N</td>
                <td className="py-4 border-2 border-black">35.000.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">3D2N</td>
                <td className="py-4 border-2 border-black">40.000.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">4D3N</td>
                <td className="py-4 border-2 border-black">49.000.000</td>
              </tr>
              <tr className="border-2 border-black">
                <td className="py-4 border-2 border-black">5D4N</td>
                <td className="py-4 border-2 border-black">50.000.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#d46c6c] font-bold text-md mt-6 text-center">Note: Price may change depending on your travel dates and boat availability.</p>
      </section>

      {/* Itinerary Table */}
      <section className="flex flex-col items-center mt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Itinerary Travel Matching/ Private Trip</h2>
        <div className="overflow-x-auto w-full flex justify-center">
          <table className="min-w-[900px] w-[900px] border-2 border-black text-center bg-white">
            <thead>
              <tr className="border-2 border-black">
                <th className="border-2 border-black"></th>
                <th className="border-2 border-black">ODT</th>
                <th className="border-2 border-black">2D1N</th>
                <th className="border-2 border-black">3D2N</th>
                <th className="border-2 border-black">4D3N</th>
                <th className="border-2 border-black">5D4N<br/>(<span className='italic font-semibold'>PRIVATE CHARTER</span>)</th>
              </tr>
            </thead>
            <tbody className="text-md">
              <tr>
                <td className="border-2 border-black font-bold">Day 1</td>
                <td className="border-2 border-black">Padar Island<br/>Pink Beach/ Long Beach,<br/>Komodo Island, Manta Point, Taka Makassar, Kanawa island</td>
                <td className="border-2 border-black">Kelor Island<br/>Manjarite<br/>Rinca Island<br/>Kalong Island</td>
                <td className="border-2 border-black">Kelor Island<br/>Manjarite<br/>Kalong Island</td>
                <td className="border-2 border-black">Kelor Island<br/>Manjarite<br/>Kalong Island</td>
                <td className="border-2 border-black">Kelor Island<br/>Manjarite<br/>Kalong Island</td>
              </tr>
              <tr>
                <td className="border-2 border-black font-bold">Day 2</td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black">Padar Island<br/>Long Beach/ Pink Beach<br/>Taka Makassar<br/>Manta Point</td>
                <td className="border-2 border-black">Padar Island<br/>Long Beach/ Pink Beach<br/>Komodo island<br/>Taka Makassar<br/>Manta Point</td>
                <td className="border-2 border-black">Padar Island<br/>Long Beach/ Pink Beach<br/>Komodo island</td>
                <td className="border-2 border-black">Padar Island<br/>Long Beach/ Pink Beach<br/>Komodo island</td>
              </tr>
              <tr>
                <td className="border-2 border-black font-bold">Day 3</td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black">Kanawa Island</td>
                <td className="border-2 border-black">Taka Makassar<br/>Manta Point<br/>Siaba Island</td>
                <td className="border-2 border-black">Taka Makassar<br/>Manta Point<br/>Siaba Island</td>
              </tr>
              <tr>
                <td className="border-2 border-black font-bold">Day 4</td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black">Sebayur Island<br/>Kanawa Island<br/>Sture Island</td>
                <td className="border-2 border-black">Sebayur Island<br/>Kanawa Island<br/>Sture Island</td>
              </tr>
              <tr>
                <td className="border-2 border-black font-bold">Day 5</td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black"></td>
                <td className="border-2 border-black">Bidadari Island</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#d46c6c] font-bold text-md mt-6 text-center">Itinerary may change depending on the weather conditions</p>
      </section>

      {/* Include, Exclude, Add On */}
      <section className="mt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Include, Exclude, Add on</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Include */}
          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Include</h3>
            <ul className="list-disc ml-4 text-md space-y-2">
              <li>Live a board</li>
              <li>Airport/Hotel - Meeting point pick up (Round trip)</li>
              <li>All meals (Breakfast, Lunch & Dinner) + 1x BBQ</li>
              <li>Free flow mineral water, tea and coffee</li>
              <li>Documentation (Cam, Go pro, Drone)</li>
              <li>Unlimited Mineral Water, Coffe & Tea</li>
              <li>Afternoon Snack & Soft drink</li>
              <li>Wellcome drink</li>
              <li>Snorkeling equipment</li>
              <li>Local guide, Ranger</li>
              <li>Basic First Aid</li>
              <li>Bath Towel</li>
            </ul>
          </div>
          {/* Exclude */}
          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Exclude</h3>
            <ul className="list-disc ml-4 text-md space-y-2">
              <li>Komodo Nat. Park Entrace Fee (Local 300k, Foreign / KITAS 550k)</li>
              <li>Hotel stays in Labuan Bajo D-1</li>
              <li>Personal expenses / Own medicine</li>
              <li>Flight ticket from an to your city</li>
              <li>Gratuities / Tipping to local guide, Boat crew and ranger</li>
              <li>Beer beverage / Own snack</li>
              <li>Jasa raharja Insurance</li>
            </ul>
          </div>
          {/* Add On */}
          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Add On</h3>
            <ul className="list-disc ml-4 text-md space-y-2">
              <li>Translator (Mandarin)</li>
              <li>Video Content + Edit - PostTrip Photo Album / Video Recap</li>
              <li>Surprise Box / Welcome Gift</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
