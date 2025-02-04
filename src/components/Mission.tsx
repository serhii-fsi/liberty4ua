export default function Mission() {
  return (
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Mission
          </h2>
          <p class="mt-1 text-neutral-400">Some text about US aid</p>
        </div>

        {/* Grid */}
        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <p class="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
              Our mission is to ensure that U.S. aid to Ukraine is used
              effectively to support its defense capabilities and long-term
              stability.
            </p>
          </div>
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
        </div>
      </div>
    </div>
  );
}
