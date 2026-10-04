/* Tiny publish/subscribe hub. Components talk through events, never directly. */
window.Engine={};
Engine.Bus=class{
  constructor(){this.h={}}
  on(e,f){(this.h[e]=this.h[e]||[]).push(f)}
  emit(e,p){(this.h[e]||[]).forEach(f=>f(p))}
};
