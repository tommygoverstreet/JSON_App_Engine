/* Turns a blueprint into one HTML string. 'preview' also carries the console bridge. */
Engine.Compiler=class{
  static bridge='<script>(function(){var p=function(l,a){try{parent.postMessage({eng:1,l:l,m:[].map.call(a,function(x){try{return typeof x=="object"?JSON.stringify(x):String(x)}catch(e){return String(x)}}).join(" ")},"*")}catch(e){}};["log","info","warn","error"].forEach(function(k){var o=console[k];console[k]=function(){p(k,arguments);o.apply(console,arguments)}});addEventListener("error",function(e){p("error",[e.message+" (line "+(e.lineno||0)+")"])})})()<\/script>';
  static file(bp,n){return Engine.util.text(bp&&bp.components&&bp.components[n])}
  static build(bp){
    const f=n=>Engine.Compiler.file(bp,n);let h=f('index.html');
    if(!h)throw new Error('Add components, then index.html, to the payload.');
    const inject=(link,tag,end,src)=>{if(!src)return;
      if(link.test(h))h=h.replace(link,()=>tag);else if(end.test(h))h=h.replace(end,m=>tag+'\n'+m);else h+=tag};
    inject(/<link[^>]+href=["']styles\.css["'][^>]*>/i,'<style>\n'+f('styles.css')+'\n</style>',/<\/head>/i,f('styles.css'));
    inject(/<script[^>]+src=["']app\.js["'][^>]*>\s*<\/script>/i,'<script>\n'+f('app.js')+'\n<\/script>',/<\/body>/i,f('app.js'));
    const preview=/<head[^>]*>/i.test(h)?h.replace(/<head[^>]*>/i,m=>m+Engine.Compiler.bridge):Engine.Compiler.bridge+h;
    return{html:h,preview};
  }
};
