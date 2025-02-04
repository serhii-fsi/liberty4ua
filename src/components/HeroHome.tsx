export default function HeroHome() {
  return (
    <>
      <div class="bg-neutral-900">
        <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 class="font-semibold text-white text-5xl md:text-6xl">
            <span class="text-[#ff0]">Fund Ukraine's Military</span>
            <br />
            End Wasteful <span class="line-through">Aid</span>
          </h1>
          <div class="max-w-4xl">
            <p class="mt-5 text-neutral-400 text-lg">
              Exposing Corruption and Bias to Prioritize Military Support and
              Secure Ukraine's Future.
            </p>
            <a
              class="mt-5 group inline-flex items-center gap-x-2 py-4 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
              href="#"
            >
              Download Report
              {/* prettier-ignore */}
              <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
