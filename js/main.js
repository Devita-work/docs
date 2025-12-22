  window.$docsify = {
    name: "Что нового?",
    loadSidebar: true,
      alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
    subMaxLevel: 0,

    plugins: [
      function (hook, vm) {
        hook.ready(function () {
          if (!location.hash || location.hash === '#/') {
            fetch('_sidebar.md')
              .then(res => res.text())
              .then(md => {
                const match = md.match(/\((weeks\/[^)]+)\)/);
                if (match) {
                  vm.router.replace('/' + match[1]);
                }
              });
          }
        });
      }
    ],

    search: {
      noData: "Нет результатов!",
      paths: "auto",
      placeholder: "Поиск",
      hideOtherSidebarContent: true,
    },
  };