// yahya.neural.engine.js: NeuralInterfaceEngine + Consciousness Drift
export class YahyaNeuronCore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<div class="neuron-core"><canvas class="neuron-canvas"></canvas></div>`;
  }
  connectedCallback() {
    // رسم عصبونات متغيرة حسب الوقت
    const canvas = this.shadowRoot.querySelector('.neuron-canvas');
    const ctx = canvas.getContext('2d');
    const resize = ()=>{
      canvas.width = window.innerWidth;
      canvas.height = 320;
    };
    resize();
    window.addEventListener('resize', resize);
    let t = 0;
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i=0;i<32;i++){
        ctx.beginPath();
        ctx.arc(
          canvas.width/2+Math.sin(t/20+i)*120,
          160+Math.cos(t/15+i)*80,
          24+Math.sin(t/10+i)*12,
          0,2*Math.PI
        );
        ctx.strokeStyle = `rgba(${100+i*5},${255-i*7},${255-i*8},0.18)`;
        ctx.lineWidth = 2+Math.sin(t/20+i)*2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff00ea';
        ctx.stroke();
      }
      t++;
      requestAnimationFrame(draw);
    }
    draw();
  }
}
customElements.define('yahya-neuron-core', YahyaNeuronCore);

// Consciousness Drift: كل زيارة تجربة جديدة
if(!localStorage.getItem('yahya.memory')){
  localStorage.setItem('yahya.memory', 'زائر جديد '+Date.now());
}
