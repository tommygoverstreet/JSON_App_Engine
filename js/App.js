/* Wires services and components together. Add a component: write a class, mount it below. */
Engine.App=class{
  constructor(){this.bus=new Engine.Bus();this.store=new Engine.Store('ajae-v2');this.scanner=new Engine.Scanner(this.bus);this.data={};this.out='';
    const C=(K,s,...a)=>new K(document.querySelector(s),this,...a);
    C(Engine.Nav,'#app');C(Engine.Toast,'#toast');C(Engine.Splitter,'#split');
    this.header=C(Engine.Header,'header');this.editor=C(Engine.Editor,'.editor');this.preview=C(Engine.Preview,'#p-pre');
    C(Engine.ResourcesPanel,'#p-res');C(Engine.SourcePanel,'#p-css','css');C(Engine.SourcePanel,'#p-js','js');C(Engine.HtmlPanel,'#p-out');C(Engine.Console,'#p-log');
    const s=this.store.load();s&&s.components&&s.components['index.html']?this.load(s,'Restored your last session.'):this.load(Engine.templates.get('landing-page'),'Loaded template.')}
  later(){clearTimeout(this.t);this.t=setTimeout(()=>this.compile(),700)}
  load(bp,note){this.data=bp;this.bus.emit('loaded');this.compile(note)}
  compile(note){clearTimeout(this.t);const st=document.querySelector('#status'),u=Engine.util;
    if(!this.editor.ok){st.className='err';st.textContent='Fix the JSON error first. '+(this.editor.badge.title||'');return}
    try{const r=Engine.Compiler.build(this.data);this.out=r.html;this.store.save(this.data);
      const n=Object.keys(this.data.components||{}).length;st.className='';
      st.innerHTML=(note?u.esc(note)+' ':'')+'Compiled <b>'+u.esc(this.data.projectName||'Custom project')+'</b>, '+n+' file'+(n==1?'':'s')+', '+u.kb(r.html.length)+'. '+u.esc(this.data.purpose||'');
      this.bus.emit('compiled',r);this.scanner.scan(r.html);this.bus.emit('resources')}
    catch(e){st.className='err';st.textContent='Compile failed. '+e.message}}
};
addEventListener('DOMContentLoaded',()=>window.engine=new Engine.App());
addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='Enter'){e.preventDefault();window.engine&&engine.compile()}});
