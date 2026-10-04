/* Output tabs (desktop) and bottom bar (phone). Both just set data-pane and data-tab on #app. */
Engine.Nav=class extends Engine.Component{
  init(){this.last='res';
    document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)this.go(b.dataset.go)});
    this.on('count',c=>{const n=document.querySelector('[data-n='+c.id+']');if(n){n.textContent=c.n;n.classList.toggle('hot',!!c.hot)}});this.go('pre')}
  go(to){if(to==='inspect')to=this.last;const out=to!=='edit';if(out&&to!=='pre')this.last=to;
    this.el.dataset.pane=out?'out':'edit';if(out)this.el.dataset.tab=to;const t=this.el.dataset.tab;
    document.querySelectorAll('[data-go]').forEach(b=>{const g=b.dataset.go,phone=!!b.closest('nav');
      b.classList.toggle('on',phone?(g==='edit'?!out:g==='pre'?out&&t==='pre':out&&t!=='pre'&&t!=='log'&&g==='inspect'):g===t)})}
};
Engine.Toast=class extends Engine.Component{
  init(){this.on('toast',m=>{this.el.textContent=m.msg;this.el.className='show'+(m.err?' err':'');clearTimeout(this.t);this.t=setTimeout(()=>this.el.className='',2400)})}
};
Engine.Splitter=class extends Engine.Component{
  init(){const w=document.querySelector('.work');this.el.addEventListener('pointerdown',e=>{this.el.setPointerCapture(e.pointerId);this.el.classList.add('drag')});
    this.el.addEventListener('pointermove',e=>this.el.classList.contains('drag')&&w.style.setProperty('--left',Math.min(70,Math.max(25,e.clientX/innerWidth*100))+'%'));
    this.el.addEventListener('pointerup',()=>this.el.classList.remove('drag'))}
};
