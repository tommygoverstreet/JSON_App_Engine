/* Template: E-Commerce Product View. Copy this file, edit it, add a script tag in index.html. */
Engine.templates.add('ecommerce-product', {
  "projectName": "E-Commerce Product View",
  "purpose": "A clean product page layout with image gallery, pricing, and 'Add to Cart' functionality.",
  "components": {
    "index.html": [
      "<!DOCTYPE html>",
      "<html lang='en'>",
      "<head>",
      "    <script src='https://cdn.tailwindcss.com'><\/script>",
      "<\/head>",
      "<body class='bg-white text-gray-900'>",
      "    <div class='max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-12 mt-10'>",
      "        <div class='bg-gray-100 rounded-2xl h-96 flex items-center justify-center'>",
      "            <span class='text-gray-400'>[ Product Image ]<\/span>",
      "        <\/div>",
      "        <div class='flex flex-col justify-center'>",
      "            <h4 class='text-sm text-indigo-600 font-semibold mb-1'>AUDIO GEAR<\/h4>",
      "            <h1 class='text-3xl font-bold mb-4'>Premium Noise-Cancelling Headphones<\/h1>",
      "            <p class='text-2xl font-light text-gray-700 mb-6'>$299.00<\/p>",
      "            <p class='text-gray-600 mb-8 leading-relaxed'>Experience unparalleled sound quality with our industry-leading noise cancellation technology. Perfect for travel, work, or pure listening enjoyment.<\/p>",
      "            <button id='add-to-cart' class='bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-lg'>Add to Cart<\/button>",
      "            <p id='cart-msg' class='text-green-600 mt-3 text-sm hidden font-medium'>Item added to your cart!<\/p>",
      "        <\/div>",
      "    <\/div>",
      "    <script src='app.js'><\/script>",
      "<\/body>",
      "<\/html>"
    ],
    "app.js": [
      "document.getElementById('add-to-cart').addEventListener('click', () => {",
      "    const msg = document.getElementById('cart-msg');",
      "    msg.classList.remove('hidden');",
      "    setTimeout(() => msg.classList.add('hidden'), 2000);",
      "});"
    ]
  }
});
