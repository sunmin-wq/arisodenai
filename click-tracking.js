(() => {
  const trackClickAsPageview = (path) => {
    if (typeof window.va === 'function') {
      window.va('pageview', { path, route: path });
    }
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const label = (link.textContent || '').replace(/\s+/g, ' ').trim();

    if (link.href.startsWith('mailto:') && label.includes('相談')) {
      trackClickAsPageview('/_click/contact');
      return;
    }

    if (link.hostname === 'michiansan.com' && label.includes('実際のサービスを見る')) {
      trackClickAsPageview('/_click/michiansan');
    }
  });
})();
