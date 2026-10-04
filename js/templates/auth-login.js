/* Template: Modern Auth Modal. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('auth-login', {
  "projectName": "Modern Auth Modal",
  "purpose": "A centered login form with social authentication placeholders.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-slate-100 h-screen flex items-center justify-center'>",
      "    <div class='bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm'>",
      "        <h2 class='text-2xl font-bold text-center text-slate-800 mb-6'>Welcome back<\/h2>",
      "        <form class='space-y-4'>",
      "            <div>",
      "                <label class='block text-sm font-medium text-slate-700 mb-1'>Email<\/label>",
      "                <input type='email' class='w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='you@example.com'>",
      "            <\/div>",
      "            <div>",
      "                <label class='block text-sm font-medium text-slate-700 mb-1'>Password<\/label>",
      "                <input type='password' class='w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' placeholder='••••••••'>",
      "            <\/div>",
      "            <button type='button' class='w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition'>Sign In<\/button>",
      "        <\/form>",
      "        <div class='mt-6 border-t border-slate-200 pt-6'>",
      "            <button type='button' class='w-full bg-white border border-slate-300 text-slate-700 font-medium py-2 rounded-md hover:bg-slate-50 transition mb-3'>Sign in with Google<\/button>",
      "            <button type='button' class='w-full bg-slate-900 text-white font-medium py-2 rounded-md hover:bg-slate-800 transition'>Sign in with GitHub<\/button>",
      "        <\/div>",
      "    <\/div>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
