const views = {
  overview: `<h3>Your drive, at a glance.</h3><p class="sub">A little context for the road ahead.</p><div class="preview-stats"><div>CAMERA<strong>Connected</strong></div><div>RECENT CLIPS<strong>03</strong></div></div><div class="preview-map"><span class="map-label">⌁ &nbsp; Your traffic overview</span></div><p class="preview-label">Your road companion <span>Demo overview</span></p>`,
  clips: `<h3>Moments worth keeping.</h3><p class="sub">An example of your saved clips view.</p><div class="clip-row"><span class="clip-thumb">▷</span><div><strong>Morning commute</strong><small>Example clip · Front camera</small></div><span>00:24</span></div><div class="clip-row"><span class="clip-thumb">▷</span><div><strong>A turn along the coast</strong><small>Example clip · Front camera</small></div><span>00:18</span></div><div class="clip-row"><span class="clip-thumb">▷</span><div><strong>The journey home</strong><small>Example clip · Front camera</small></div><span>00:32</span></div><p class="preview-label">Organized for a closer look <span>Sample clips</span></p>`,
  assistance: `<h3>One step at a time.</h3><p class="sub">A preview of guided accident assistance.</p><p class="help-note">In an emergency, contact local emergency services. Once safe, use the app to organize incident information.</p><div class="check-row"><span>1</span> Record the incident details</div><div class="check-row"><span>2</span> Gather photos and evidence</div><div class="check-row"><span>3</span> Review the information together</div>`
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panel = document.getElementById('preview-panel');
function selectTab(tab) {
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  panel.setAttribute('aria-labelledby', tab.id);
  panel.innerHTML = views[tab.dataset.view];
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
  });
});
selectTab(tabs[0]);
