/* Template: Developer Minimal Portfolio. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('dev-portfolio', {
  "projectName": "Developer Minimal Portfolio",
  "purpose": "A minimal, dark-themed portfolio for a software engineer.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-gray-900 text-gray-100 font-mono p-8 max-w-4xl mx-auto'>",
      "    <header class='mb-16 mt-8'>",
      "        <h1 class='text-4xl font-bold text-green-400 mb-2'>John Doe<\/h1>",
      "        <p class='text-gray-400 text-lg'>Full Stack Software Engineer<\/p>",
      "    <\/header>",
      "    <section class='mb-16'>",
      "        <h2 class='text-2xl font-semibold mb-6 border-b border-gray-800 pb-2'>Projects<\/h2>",
      "        <div class='space-y-8'>",
      "            <div>",
      "                <h3 class='text-xl text-blue-400'>01. E-Commerce API<\/h3>",
      "                <p class='text-gray-400 mt-2 text-sm'>A robust REST API built with Node.js, Express, and PostgreSQL handling thousands of requests per minute.<\/p>",
      "            <\/div>",
      "            <div>",
      "                <h3 class='text-xl text-blue-400'>02. React Data Dashboard<\/h3>",
      "                <p class='text-gray-400 mt-2 text-sm'>Real-time analytics dashboard utilizing WebSockets and D3.js for interactive charting.<\/p>",
      "            <\/div>",
      "        <\/div>",
      "    <\/section>",
      "    <footer>",
      "        <a href='#' class='text-green-400 hover:underline mr-4'>GitHub<\/a>",
      "        <a href='#' class='text-green-400 hover:underline'>LinkedIn<\/a>",
      "    <\/footer>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
