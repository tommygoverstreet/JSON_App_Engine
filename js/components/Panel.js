/* Base for the inspector lists. Subclasses return cards from items(). */
Engine.Panel=class extends Engine.Component{
  init(){this.open=new Set();this.bodies={};this.el.classList.add('list');
    this.el.addEventListener('toggle',e=>{const d=e.target,k=d.dataset&&d.dataset.k;if(!k)return;
      if(d.open){this.open.add(k);const p=d.querySelector('pre');if(p&&!p.textContent)p.textContent=this.bodies[k]}else this.open.delete(k)},true);
    this.el.addEventListener('click',e=>{const b=e.target.closest('[data-copy]');if(!b)return;
      navigator.clipboard.writeText(this.bodies[b.dataset.copy]).then(()=>this.app.bus.emit('toast',{msg:'Copied'}),()=>this.app.bus.emit('toast',{msg:'Copy was blocked',err:1}))});
    this.refresh();this.on('compiled',this.refresh);this.on('resources',this.refresh)}
  items(){return[]}
  intro(){return''}
  empty(){return'Nothing here yet.'}
  refresh(){const u=Engine.util,its=this.items();
    this.el.innerHTML=(this.intro()?'<p class="hint">'+this.intro()+'</p>':'')+(its.length?its.map(i=>{this.bodies[i.k]=i.body||'';const o=this.open.has(i.k);
      return '<details class="card" data-k="'+u.esc(i.k)+'"'+(o?' open':'')+'><summary><span class="chip '+i.chip+'">'+i.chip+'</span><span class="nm">'+u.esc(i.name)+'</span><span class="meta">'+u.esc(i.meta||'')+'</span></summary><div class="act">'+(i.url?'<a href="'+u.esc(i.url)+'" target="_blank" rel="noopener">'+u.esc(i.url)+'</a>':'')+(i.body?'<button class="btn" data-copy="'+u.esc(i.k)+'">Copy</button>':'')+'</div>'+(i.body?'<pre>'+(o?u.esc(i.body):'')+'</pre>':'')+'</details>'}).join(''):'<p class="hint">'+this.empty()+'</p>')}
  ext(kind){return this.app.scanner.items.filter(i=>i.kind===kind).map(i=>({k:'x'+i.url,chip:kind,name:i.name,url:i.url,body:i.text,meta:i.state==='ok'?Engine.util.kb(i.text.length):i.state==='load'?'Fetching':'Not fetched'}))}
};
