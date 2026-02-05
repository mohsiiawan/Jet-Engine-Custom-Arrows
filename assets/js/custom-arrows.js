(function () {
  if (typeof JECF_ARROWS === 'undefined') return;

  const prevSVG = JECF_ARROWS.prev;
  const nextSVG = JECF_ARROWS.next;

  function usesCustomSVG(itemsEl) {
    const nav = itemsEl.getAttribute('data-nav') || '';
    return (
      nav.includes('"arrow_icon":"custom_svg"') ||
      nav.includes('arrow_icon&quot;:&quot;custom_svg')
    );
  }

  function apply(root) {
    const ctx = root || document;
    const items = ctx.querySelectorAll('.jet-listing-grid__items[data-nav]');

    items.forEach(itemsEl => {
      if (!usesCustomSVG(itemsEl)) return;

      const slider = itemsEl.closest('.jet-listing-grid__slider');
      if (!slider) return;

      const prev = slider.querySelector('.jet-listing-grid__slider-icon.prev-arrow');
      const next = slider.querySelector('.jet-listing-grid__slider-icon.next-arrow');

      if (prev && prev.innerHTML.trim() === '') prev.innerHTML = prevSVG;
      if (next && next.innerHTML.trim() === '') next.innerHTML = nextSVG;
    });
  }

  document.addEventListener('DOMContentLoaded', () => apply(document));

  // Elementor editor support
  if (window.elementorFrontend && elementorFrontend.hooks) {
    elementorFrontend.hooks.addAction(
      'frontend/element_ready/jet-listing-grid.default',
      scope => apply(scope[0])
    );
  }
})();
