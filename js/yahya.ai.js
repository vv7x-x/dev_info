// yahya.ai.js: Yahya.AI_Terminal - مساعد حي يكتب شفرات ويحاور الزائر
export class YahyaAITerminal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
      <div class="ai-terminal">
        <div class="ai-output"></div>
        <input class="ai-input" placeholder="اكتب أمراً أو اسألني..."/>
      </div>
    `;
  }
  connectedCallback() {
    const output = this.shadowRoot.querySelector('.ai-output');
    const input = this.shadowRoot.querySelector('.ai-input');
    input.addEventListener('keydown', e => {
      if(e.key==='Enter') {
        this.process(input.value);
        input.value = '';
      }
    });
    this.say('مرحباً بك في Yahya.AI_Terminal! جرب: help أو spawn.project(Ω)');
  }
  say(msg) {
    const output = this.shadowRoot.querySelector('.ai-output');
    output.innerHTML += `<div class='ai-msg'>${msg}</div>`;
    output.scrollTop = output.scrollHeight;
  }
  process(cmd) {
    if(cmd.toLowerCase().includes('help')) {
      this.say('الأوامر: spawn.project(Ω), mutate.ui("darkwave"), memory.status, code.generate("hello")');
    } else if(cmd.startsWith('spawn.project')) {
      this.say('تم توليد مشروع وهمي جديد في VoidDrive!');
      window.dispatchEvent(new CustomEvent('voiddrive:spawn', {detail:{name:'Ω'}}));
    } else if(cmd.startsWith('mutate.ui')) {
      this.say('تغيير شكل الواجهة...');
      document.body.classList.toggle('darkwave');
    } else if(cmd.startsWith('memory.status')) {
      this.say('ذاكرة رقمية: '+(localStorage.getItem('yahya.memory')||'فارغة'));
    } else if(cmd.startsWith('code.generate')) {
      this.say('تم توليد كود: console.log("Hello Yahya!")');
    } else {
      this.say('🤖 Yahya: أمر غير معروف. جرب help');
    }
  }
}
customElements.define('yahya-ai-terminal', YahyaAITerminal);
