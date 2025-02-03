import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { For } from "solid-js";

export default function Home() {
  return (
    <main id="content">
      {/* <!-- Hero --> */}
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
              <svg
                class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/* <!-- Testimonials --> */}
      <div class="bg-neutral-900">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Mission
            </h2>
            <p class="mt-1 text-neutral-400">Some text about US aid</p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16">
            <div>
              <p class="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                Our mission is to ensure that U.S. aid to Ukraine is used
                effectively to support its defense capabilities and long-term
                stability.
              </p>
            </div>
            {/* <!-- End Col --> */}
            <div class="border-l-4 border-[#ff0] pl-8">
              <p class="font-light text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                Current programs are not achieving their goals and may even be
                counterproductive.
                <br />
                <br />
                We aim to redirect funds from ineffective projects to the
                Ukrainian military, enhancing its ability to defend the country
                from aggression.
              </p>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Testimonials --> */}

      {/* <!-- Approach --> */}
      <div class="bg-neutral-900">
        {/* <!-- Approach --> */}
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Goals
            </h2>
            <p class="mt-1 text-neutral-400">We aim several goals.</p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16 lg:items-center">
            <div>
              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    To redirect the
                    <span class="text-white"> $482 million </span>
                    in 2025 USAID funding, and other funds, to directly
                    strengthen the Ukrainian military.
                  </p>
                </div>
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    To end funding for ineffective anti-corruption programs that
                    have not decreased corruption in Ukraine.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    To end funding for media programs that have demonstrated
                    biased and partisan propaganda.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    To promote transparency and accountability in the allocation
                    of US aid to Ukraine.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      5
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    To prevent the spread of russian aggression and protect the
                    security interests of the United States and its allies.
                    Security interests of the United States and its allies.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}

              <a
                class="mt-5 group inline-flex items-center gap-x-2 py-4 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="#"
              >
                Download Report
                <svg
                  class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            {/* <!-- End Timeline --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Approach --> */}

      {/* <!-- FAQ --> */}
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Issues
          </h2>
          <p class="mt-1 text-neutral-400">We aim several goals.</p>
        </div>

        <div class="max-w-2xl mx-auto divide-y divide-neutral-700">
          <div class="py-8 first:pt-0 last:pb-0">
            <div class="flex gap-x-5">
              <div class="grow">
                <h3 class="font-semibold text-lg lg:text-2xl text-white pb-3">
                  Ineffective Anti-Corruption Efforts
                </h3>
                <p class="font-light text-lg lg:text-xl text-neutral-400">
                  Despite U.S. support, corruption in Ukraine persists, with
                  numerous scandals involving luxury car sales, military food
                  procurement, and misuse of funds.
                </p>
              </div>
            </div>
          </div>

          <div class="py-8 first:pt-0 last:pb-0">
            <div class="flex gap-x-5">
              <div class="grow">
                <h3 class="font-semibold text-lg lg:text-2xl text-white pb-3">
                  Biased Media Coverage
                </h3>
                <p class="font-light text-lg lg:text-xl text-neutral-400">
                  U.S.-funded media outlets in Ukraine have been found to engage
                  in one-sided propaganda, misrepresenting political figures and
                  promoting partisan views, rather than objective reporting.
                </p>
              </div>
            </div>
          </div>

          <div class="py-8 first:pt-0 last:pb-0">
            <div class="flex gap-x-5">
              <div class="grow">
                <h3 class="font-semibold text-lg lg:text-2xl text-white pb-3">
                  Misuse of Humanitarian Aid
                </h3>
                <p class="font-light text-lg lg:text-xl text-neutral-400">
                  Significant amounts of humanitarian aid have been embezzled,
                  with evidence of organized theft by high-ranking officials.
                </p>
              </div>
            </div>
          </div>

          <div class="py-8 first:pt-0 last:pb-0">
            <div class="flex gap-x-5">
              <div class="grow">
                <h3 class="font-semibold text-lg lg:text-2xl text-white pb-3">
                  Human Rights Abuses
                </h3>
                <p class="font-light text-lg lg:text-xl text-neutral-400">
                  There are credible reports of human rights abuses, including
                  illegal detentions, torture, and beatings, within Ukrainian
                  government institutions, and a lack of appropriate response
                  from human rights organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End FAQ --> */}

      {/* <!-- Case Stories --> */}
      <div class="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
        <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
          {/* <!-- Card Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
            {/* <!-- Card --> */}
            <a
              class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div class="mb-5">
                <div class="mt-5">
                  <p class="font-semibold text-5xl text-white">
                    Call to Congress
                  </p>
                  <p class="mt-5 text-neutral-400">
                    Please consider to help us. All information you need you
                    will find under this link.
                  </p>
                </div>
              </div>
              <div class="mt-auto">
                <div class="mt-5 group inline-flex items-center gap-x-2 py-4 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none">
                  Call to Congress
                  <svg
                    class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}

            {/* <!-- Card --> */}
            <a
              class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div class="mb-5">
                <div class="mt-5">
                  <p class="font-semibold text-5xl text-white">
                    Letter to Congress
                  </p>
                  <p class="mt-5 text-neutral-400">
                    Please consider to help us. All information you need you
                    will find under this link. We provide template for the
                    letter.
                  </p>
                </div>
              </div>
              <div class="mt-auto">
                <div class="mt-5 group inline-flex items-center gap-x-2 py-4 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none">
                  Letter to Congress
                  <svg
                    class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Card Grid --> */}
        </div>
      </div>
      {/* <!-- End Case Stories --> */}

      {/* <!-- Approach --> */}
      <div class="bg-neutral-900">
        {/* <!-- Approach --> */}
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
          {/* <!-- Title --> */}
          <div class="max-w-3xl mb-10 lg:mb-14">
            <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Why Redirecting Aid is Crucial
            </h2>
            <p class="mt-1 text-neutral-400">
              Give us a chance to explain our point of view.
            </p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16 lg:items-center">
            <div>
              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    A russian victory in Ukraine would have far-reaching
                    negative consequences. Russia could become emboldened to
                    further expand its influence in other countries, increasing
                    global tensions.
                  </p>
                </div>
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    The US must not appear weak on the international stage,
                    which could encourage other adversarial nations.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}

              {/* <!-- Item --> */}
              <div class="flex gap-x-5 ms-1">
                {/* <!-- Icon --> */}
                <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div class="relative z-10 size-8 flex justify-center items-center">
                    <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Right Content --> */}
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="font-light text-lg lg:text-2xl text-neutral-400">
                    The current trajectory of US aid is not maximizing its
                    intended impact. By prioritizing military support, the U.S.
                    can help Ukraine secure its own future.
                  </p>
                </div>
                {/* <!-- End Right Content --> */}
              </div>
              {/* <!-- End Item --> */}
            </div>
            {/* <!-- End Timeline --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Approach --> */}

      {/* <!-- FAQ --> */}
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2">
            <div class="max-w-3xl mb-10 lg:mb-14">
              <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                FAQ
              </h2>
              <p class="mt-1 text-neutral-400">Some helpful information</p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div class="md:col-span-3">
            {/* <!-- Accordion --> */}
            <div class="hs-accordion-group divide-y divide-neutral-700">
              <For
                each={[
                  {
                    title: `What are the main concerns raised about US financial aid to Ukraine?`,
                    text: `The primary concerns revolve around the misuse of funds,  particularly humanitarian aid, which has reportedly been  embezzled by Ukrainian officials and sold for personal gain.  Additionally, there are concerns that US-funded programs  meant to promote democracy and combat corruption have proven  largely ineffective, with evidence of ongoing corruption,  including a booming luxury car market despite the war,  inflated military food procurement contracts, and misuse of  research funds. It&apos;s also argued that a substantial  portion of the funds go to what some perceive as biased  propaganda aligned with the US Democratic party, rather than  promoting independent media.`,
                  },
                  {
                    title: `How is US media support in Ukraine being criticized?`,
                    text: `The report argues that a Russian-dominated Ukraine would embolden Russia to expand its influence in the region, potentially leading to further conflicts and damaging US interests in Europe. It also suggests a failure to support Ukraine would give Russia access to NATO-related military technologies and would be interpreted as weakness by adversarial nations, potentially encouraging them to pursue their own territorial ambitions, specifically noting that Russia might turn its attention to helping China take Taiwan.`,
                  },
                  {
                    title: `What evidence is cited to demonstrate corruption within Ukraine?`,
                    text: `Several examples are provided, including: large-scale theft of humanitarian aid in the Zaporizhia region, evidenced by missing trucks, containers, and rail cars, a luxury car market that is booming espite the war, an inflated military food procurement scandal where prices were 2-3 times higher than market rates, misuse of funds allocated to Antarctic research, including questionable contracts with shell companies for unnecessary luxuries such as octopus, salmon, wine, and caviar, and the controversial purchase of musical instruments and Lego sets for inadequate bomb shelters.`,
                  },
                  {
                    title: `What is the "Gym" concentration camp mentioned in the report?`,
                    text: `The &quot;Gym&quot; refers to an unofficial detention facility that allegedly operated in the basement of the central Security Service of Ukraine (SBU) building in Kyiv. This facility is reported to ave held up to 70 people at a time, where detainees were allegedly subjected to illegal detention, blindfolding, limited food and water, and sometimes torture and coercion to confess to crimes. It&apos;s ighlighted that one of the alleged victims of torture in the Gym is a key witness in the case against Oleksandr Dubinsky who accuses members of the Biden family of corruption.`,
                  },
                  {
                    title: `What human rights abuses are being reported within the Ukrainian military recruitment process?`,
                    text: `There are reports of illegal detentions, torture, and beatings within the Territorial Centers of Recruitment and Social Support (TCR) during the mobilization of people into the military. In some cases, these abuses have reportedly led to the death of detainees. There are also reports of physical abuse of those who are not yet mobilized.`,
                  },
                  {
                    title: `What is the main recommendation of the report regarding US aid to Ukraine?`,
                    text: `The main recommendation is to redirect $482 million from the 2025 USAID budget, as well as other funding aimed at media support, anti-corruption efforts, and democracy initiatives, towards trengthening the Ukrainian military. The reasoning is that corruption and misuse of funds render other forms of aid ineffective and do not contribute to the overall security goals, while supporting Ukraine ilitarily is necessary to deter further Russian  aggression.`,
                  },
                  {
                    title: ` What are the strategic incentives for the USA to support Ukraine according to the report?`,
                    text: `The report argues that a Russian-dominated Ukraine would embolden Russia to expand its influence in the region, potentially leading to further conflicts and damaging US interests in Europe. It also  suggests a failure to support Ukraine would give Russia access to NATO-related military technologies and would be interpreted as weakness by adversarial nations, potentially encouraging them to pursue their own territorial ambitions, specifically noting that Russia might turn its attention to helping China take Taiwan.`,
                  },
                ]}
              >
                {(item, index) => (
                  <div
                    class={"hs-accordion pb-3" + (index() ? " pt-6" : "")}
                    id={
                      "hs-basic-with-title-and-arrow-stretched-heading-" +
                      index()
                    }
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full text-xl md:text-2xl font-semibold text-start rounded-lg transition text-neutral-200 hover:text-neutral-400"
                      aria-expanded="true"
                      aria-controls={
                        "hs-basic-with-title-and-arrow-stretched-collapse-" +
                        index()
                      }
                    >
                      {item.title}
                      {/* prettier-ignore */}
                      <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      {/* prettier-ignore */}
                      <svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>
                    <div
                      id={
                        "hs-basic-with-title-and-arrow-stretched-collapse-" +
                        index()
                      }
                      class={
                        "hs-accordion-content w-full overflow-hidden transition-[height] duration-300" +
                        " hidden"
                      }
                      role="region"
                      aria-labelledby={
                        "hs-basic-with-title-and-arrow-stretched-heading-" +
                        index()
                      }
                    >
                      <p class="font-light text-lg lg:text-xl text-neutral-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )}
              </For>
            </div>
            {/* <!-- End Accordion --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End FAQ --> */}
    </main>
  );
}
