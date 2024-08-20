'use client'

import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <div className="ml-72 mr-72 mt-6">
      <div className="background flex items-center ">
        <p className="ml-20 text-white font-bold text-6xl">Plan<br />Your<br />Next<br />Vacations.</p> 
        <button type="button" onClick={() => router.push('/pages/flights')} className="text-white bg-blue-700 font-medium rounded-full px-5 py-2.5 text-center inline-flex items-center ml-60">
          Let's Start
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>

    </div>
  );
}
