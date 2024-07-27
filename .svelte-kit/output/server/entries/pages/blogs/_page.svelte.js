import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="w-full pt-4 px-2 sm:px-6"><div class="font-baron-regular text-7xl">blogs
    </div>
    <div class="flex flex-col space-y-3 w-full">${each(Object.keys(data), (index) => {
    return `<div class="flex flex-row space-x-1"><div class="inter-normal text-4xl pr-4">${escape(index)}</div>

                <div class="divide-y-2 divide-gray-400 divide-double flex flex-col w-full">${each(data[index], (blog) => {
      return `<a href="${"/blog/" + escape(blog.path, true)}" class="text-3xl flex flex-row py-2"><span class="text-left grow">${escape(blog.title)}</span>
                            <span class="justify-self-end">${escape(blog.shortDate)}</span>
                        </a>`;
    })}
                    <div></div></div>

            </div>`;
  })}</div></div>`;
});
export {
  Page as default
};
