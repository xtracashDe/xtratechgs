/* Xtratech Global Solutions - shared site script */
function T(m){var b=document.body;b.className=m==='dark'?'dark':m==='system'?'sys':'';document.querySelectorAll('.tb').forEach(function(x){x.classList.remove('on')});var id=m==='light'?'tL':m==='dark'?'tD':'tS';var el=document.getElementById(id);if(el)el.classList.add('on');try{localStorage.setItem('xt',m)}catch(e){}}
try{var sv=localStorage.getItem('xt');if(sv)T(sv)}catch(e){}
var hb=document.getElementById('hb');
if(hb)hb.addEventListener('click',function(){var m=document.getElementById('mo');m.style.display=m.style.display==='block'?'none':'block'});
function S(e){e.preventDefault();document.getElementById('cF').style.display='none';document.getElementById('cS').style.display='block';return false}
var ao=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('show')});},{threshold:0.1});
document.querySelectorAll('.anim').forEach(function(el){ao.observe(el)});
/* Backwards compatibility: old single-page links such as /#about now open the real page */
(function(){var h=(location.hash||'').replace('#','');var map={solutions:'solutions.html',products:'products.html',industries:'industries.html',about:'about.html',contact:'contact.html'};if(map[h]&&/(^|\/)(index\.html)?$/.test(location.pathname)){location.replace(map[h])}})();
