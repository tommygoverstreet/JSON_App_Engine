/* Template: Kanban Board. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('kanban-board', {
  "projectName": "Kanban Board",
  "purpose": "A project management board with To Do, In Progress, and Done columns.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-blue-50 p-6 h-screen flex flex-col'>",
      "    <h1 class='text-2xl font-bold text-gray-800 mb-6'>Project Alpha<\/h1>",
      "    <div class='flex-1 flex gap-6 overflow-x-auto pb-4'>",
      "        <div class='bg-gray-100 p-4 rounded-lg min-w-[300px] flex flex-col gap-3 h-fit'>",
      "            <h3 class='font-semibold text-gray-700 flex justify-between'>To Do <span class='bg-gray-200 text-gray-600 px-2 rounded-full text-xs py-0.5'>2<\/span><\/h3>",
      "            <div class='bg-white p-3 rounded shadow-sm border border-gray-200 text-sm'>Setup database schema<\/div>",
      "            <div class='bg-white p-3 rounded shadow-sm border border-gray-200 text-sm'>Design landing page<\/div>",
      "        <\/div>",
      "        <div class='bg-gray-100 p-4 rounded-lg min-w-[300px] flex flex-col gap-3 h-fit'>",
      "            <h3 class='font-semibold text-gray-700 flex justify-between'>In Progress <span class='bg-gray-200 text-gray-600 px-2 rounded-full text-xs py-0.5'>1<\/span><\/h3>",
      "            <div class='bg-white p-3 rounded shadow-sm border border-gray-200 text-sm border-l-4 border-l-blue-500'>Implement API endpoints<\/div>",
      "        <\/div>",
      "        <div class='bg-gray-100 p-4 rounded-lg min-w-[300px] flex flex-col gap-3 h-fit'>",
      "            <h3 class='font-semibold text-gray-700 flex justify-between'>Done <span class='bg-gray-200 text-gray-600 px-2 rounded-full text-xs py-0.5'>1<\/span><\/h3>",
      "            <div class='bg-white p-3 rounded shadow-sm border border-gray-200 text-sm border-l-4 border-l-green-500 line-through text-gray-400'>Initialize repository<\/div>",
      "        <\/div>",
      "    <\/div>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
