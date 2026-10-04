Engine.Preview=class extends Engine.Component{
  init(){this.f=this.$('#frame');
    this.$('.sizes').addEventListener('click',e=>{const b=e.target.closest('[data-w]');if(!b)return;this.el.querySelectorAll('[data-w]').forEach(x=>x.classList.toggle('on',x===b));this.f.style.width=b.dataset.w});
    this.$('#reload').onclick=()=>this.app.compile();
    this.$('#pop').onclick=()=>this.app.out?window.open(URL.createObjectURL(new Blob([this.app.out],{type:'text/html'}))):this.app.bus.emit('toast',{msg:'Compile first',err:1});
    this.on('compiled',r=>{this.$('#empty').hidden=true;this.f.onload=()=>setTimeout(()=>{this.app.scanner.scan(this.app.out,this.doc());this.app.bus.emit('resources')},900);this.f.srcdoc=r.preview})}
  win(){return this.f.contentWindow}
  doc(){return this.f.contentDocument}
};
