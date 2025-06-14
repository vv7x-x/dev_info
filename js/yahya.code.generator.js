// yahya.code.generator.js: Yahya.NeuronCore يولّد أفكار برمجية تلقائية
export class CodeForgeReactor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<div class="reactor-bg"><slot></slot></div>`;
  }
  connectedCallback() {
    // يمكن إضافة تفاعل إضافي هنا
  }
}
customElements.define('codeforge-reactor', CodeForgeReactor);

// WebMatrix Field: شبكة عصبونات تفاعلية
export class WebMatrixField extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<canvas class="matrix-canvas"></canvas>`;
  }
  connectedCallback() {
    const canvas = this.shadowRoot.querySelector('.matrix-canvas');
    const ctx = canvas.getContext('2d');
    const resize = ()=>{
      canvas.width = window.innerWidth;
      canvas.height = 240;
    };
    resize();
    window.addEventListener('resize', resize);
    let t = 0;
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i=0;i<64;i++){
        ctx.beginPath();
        ctx.moveTo(canvas.width/2,120);
        ctx.lineTo(
          canvas.width/2+Math.sin(t/10+i)*180,
          120+Math.cos(t/8+i)*100
        );
        ctx.strokeStyle = `rgba(0,255,247,${0.08+0.08*Math.abs(Math.sin(t/20+i))})`;
        ctx.lineWidth = 1.5+Math.sin(t/20+i)*1.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00fff7';
        ctx.stroke();
      }
      t++;
      requestAnimationFrame(draw);
    }
    draw();
  }
}
customElements.define('webmatrix-field', WebMatrixField);
