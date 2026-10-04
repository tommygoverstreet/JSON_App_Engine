/* Template: AI Chat Interface. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('ai-chat-ui', {
  "projectName": "AI Chat Interface",
  "purpose": "A chat layout simulating conversation with an AI model.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-gray-50 h-screen flex flex-col'>",
      "    <div class='flex-1 overflow-y-auto p-4 space-y-6 max-w-3xl mx-auto w-full'>",
      "        <div class='flex items-start gap-4'>",
      "            <div class='w-8 h-8 rounded bg-blue-600 flex-shrink-0'><\/div>",
      "            <div class='bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-gray-800'>Hello! How can I assist you today?<\/div>",
      "        <\/div>",
      "        <div class='flex items-start gap-4 flex-row-reverse'>",
      "            <div class='w-8 h-8 rounded bg-gray-300 flex-shrink-0'><\/div>",
      "            <div class='bg-blue-600 text-white p-4 rounded-lg shadow-sm'>Write a short poem about coding.<\/div>",
      "        <\/div>",
      "        <div class='flex items-start gap-4'>",
      "            <div class='w-8 h-8 rounded bg-blue-600 flex-shrink-0'><\/div>",
      "            <div class='bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-gray-800'>Logic flows like water,<br>Bugs hide in the deep,<br>Compiling in the midnight hour,<br>While the normal world's asleep.<\/div>",
      "        <\/div>",
      "    <\/div>",
      "    <div class='p-4 bg-white border-t border-gray-200'>",
      "        <div class='max-w-3xl mx-auto flex gap-2'>",
      "            <input type='text' placeholder='Send a message...' class='flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500'>",
      "            <button class='bg-blue-600 text-white px-4 py-2 rounded-md font-medium'>Send<\/button>",
      "        <\/div>",
      "    <\/div>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
