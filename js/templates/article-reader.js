/* Template: Blog Article View. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('article-reader', {
  "projectName": "Blog Article View",
  "purpose": "A typography-focused layout for reading long-form content.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-stone-50 text-stone-900 font-serif'>",
      "    <article class='max-w-2xl mx-auto py-16 px-4'>",
      "        <header class='mb-10 text-center'>",
      "            <p class='text-sm text-stone-500 uppercase tracking-widest mb-3 font-sans'>Technology<\/p>",
      "            <h1 class='text-4xl font-bold mb-4 leading-tight'>The Future of Web Development is Here<\/h1>",
      "            <p class='text-stone-500 italic'>By Jane Smith • Oct 24, 2026<\/p>",
      "        <\/header>",
      "        <div class='prose prose-stone lg:prose-xl mx-auto'>",
      "            <p class='lead text-xl text-stone-600 mb-6'>Web development has evolved drastically over the last decade. From jQuery spaghetti code to robust, type-safe reactive frameworks, the journey has been nothing short of spectacular.<\/p>",
      "            <p class='mb-4'>Today, developers have access to tools that would have seemed like magic just a few years ago. AI-assisted coding, edge computing, and zero-bundle-size frameworks are fundamentally changing how we approach building for the web.<\/p>",
      "            <blockquote class='border-l-4 border-stone-800 pl-4 italic my-6 text-xl'>\"The best tool is the one that gets out of your way and lets you build.\"<\/blockquote>",
      "            <p>As we look to the future, the boundaries between the browser and the operating system continue to blur. What comes next will require adaptability and a willingness to unlearn old habits.<\/p>",
      "        <\/div>",
      "    <\/article>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
