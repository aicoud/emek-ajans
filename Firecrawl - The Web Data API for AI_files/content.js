"use strict";(()=>{var y={apiUrl:"https://groas-backend.onrender.com",appUrl:"https://app.groas.ai",packageVersion:"dev"};function h(){if(!(typeof window>"u"))return window.__GROAS_RUNTIME_CONFIG__}function E(){return"https://groas-backend.onrender.com"}function P(){return"https://app.groas.ai"}function U(){return"2.0.2"}var m={get apiUrl(){return h()?.apiUrl??E()??y.apiUrl},get appUrl(){return h()?.appUrl??P()??y.appUrl},get packageVersion(){return h()?.packageVersion??U()??y.packageVersion}};function v(e){return new URL(e,m.apiUrl).toString()}function b(e){return new URL(e,m.appUrl).toString()}var g={background:"hsl(240 10% 3.9%)",foreground:"hsl(0, 0%, 90%)",primary:"hsl(0, 0%, 98%)",primaryForeground:"hsl(240 10% 3.9%)",muted:"hsl(240 5% 9.6%)",mutedForeground:"hsl(240, 5%, 65%)",border:"hsl(240 3.7% 14.9%)"},w=e=>`${Math.round(e*.65)}px`;function C(){if(!document.getElementById("groas-validation-animations")){let l=document.createElement("style");l.id="groas-validation-animations",l.textContent=`
      @keyframes groas-modal-in {
        from {
          opacity: 0;
          transform: scale(0.95) translateY(-10px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      @keyframes groas-overlay-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes groas-success-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `,document.head.appendChild(l)}let e=document.createElement("div");e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    backdrop-filter: blur(12px);
    animation: groas-overlay-in 0.3s ease-out;
  `;let t=document.createElement("div");t.style.cssText=`
    background: ${g.background};
    border-radius: ${w(16)};
    padding: 0;
    width: 90%;
    max-width: 420px;
    overflow: hidden;
    border: 1px solid ${g.border};
    box-shadow: 
      0 32px 64px -12px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    animation: groas-modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
  `;let n=document.createElement("div");n.style.cssText=`
    padding: 48px 32px 32px 32px;
    text-align: center;
    position: relative;
  `;let i=document.createElement("div");i.style.cssText=`
    position: relative;
    display: inline-block;
    margin-bottom: 24px;
  `;let r=document.createElement("div");r.style.cssText=`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, hsla(142, 76%, 36%, 0.3) 0%, transparent 70%);
    border-radius: 50%;
  `;let s=document.createElement("div");s.style.cssText=`
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(142, 76%, 46%) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 
      0 8px 24px hsla(142, 76%, 36%, 0.3),
      inset 0 1px 0 hsla(255, 255, 255, 0.2);
    animation: groas-success-pulse 2s ease-in-out infinite;
  `,s.innerHTML=`
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  `;let u=document.createElement("h2");u.textContent="Script Installed Successfully!",u.style.cssText=`
    margin: 0 0 12px 0;
    font-size: 24px;
    color: ${g.foreground};
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.2;
  `;let c=document.createElement("p");c.textContent="Your groas content script is now active and ready to optimize your campaigns.",c.style.cssText=`
    margin: 0 0 32px 0;
    font-size: 15px;
    color: ${g.mutedForeground};
    line-height: 1.5;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  `;let o=document.createElement("button");o.textContent="Continue to groas",o.style.cssText=`
    padding: 14px 28px;
    background: linear-gradient(135deg, ${g.primary} 0%, hsl(0, 0%, 95%) 100%);
    color: ${g.primaryForeground};
    border: none;
    border-radius: ${w(10)};
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 4px 12px hsla(0, 0%, 0%, 0.15),
      inset 0 1px 0 hsla(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
  `,o.onmouseenter=()=>{o.style.transform="translateY(-1px)",o.style.boxShadow=`
      0 6px 20px hsla(0, 0%, 0%, 0.2),
      inset 0 1px 0 hsla(255, 255, 255, 0.2)
    `},o.onmouseleave=()=>{o.style.transform="translateY(0)",o.style.boxShadow=`
      0 4px 12px hsla(0, 0%, 0%, 0.15),
      inset 0 1px 0 hsla(255, 255, 255, 0.2)
    `},o.onclick=()=>{t.style.animation="groas-modal-in 0.2s cubic-bezier(0.4, 0, 1, 1) reverse",e.style.animation="groas-overlay-in 0.2s ease-out reverse",setTimeout(()=>{document.body.removeChild(e)},200)},i.appendChild(r),i.appendChild(s),n.appendChild(i),n.appendChild(u),n.appendChild(c),n.appendChild(o),t.appendChild(n),e.appendChild(t),document.body.appendChild(e),e.onclick=l=>{l.target===e&&(t.style.animation="groas-modal-in 0.2s cubic-bezier(0.4, 0, 1, 1) reverse",e.style.animation="groas-overlay-in 0.2s ease-out reverse",setTimeout(()=>{document.body.removeChild(e)},200))};let d=l=>{l.key==="Escape"&&(t.style.animation="groas-modal-in 0.2s cubic-bezier(0.4, 0, 1, 1) reverse",e.style.animation="groas-overlay-in 0.2s ease-out reverse",setTimeout(()=>{document.body.removeChild(e),document.removeEventListener("keydown",d)},200))};document.addEventListener("keydown",d)}function R(){return new URLSearchParams(window.location.search).has("groasScriptValidation")}function S(){R()&&C()}var a=null,p={},x=new Set;function L(){let e=new URLSearchParams(window.location.search);return{id:e.get("landingpage")||e.get("groas"),isPreview:e.get("groasPreview")==="true"}}function _(){return new URLSearchParams(window.location.search).get("dynamicContentSelector")}async function A(e){try{console.debug("[groas] Loading simple content selector with token:",e);let t=document.createElement("script");t.src=b("/snippet/simpleSelector.js"),t.async=!0,t.onload=()=>{console.debug("[groas] Simple content selector loaded"),typeof window.initGroasSimpleSelector=="function"&&window.initGroasSimpleSelector(e)},t.onerror=n=>{console.error("[groas] Failed to load simple content selector:",n)},document.head.appendChild(t)}catch(t){console.error("[groas] Error loading simple content selector:",t)}}async function k(e){try{console.debug("[groas] Loading dynamic content selector with token:",e);let t=document.createElement("script");t.src=b("/snippet/dynamicSelector.js"),t.async=!0,t.onload=()=>{console.debug("[groas] Dynamic content selector loaded"),typeof window.initGroasDynamicSelector=="function"&&window.initGroasDynamicSelector(e)},t.onerror=n=>{console.error("[groas] Failed to load dynamic content selector:",n)},document.head.appendChild(t)}catch(t){console.error("[groas] Error loading dynamic content selector:",t)}}function M(){x.clear(),console.debug("[groas] Reset processed selectors")}async function G(e,t){try{let n=new URL(v(`/api/content/${e}`));t&&n.searchParams.set("groasPreview","true");let i=await fetch(n.toString(),{headers:{Accept:"application/json"}});if(!i.ok)return console.debug("[groas] Failed to fetch content:",i.status),null;let r=await i.json();return console.debug("[groas] Raw content received:",r),M(),r}catch(n){return console.debug("[groas] Error fetching content:",n),null}}function I(e){p={};for(let t of e)if(typeof t.cssSelector=="string"&&t.cssSelector)try{let n=document.querySelectorAll(t.cssSelector);n.length>0?p[t.cssSelector]=n[0]:(console.debug(`[groas] No elements found for selector: ${t.cssSelector}`),p[t.cssSelector]=null)}catch(n){console.warn(`[groas] Invalid selector: ${t.cssSelector}`,n),p[t.cssSelector]=null}else console.warn("[groas] Skipping mapping without a valid selector:",t)}function N(e){let t=document.createElement("textarea");return t.innerHTML=e,t.value}function f(e){let t=0,n=0,i=!0;for(let{cssSelector:r,copy:s,isFormattedText:u}of e){if(x.has(r)){t++;continue}try{let c=document.querySelectorAll(r);if(c.length>0){p[r]=c[0],t++;for(let o of c)if(console.debug(`[groas] Applying to ${r}:`,{content:s,isFormattedText:u,elementType:o.tagName}),o.tagName==="IMG")try{o.setAttribute("src",s),o.hasAttribute("srcset")&&o.removeAttribute("srcset")}catch(d){console.error("[groas] Error applying image content:",d)}else if(u)try{if(o.innerHTML=s,o.innerHTML.includes("&lt;")||o.innerHTML.includes("&gt;")){let d=N(s);if(o.innerHTML=d,o.innerHTML.includes("&lt;")||o.innerHTML.includes("&gt;")){o.innerHTML="";let l=document.createElement("template");l.innerHTML=d,o.appendChild(l.content.cloneNode(!0))}}}catch(d){console.error("[groas] Error applying HTML content:",d),o.textContent=s}else o.textContent=s;x.add(r)}else n++,p[r]=null,i=!1}catch(c){console.error(`[groas] Error selecting or applying content to ${r}:`,c),p[r]=null,i=!1}}return t>0?console.debug(`[groas] Applied content to ${t}/${e.length} elements (missing: ${n})`):e.length>0&&console.debug("[groas] No elements found for content mapping selectors. Will retry later."),i}function $(e,t){let n;return(...r)=>{if(!n){let s=e(...r);return n=!0,setTimeout(()=>{n=!1},t),s}}}function V(){if(!a)return;new MutationObserver($(t=>{if(!a)return;let n=!1;for(let i of t)if(i.type==="childList"&&i.addedNodes.length>0){n=!0;break}if(n)if(console.debug("[groas] DOM mutation detected, reapplying content"),f(a))console.debug("[groas] All elements found and content applied on first attempt");else{let r=0;for(let s of[100,500,1e3])setTimeout(()=>{a&&(console.debug(`[groas] Retrying content application after ${s}ms delay (retry #${++r})`),f(a)&&console.debug("[groas] All content successfully applied"))},s)}},300)).observe(document.body,{childList:!0,subtree:!0}),console.debug("[groas] Mutation observer set up to detect new elements")}async function F(){let{id:e,isPreview:t}=L();if(!e||(a=await G(e,t),console.log("contentMappings",a),!a))return;I(a),console.log("selectorCache",p),console.log("Applying initial content");let n=f(a);console.log("Applied initial content. Setting up observer."),V(),n||setTimeout(()=>{a&&(console.debug("[groas] Retrying content application after initial delay"),f(a))},1e3)}async function T(){S();let e=_();if(e==="true"){await A(e);return}if(e){k(e);return}await F()}console.log(`GROAS script loaded: v${m.packageVersion}`);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();})();
