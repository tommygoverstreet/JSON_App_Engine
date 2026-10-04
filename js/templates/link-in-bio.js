/* Template: Link-in-Bio Profile. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('link-in-bio', {
  "projectName": "Link-in-Bio Profile",
  "purpose": "A mobile-friendly social links page (Linktree style).",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-gradient-to-br from-purple-500 to-pink-500 min-h-screen py-12 px-4'>",
      "    <div class='max-w-md mx-auto'>",
      "        <div class='flex flex-col items-center mb-8'>",
      "            <div class='w-24 h-24 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center text-3xl'>📸<\/div>",
      "            <h1 class='text-white text-2xl font-bold'>@creative_dev<\/h1>",
      "            <p class='text-white/80 text-sm mt-2 text-center'>Building cool things on the internet. Code, design, and coffee.<\/p>",
      "        <\/div>",
      "        <div class='space-y-4'>",
      "            <a href='#' class='block w-full py-4 px-6 bg-white/90 hover:bg-white text-center font-bold text-gray-800 rounded-full shadow-md transition transform hover:-translate-y-1'>My Portfolio<\/a>",
      "            <a href='#' class='block w-full py-4 px-6 bg-white/90 hover:bg-white text-center font-bold text-gray-800 rounded-full shadow-md transition transform hover:-translate-y-1'>Latest YouTube Video<\/a>",
      "            <a href='#' class='block w-full py-4 px-6 bg-white/90 hover:bg-white text-center font-bold text-gray-800 rounded-full shadow-md transition transform hover:-translate-y-1'>Newsletter Signup<\/a>",
      "            <a href='#' class='block w-full py-4 px-6 bg-white/90 hover:bg-white text-center font-bold text-gray-800 rounded-full shadow-md transition transform hover:-translate-y-1'>Twitter / X<\/a>",
      "        <\/div>",
      "    <\/div>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
