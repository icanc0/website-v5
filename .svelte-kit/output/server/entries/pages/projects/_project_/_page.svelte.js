import { c as create_ssr_component, e as escape } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let blog = data;
  console.log(data.body);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="w-full "><div id="blogCard" class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 w-full"><div class="font-bold text-3xl pb-4 dark:text-gray-100">${escape(blog.title)}</div>
        <div class="font-medium text-lg pb-4 dark:text-gray-100">${escape(blog.date)}</div>
        <div class="font-medium text-base pb-4 text-gray-600 dark:text-gray-200">${escape(blog.description)}</div>
        <div class="prose lg:prose-xl sm:prose-sm dark:text-gray-100 dark:prose-dark"><!-- HTML_TAG_START -->${blog.body}<!-- HTML_TAG_END --></div></div></div>`;
});
export {
  Page as default
};
