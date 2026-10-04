Engine.Editor=class extends Engine.Component{
  static files={html:'index.html',css:'styles.css',js:'app.js'};
  init(){this.tab='json';this.ok=true;this.t=this.$('#code');this.badge=this.$('.badge');
    this.$('#etabs').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(!b)return;this.mark(b.dataset.t);this.tab=b.dataset.t;this.show()});
    this.t.addEventListener('input',()=>this.edit());
    this.t.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();document.execCommand('insertText',false,'    ')}});
    this.$('#fmt').onclick=()=>this.tab==='json'&&this.ok?this.show():this.app.bus.emit('toast',{msg:this.ok?'Switch to Payload.json':'Fix the JSON first',err:1});
    this.on('loaded',()=>{this.tab='json';this.mark('json');this.show()})}
  mark(t){this.el.querySelectorAll('#etabs [data-t]').forEach(x=>x.classList.toggle('on',x.dataset.t===t))}
  show(){const d=this.app.data;this.t.value=this.tab==='json'?JSON.stringify(d,null,4):Engine.Compiler.file(d,Engine.Editor.files[this.tab]);this.check()}
  check(){this.ok=true;this.badge.textContent='';if(this.tab!=='json')return;
    try{const p=JSON.parse(this.t.value);if(!p||typeof p!=='object')throw Error('Payload must be an object');this.app.data=p;this.badge.textContent='Valid JSON';this.badge.className='badge ok'}
    catch(e){this.ok=false;this.badge.textContent='JSON error';this.badge.title=e.message;this.badge.className='badge bad'}}
  edit(){if(this.tab==='json')this.check();else{const d=this.app.data;d.components=d.components||{};d.components[Engine.Editor.files[this.tab]]=this.t.value.split('\n')}
    if(this.$('#auto').checked&&this.ok)this.app.later()}
};
