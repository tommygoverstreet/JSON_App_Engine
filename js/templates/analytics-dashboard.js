/* Template: Analytics Dashboard. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('analytics-dashboard', {
  "projectName": "Analytics Dashboard",
  "purpose": "A grid-based dashboard layout showing KPI cards.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head><script src='https://cdn.tailwindcss.com'><\/script><\/head>",
      "<body class='bg-slate-50 text-slate-900 p-8'>",
      "    <h1 class='text-2xl font-bold mb-6'>Overview<\/h1>",
      "    <div class='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>",
      "        <div class='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>",
      "            <h3 class='text-slate-500 text-sm font-medium'>Total Revenue<\/h3>",
      "            <p class='text-3xl font-bold mt-2'>$45,231<\/p>",
      "            <p class='text-emerald-500 text-sm font-medium mt-2'>+20.1% from last month<\/p>",
      "        <\/div>",
      "        <div class='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>",
      "            <h3 class='text-slate-500 text-sm font-medium'>Active Users<\/h3>",
      "            <p class='text-3xl font-bold mt-2'>2,350<\/p>",
      "            <p class='text-emerald-500 text-sm font-medium mt-2'>+180 new today<\/p>",
      "        <\/div>",
      "        <div class='bg-white p-6 rounded-xl shadow-sm border border-slate-100'>",
      "            <h3 class='text-slate-500 text-sm font-medium'>Bounce Rate<\/h3>",
      "            <p class='text-3xl font-bold mt-2'>24.5%<\/p>",
      "            <p class='text-rose-500 text-sm font-medium mt-2'>-4.1% from last month<\/p>",
      "        <\/div>",
      "    <\/div>",
      "    <div class='bg-white rounded-xl shadow-sm border border-slate-100 p-6 h-64 flex items-center justify-center text-slate-400'>",
      "        [ Chart Component Placeholder ]",
      "    <\/div>",
      "<\/body>",
      "<\/html>"
    ]
  }
});
