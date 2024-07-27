import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const amogusMode = writable("");
const AmogusToggleSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $amogusMode, $$unsubscribe_amogusMode;
  $$unsubscribe_amogusMode = subscribe(amogusMode, (value) => $amogusMode = value);
  amogusMode.set("");
  {
    console.log($amogusMode + "bruh");
  }
  $$unsubscribe_amogusMode();
  return `<div class="relative"><div class="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full"></div>
    
    <div class="${[
    "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition",
    $amogusMode === "dark" ? "translate-x-full" : ""
  ].join(" ").trim()}"></div></div>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row font-baron-regular "><div class="flex flex-row p-2 w-full gap-2"><div class="w-10"><img src="/amogus.png" alt="when the amogus is sus"></div>
        <a href="/" class="my-auto px-3 py-2 font-bold text-gray-900 rounded-xl">home
        </a>
        <a href="/blogs" class="my-auto px-3 py-2 font-bold text-gray-900 rounded-xl">blog
        </a>
        <a href="/projects" class="my-auto px-3 py-2 font-bold text-gray-900 rounded-xl">projects
        </a></div>
    <div class="flex flex-row py-2 px-6 right-0 items-center">${validate_component(AmogusToggleSwitch, "AmogusToggleSwitch").$$render($$result, {}, {}, {})}</div></div>`;
});
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col h-screen">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}
    
    
    
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
