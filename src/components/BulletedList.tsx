import { For, Show } from "solid-js";

export default function BulletedList(props: {
  title: string;
  description: string;
  list: string[];
  button?: { title: string; url: string };
}) {
  return (
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
        {/* Title */}
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            {props.title}
          </h2>
          <p class="mt-1 text-neutral-400">{props.description}</p>
        </div>

        {/* Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16 lg:items-center">
          <div>
            <For each={props.list}>
              {(item, index) => (
                <div class="flex gap-x-5 ms-1">
                  <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div class="relative z-10 size-8 flex justify-center items-center">
                      <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        <span class="flex flex-shrink-0 size-2 border bg-[#ff0] rounded-full"></span>
                      </span>
                    </div>
                  </div>
                  <div class="grow pt-0.5 pb-8 sm:pb-12">
                    <p class="font-light text-lg lg:text-2xl text-neutral-400">
                      {item}
                    </p>
                  </div>
                </div>
              )}
            </For>

            <Show when={props.button}>
              <a
                class="mt-5 group inline-flex items-center gap-x-2 py-4 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href={props.button?.url}
              >
                {props.button?.title}
                {/* prettier-ignore */}
                <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}
