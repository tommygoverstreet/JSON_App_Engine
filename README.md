# AI JSON App Engine

Open `index.html` in a browser. No build step and no dependencies.

## Structure
- `css/tokens.css` colors, fonts, sizes. Change the look here.
- `css/app.css` layout and components. Phone layout is the `max-width:860px` block.
- `js/core/` Bus (events), Component (base class), Store (saved session).
- `js/services/` Compiler (blueprint to HTML), Scanner (reads external CSS/JS), TemplateRegistry.
- `js/components/` one class per screen part: Header, Editor, Preview, Panels, Console, Nav.
- `js/templates/` one file per starter template.
- `js/App.js` creates everything and connects it.

## Common changes
- **New template:** copy a file in `js/templates/`, edit it, add a script tag in `index.html`.
- **New inspector panel:** extend `Engine.Panel`, return cards from `items()`, add a `div.panel` and a tab button in `index.html`, mount it in `App.js`.
- **New component:** extend `Engine.Component`, use `this.on('event', fn)` and `this.app.bus.emit(...)`.

The Resources tab fetches external files with `fetch`, which works when you open the file locally or host it. A page served from a sandboxed origin may block it.
