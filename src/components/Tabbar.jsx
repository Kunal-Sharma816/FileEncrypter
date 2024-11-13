import React from "react";

const Tabbar = ({ name }) => {
    const [tabToggle,  settabToggle] = useState(true)

  return (
    <>
<div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>{name}</option>
        {/* <option>Dashboard</option>
        <option>setting</option>
        <option>Invoioce</option> */}
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r focus:ring-blue-300 active:bg-slate-600 focus:bg-slate-400 dark:bg-gray-700 dark:text-white transition ease-in-out delay-150 " aria-current="page">{name}</a>
    </li>:
    
</ul>

    </>
  );
};


export default Tabbar; 
<script src="node_modules/@material-tailwind/html/scripts/tabs.js"></script>
