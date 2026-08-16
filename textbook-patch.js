window.applyTextbookPatch=function(html){
const BANK=`
const TEXTBOOK_QBANK={
perimeter:[
{p:196,q:"正方形的边长是 3 m。它的周长是多少？",a:12,u:"m",x:"周长 = 4 × 边长 = 4 × 3 m = 12 m"},
{p:197,q:"一个等边三角形的三条边都是 4 cm。它的周长是多少？",a:12,u:"cm",x:"周长 = 3 × 4 cm = 12 cm"},
{p:197,q:"一个三角形的三条边分别是 6 mm、8 mm 和 10 mm。周长是多少？",a:24,u:"mm",x:"周长 = 6 mm + 8 mm + 10 mm = 24 mm"},
{p:197,q:"一个三角形的周长是 28 m，其中两条边都是 10 m。第三条边 p 是多少？",a:8,u:"m",x:"p = 28 m − 10 m − 10 m = 8 m"},
{p:198,q:"一个正六边形的边长是 20 cm。它的周长是多少？",a:120,u:"cm",x:"周长 = 6 × 20 cm = 120 cm"},
{p:198,q:"一片三角形土地的周长是 30 m，其中两条边分别是 5 m 与 12 m。另一条边是多少？",a:13,u:"m",x:"另一条边 = 30 m − 5 m − 12 m = 13 m"},
{p:210,q:"停车场长 48 m，宽 16 m。停车场的周长是多少？",a:128,u:"m",x:"周长 = 48 + 16 + 48 + 16 = 128 m"},
{p:211,q:"一片正方形草地的面积是 100 m²，边长是 10 m。草地的周长是多少？",a:40,u:"m",x:"周长 = 4 × 10 m = 40 m"},
{p:214,q:"农地长 9 m，宽 8 m。围一圈篱笆需要多少米？",a:34,u:"m",x:"周长 = 9 + 8 + 9 + 8 = 34 m"},
{p:215,q:"长方形草场长 200 m，宽 90 m。沿草场跑 3 圈，一共跑多少米？",a:1740,u:"m",x:"一圈 = 2 × (200 + 90) = 580 m；3 圈 = 1 740 m"},
{p:217,q:"一个长方形的宽是 20 cm，面积是 220 cm²。它的周长是多少？",a:62,u:"cm",x:"长 = 220 ÷ 20 = 11 cm；周长 = 62 cm"},
{p:217,q:"长方形周长是 46 cm，宽比长短 5 cm。长是多少？",a:14,u:"cm",x:"长 + 宽 = 23 cm；宽 = 长 − 5 cm，所以长 = 14 cm"}
],
area:[
{p:200,q:"长方形长 4 cm，宽 3 cm。面积是多少？",a:12,u:"cm²",x:"面积 = 长 × 宽 = 4 cm × 3 cm = 12 cm²"},
{p:202,q:"三角形的底是 8 m，高是 3 m。面积是多少？",a:12,u:"m²",x:"面积 = 底 × 高 ÷ 2 = 8 m × 3 m ÷ 2 = 12 m²"},
{p:202,q:"一个三角形的面积是 59.5 cm²，高是 17 cm。底是多少？",a:7,u:"cm",x:"底 = 59.5 × 2 ÷ 17 = 7 cm"},
{p:210,q:"停车场长 48 m，宽 16 m。面积是多少？",a:768,u:"m²",x:"面积 = 48 m × 16 m = 768 m²"},
{p:211,q:"正方形草地的面积是 100 m²。它的边长是多少？",a:10,u:"m",x:"10 m × 10 m = 100 m²，所以边长是 10 m"},
{p:213,q:"长方形凳子的长是 55 cm，宽是 33 cm。面积是多少？",a:1815,u:"cm²",x:"面积 = 55 cm × 33 cm = 1 815 cm²"},
{p:214,q:"边长 40 cm 的正方形卡片，它的面积是多少？",a:1600,u:"cm²",x:"面积 = 40 cm × 40 cm = 1 600 cm²"},
{p:215,q:"一张长方形地毯长 9 m、宽 6 m。面积是多少？",a:54,u:"m²",x:"面积 = 9 m × 6 m = 54 m²"},
{p:215,q:"正方体的体积是 216 cm³，边长是 6 cm。一个面的面积是多少？",a:36,u:"cm²",x:"一个面是正方形：6 cm × 6 cm = 36 cm²"},
{p:216,q:"用 40 m 长的铁丝网围成正方形果园。每边 10 m 时，面积是多少？",a:100,u:"m²",x:"面积 = 10 m × 10 m = 100 m²"},
{p:217,q:"正方形图案边长 12 cm。沿中线对折后，面积是多少？",a:72,u:"cm²",x:"原面积 = 144 cm²；对折后 = 72 cm²"}
],
volume:[
{p:205,q:"一个立体由 24 个 1 立方单位的小正方体组成。它的体积是多少？",a:24,u:"立方单位",x:"体积 = 24 个立方体 = 24 立方单位"},
{p:206,q:"正方体长、宽、高都是 3 cm。体积是多少？",a:27,u:"cm³",x:"体积 = 3 cm × 3 cm × 3 cm = 27 cm³"},
{p:206,q:"长方体长 4 cm、宽 2 cm、高 3 cm。体积是多少？",a:24,u:"cm³",x:"体积 = 4 cm × 2 cm × 3 cm = 24 cm³"},
{p:207,q:"长方体底部面积是 28 cm²，高是 3 cm。体积是多少？",a:84,u:"cm³",x:"体积 = 底部面积 × 高 = 28 cm² × 3 cm = 84 cm³"},
{p:207,q:"一个长方体长 5 m、宽 8 m、高 7 m。体积是多少？",a:280,u:"m³",x:"体积 = 5 m × 8 m × 7 m = 280 m³"},
{p:207,q:"一个长方体的体积是 120 cm³，底部面积是 24 cm²。高 w 是多少？",a:5,u:"cm",x:"高 = 120 cm³ ÷ 24 cm² = 5 cm"},
{p:211,q:"小正方体积木体积是 8 cm³，边长是 2 cm。木块长、宽、高分别是积木的 4 倍、3 倍、2 倍。木块体积是多少？",a:192,u:"cm³",x:"尺寸 = 8 cm × 6 cm × 4 cm；体积 = 192 cm³"},
{p:215,q:"正方体的体积是 216 cm³。它的边长是多少？",a:6,u:"cm",x:"6 × 6 × 6 = 216，所以边长是 6 cm"},
{p:216,q:"小木板长 16 cm、宽 4 cm、高 4 cm。整个木板的体积是多少？",a:256,u:"cm³",x:"体积 = 16 cm × 4 cm × 4 cm = 256 cm³"},
{p:217,q:"正方体其中一个面的面积是 49 cm²。正方体的体积是多少？",a:343,u:"cm³",x:"边长 = 7 cm；体积 = 7 × 7 × 7 = 343 cm³"}
]};
let TEXTBOOK_USED={perimeter:[],area:[],volume:[]};
function textbookPool(){return level===0?"perimeter":level===1?"area":"volume"}
function pickTextbookQuestion(){const topic=textbookPool(),bank=TEXTBOOK_QBANK[topic];if(TEXTBOOK_USED[topic].length>=bank.length)TEXTBOOK_USED[topic]=[];let av=bank.map((_,i)=>i).filter(i=>!TEXTBOOK_USED[topic].includes(i)),idx=av[rand(0,av.length-1)];TEXTBOOK_USED[topic].push(idx);return{topic,...bank[idx]}}
`;
const NEWQ=`function question(e){
 if(paused)return;paused=true;currentShield=e;$("breakText").classList.remove("showBreak");
 const item=pickTextbookQuestion(),topicName=item.topic==="perimeter"?"周长":item.topic==="area"?"面积":"体积";
 $("qtext").innerHTML=\`<div style="font-size:11px;letter-spacing:2px;color:#72e9ff;margin-bottom:8px">课本 p\${item.p} · \${topicName}</div>\${item.q}\`;
 let ans=item.a,unit=item.u,set=new Set([ans]),spread=Math.max(4,Math.round(Math.abs(ans)*.18));
 while(set.size<4){let n=ans+rand(-spread,spread);n=Number.isInteger(ans)?Math.max(1,Math.round(n)):Math.max(.5,Math.round(n*10)/10);if(n!==ans)set.add(n)}
 $("opts").innerHTML=[...set].sort(()=>Math.random()-.5).map(v=>\`<button class="opt" data-v="\${v}">\${v} \${unit}</button>\`).join("");$("feedback").textContent="";
 $("opts").querySelectorAll(".opt").forEach(btn=>btn.onclick=()=>{if(+btn.dataset.v===ans){btn.classList.add("good");e.shield=false;sp++;coin+=10;update();$("breakText").classList.add("showBreak");$("feedback").style.color="#baffdc";$("feedback").innerHTML=\`护盾粉碎！技能点 +1<br><span style="font-size:12px;font-weight:700;color:#d8f8ff">\${item.x}</span>\`;burst(e.x,e.y,"#79edff",18);setTimeout(()=>{$("question").classList.remove("show");paused=false},1200)}else{btn.classList.add("bad");$("feedback").style.color="#ffd0d0";$("feedback").textContent="符文错误，再试。"}});$("question").classList.add("show")}`;
html=html.replace('function question(e){',BANK+'function question(e){');
html=html.replace(/function question\(e\)\{[\s\S]*?\}\n\nfunction enemyAI/,NEWQ+'\n\nfunction enemyAI');
html=html.replace('{name:"森林世界",desc:"穿过森林古桥，利用浮动平台避开尖刺。"','{name:"森林世界 · 周长",desc:"课本 p196–198：周长、正多边形与逆向计算。"');
html=html.replace('{name:"魔法遗迹",desc:"深入符文遗迹，小心落石与机关平台。"','{name:"魔法遗迹 · 面积",desc:"课本 p199–204：长方形、正方形与三角形面积。"');
html=html.replace('{name:"熔岩王城",desc:"穿越熔岩机关，击败 Mini Boss 和最终 Boss。"','{name:"熔岩王城 · 体积",desc:"课本 p205–217：正方体、长方体体积与综合题。"');
return html;
};