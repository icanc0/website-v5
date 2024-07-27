import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counter = 0;
  let subtitleCounter = 0;
  let names = ["vincent xie", "@icanc"];
  let subtitle = ["Where job", "Woo, new website", "its so over its so over its so over ", "sus"];
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
<div class="flex flex-col bg-indigo-50 justify-center items-center font-baron-regular grow space-y-10"><div class="text-9xl font-extrabold ">${escape(names[counter])}</div>
        <div class="text-md text-gray-600">${escape(subtitle[subtitleCounter])}</div></div>
<div class="flex flex-row bg-indigo-50 justify-center items-center font-baron-regular space-x-4"><a href="/">&lt;&lt;&lt;
    </a>
    <div>This website is part of the waterloo frontend engineering webring
    </div>
    <a href="/">&gt;&gt;&gt;
    </a></div>`;
});
export {
  Page as default
};
