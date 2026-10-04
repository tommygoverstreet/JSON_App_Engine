Engine.Console=class extends Engine.Component{
  init(){this.rows=[];this.on('compiled',()=>{this.rows=[];this.draw()});
    addEventListener('message',e=>{const d=e.data;if(!d||!d.eng||e.source!==this.app.preview.win())return;this.rows.push(d);this.rows=this.rows.slice(-300);this.draw()});this.draw()}
  draw(){const bad=this.rows.filter(r=>r.l==='error').length;this.app.bus.emit('count',{id:'log',n:this.rows.length,hot:bad});
    this.el.innerHTML=this.rows.length?this.rows.map(r=>'<div class="'+r.l+'">'+Engine.util.esc(r.m)+'</div>').join(''):'<p class="hint" style="padding:12px">console.log output and errors from the preview appear here.</p>'}
};
