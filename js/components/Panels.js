/* The inspector panels. To add one, extend Engine.Panel and mount it in App.js. */
Engine.ResourcesPanel=class extends Engine.Panel{
  intro(){return this.app.scanner.items.length?'Loaded from outside your blueprint each time the app runs. Open one to read its source.':''}
  empty(){return 'This app loads nothing from outside your blueprint.'}
  items(){this.app.bus.emit('count',{id:'res',n:this.app.scanner.items.length});return this.ext('css').concat(this.ext('js'))}
};
Engine.SourcePanel=class extends Engine.Panel{
  constructor(el,app,kind){el.kindOf=kind;super(el,app)}
  items(){const k=this.el.kindOf,css=k==='css',f=css?'styles.css':'app.js',own=Engine.Compiler.file(this.app.data,f),r=[],u=Engine.util;
    if(own)r.push({k:'own',chip:k,name:f,body:own,meta:u.kb(own.length)});
    const d=new DOMParser().parseFromString(Engine.Compiler.file(this.app.data,'index.html'),'text/html');
    d.querySelectorAll(css?'style':'script:not([src])').forEach((n,i)=>{if(n.textContent.trim())r.push({k:'in'+i,chip:k,name:(css?'style':'script')+' block in index.html',body:n.textContent,meta:u.kb(n.textContent.length)})});
    if(css)try{const tw=this.app.scanner.items.some(i=>/tailwind/i.test(i.url));this.app.preview.doc().querySelectorAll('style').forEach((s,i)=>{if(s.textContent.trim())r.push({k:'rt'+i,chip:'rt',name:tw?'Tailwind output built from this page':'Added at runtime',body:s.textContent,meta:u.kb(s.textContent.length)})})}catch(e){}
    return r.concat(this.ext(k))}
  empty(){return 'Nothing yet. Add '+(this.el.kindOf==='css'?'styles.css or a style block.':'app.js or a script block.')}
};
Engine.HtmlPanel=class extends Engine.Panel{
  items(){const h=this.app.out;return h?[{k:'html',chip:'own',name:'index.html with CSS and JS inlined',body:h,meta:Engine.util.kb(h.length)}]:[]}
  empty(){return 'Compile to see the finished page.'}
};
