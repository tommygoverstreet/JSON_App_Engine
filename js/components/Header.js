Engine.Header=class extends Engine.Component{
  init(){const sel=this.$('#tpl'),app=this.app,u=Engine.util,say=(msg,err)=>app.bus.emit('toast',{msg,err});
    Engine.templates.keys().forEach(k=>sel.add(new Option(Engine.templates.get(k).projectName,k)));
    sel.onchange=()=>app.load(Engine.templates.get(sel.value),'Loaded template.');
    const f=this.$('#file');this.$('#imp').onclick=()=>f.click();
    f.onchange=()=>{const x=f.files[0];if(!x)return;x.text().then(t=>{try{const o=JSON.parse(t);if(!o||typeof o!=='object')throw 0;sel.value='';app.load(o,'Imported '+x.name+'.')}catch(e){say('Not a valid JSON blueprint',1)}});f.value=''};
    const slug=()=>String(app.data.projectName||'app').replace(/\W+/g,'_').toLowerCase();
    this.$('#expJ').onclick=()=>app.editor.ok?(u.download(slug()+'_blueprint.json',JSON.stringify(app.data,null,4),'application/json'),say('Blueprint exported')):say('Fix the JSON first',1);
    this.$('#expH').onclick=()=>app.out?(u.download(slug()+'.html',app.out,'text/html'),say('HTML exported')):say('Compile first',1);
    this.$('#go').onclick=()=>app.compile()}
};
