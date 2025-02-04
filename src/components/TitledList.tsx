import { For, Show } from "solid-js";

export default function TitledList(props: {
  title: string;
  description: string;
  list: { title: string; text: string }[];
}) {
  return (
    <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
      <div class="max-w-3xl mb-10 lg:mb-14">
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
          {props.title}
        </h2>
        <p class="mt-1 text-neutral-400">{props.description}</p>
      </div>

      <div class="max-w-2xl mx-auto divide-y divide-neutral-700">
        <For each={props.list}>
          {(item, index) => (
            <div class="py-8 first:pt-0 last:pb-0">
              <div class="flex gap-x-5">
                <div class="grow">
                  <h3 class="font-semibold text-lg lg:text-2xl text-white pb-3">
                    {item.title}
                  </h3>
                  <p class="font-light text-lg lg:text-xl text-neutral-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
