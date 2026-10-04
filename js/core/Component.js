/* Base class. Subclass it, bind to an element, override init(). */
Engine.Component=class{
  constructor(el,app){this.el=el;this.app=app;this.init()}
  init(){}
  $(s){return this.el.querySelector(s)}
  on(evt,fn){this.app.bus.on(evt,fn.bind(this))}
};
Engine.util={
  esc:s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
  kb:n=>n<1024?n+' B':(n/1024).toFixed(1)+' KB',
  text:v=>Array.isArray(v)?v.join('\n'):(v==null?'':String(v)),
  download(name,body,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([body],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
};
