  window.$docsify = {
    name: "Баланс2-архив. Что нового?",
    loadSidebar: true,
    basePath: '/docs/',
    alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
    },
    subMaxLevel: 0,

    requestHeaders: {
      'cache-control': 'max-age=600',
    },

    search: {
      noData: "Нет результатов!",
      paths: "auto",
      placeholder: "Поиск",
      hideOtherSidebarContent: true,
    },
  };