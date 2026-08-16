(()=>{
const TRACKS={
 forest:{name:'森林晨光',bpm:112,lead:[64,67,71,67,69,72,71,67,64,67,72,71,69,67,64,62],bass:[40,40,43,43,45,45,43,43],wave:'triangle'},
 ruins:{name:'符文遗迹',bpm:104,lead:[57,60,64,62,57,60,65,64,55,59,62,60,55,59,64,62],bass:[33,33,36,36,31,31,36,36],wave:'sine'},
 lava:{name:'熔岩进军',bpm:126,lead:[52,55,59,60,59,55,52,55,50,53,57,59,57,53,50,48],bass:[28,28,31,31,26,26,24,24],wave:'sawtooth'},
 boss:{name:'暗炎决战',bpm:148,lead:[48,51,55,58,55,51,60,58,47,50,54,57,54,50,59,57],bass:[24,24,27,27,22,22,29,29],wave:'square'},
 victory:{name:'星辉凯旋',bpm:118,lead:[60,64,67,72,71,67,64,67,69,72,76,74,72,69,67,72],bass:[36,36,40,40,41,41,43,43],wave:'triangle'}
};
let ctx=null,master=null,enabled=true,volume=.38,current='forest',timer=null,nextTime=0,step=0,frameRef=null,lastStage='';
const midi=n=>440*Math.pow(2,(n-69)/12);
function ensure(){if(ctx)return;ctx=new (window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=volume;master.connect(ctx.destination)}
function tone(freq,start,dur,type,g=.08){const o=ctx.createOscillator(),v=ctx.createGain();o.type=type;o.frequency.value=freq;v.gain.setValueAtTime(.0001,start);v.gain.exponentialRampToValueAtTime(g,start+.015);v.gain.exponentialRampToValueAtTime(.0001,start+dur);o.connect(v);v.connect(master);o.start(start);o.stop(start+dur+.03)}
function kick(start,g=.12){const o=ctx.createOscillator(),v=ctx.createGain();o.type='sine';o.frequency.setValueAtTime(110,start);o.frequency.exponentialRampToValueAtTime(46,start+.12);v.gain.setValueAtTime(g,start);v.gain.exponentialRampToValueAtTime(.0001,start+.15);o.connect(v);v.connect(master);o.start(start);o.stop(start+.16)}
function hat(start,g=.025){const b=ctx.createBuffer(1,ctx.sampleRate*.04,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);const s=ctx.createBufferSource(),v=ctx.createGain();s.buffer=b;v.gain.value=g;s.connect(v);v.connect(master);s.start(start)}
function schedule(){if(!ctx||!enabled)return;const tr=TRACKS[current],beat=60/tr.bpm/2;while(nextTime<ctx.currentTime+.8){const i=step%16,n=tr.lead[i],b=tr.bass[Math.floor(i/2)%tr.bass.length];tone(midi(n),nextTime,beat*.82,tr.wave,current==='boss'?.085:.065);if(i%2===0)tone(midi(b),nextTime,beat*1.75,'sine',current==='boss'?.10:.075);if(i%4===0)kick(nextTime,current==='boss'?.15:.10);hat(nextTime+beat*.5,current==='boss'?.04:.022);nextTime+=beat;step++}}
function start(){ensure();if(ctx.state==='suspended')ctx.resume();enabled=true;if(master)master.gain.setTargetAtTime(volume,ctx.currentTime,.05);if(!timer){nextTime=ctx.currentTime+.05;timer=setInterval(schedule,120);schedule()}syncUI()}
function stop(){enabled=false;if(master&&ctx)master.gain.setTargetAtTime(.0001,ctx.currentTime,.08);syncUI()}
function setTrack(k){if(!TRACKS[k]||k===current)return;current=k;step=0;if(ctx)nextTime=ctx.currentTime+.08;syncUI()}
function setVolume(v){volume=Math.max(0,Math.min(1,+v));if(master&&ctx)master.gain.setTargetAtTime(enabled?volume:.0001,ctx.currentTime,.05);localStorage.setItem('std4mth_bgm_volume',volume);syncUI()}
function syncUI(){const n=document.getElementById('bgmName'),b=document.getElementById('bgmToggle'),s=document.getElementById('bgmVolume');if(n)n.textContent=TRACKS[current].name;if(b)b.textContent=enabled?'♫ ON':'♫ OFF';if(s&&document.activeElement!==s)s.value=Math.round(volume*100)}
function detect(){try{if(!frameRef||!frameRef.contentDocument)return;const d=frameRef.contentDocument;const boss=d.getElementById('bossBar');if(boss&&boss.style.display==='block'){setTrack('boss');return}const stage=(d.getElementById('stageName')?.textContent||d.getElementById('introTitle')?.textContent||'').trim();if(stage!==lastStage){lastStage=stage;if(/森林/.test(stage))setTrack('forest');else if(/遗迹/.test(stage))setTrack('ruins');else if(/熔岩|王城/.test(stage))setTrack('lava')}const result=d.getElementById('result');if(result&&result.classList.contains('show'))setTrack('victory')}catch(e){}}
function init(){volume=parseFloat(localStorage.getItem('std4mth_bgm_volume')||'.38');frameRef=document.getElementById('frame');const ui=document.getElementById('bgmPanel');if(ui){document.getElementById('bgmToggle').onclick=()=>enabled?stop():start();document.getElementById('bgmVolume').oninput=e=>setVolume(e.target.value/100)}['pointerdown','keydown','touchstart'].forEach(ev=>window.addEventListener(ev,()=>{if(enabled)start()},{once:true,passive:true}));setInterval(detect,700);syncUI()}
window.GameBGM={start,stop,setTrack,setVolume};
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();