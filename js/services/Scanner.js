/* Finds external CSS/JS (CDNs, fonts) and fetches their source so you can read it. */
Engine.Scanner=class{
  constructor(bus){this.bus=bus;this.cache={};this.items=[];this.run=0}
  static names=[[/tailwind/i,'Tailwind CSS'],[/react/i,'React'],[/vue/i,'Vue'],[/chart/i,'Chart.js'],[/bootstrap/i,'Bootstrap'],[/alpine/i,'Alpine.js'],[/three/i,'three.js'],[/d3/i,'D3'],[/jquery/i,'jQuery'],[/fonts\.googleapis/i,'Google Fonts']];
  label(u){const n=Engine.Scanner.names.find(x=>x[0].test(u));if(n)return n[1];try{const o=new URL(u);return o.hostname+o.pathname}catch(e){return u}}
  scan(html,liveDoc){
    const id=++this.run,docs=[new DOMParser().parseFromString(html,'text/html')],found={};
    if(liveDoc)docs.push(liveDoc);
    docs.forEach(d=>{d.querySelectorAll('script[src],link[rel~=stylesheet][href]').forEach(n=>{
      let u=n.getAttribute('src')||n.getAttribute('href');if(u.startsWith('//'))u='https:'+u;
      if(/^https?:/i.test(u))found[u]=n.tagName==='SCRIPT'?'js':'css'})});
    this.items=Object.keys(found).map(url=>({url,kind:found[url],name:this.label(url),state:this.cache[url]?'ok':'load',text:this.cache[url]||''}));
    this.bus.emit('resources',this.items);
    this.items.filter(i=>i.state==='load').forEach(i=>fetch(i.url).then(r=>r.ok?r.text():Promise.reject()).then(t=>{this.cache[i.url]=t;i.text=t;i.state='ok'},()=>{i.state='fail'}).then(()=>{if(id===this.run)this.bus.emit('resources',this.items)}));
  }
};
