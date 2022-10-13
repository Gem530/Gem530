export const routesList = [
    {
      name: "/form",
      path: "/form",
      redirect: "noRedirect",
      component: "Layout",
      hidden: false,
      alwaysShow: true,
      meta: { title: "表单", icon: "ChatSquare" },
      children: [
        {
          name: 'pop-btn',
          path: "form/pop-btn",
          component: "form/pop-btn/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "函数式弹框", icon: "Loading" },
        },
        {
          name: "form-temp",
          path: "form/form-temp",
          hidden: false,
          component: "form/form-temp",
          meta: { title: "搜索表单", icon: "Search" },
        },
        {
          name: 'upload',
          path: "form/upload",
          component: "form/upload/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "图片上传", icon: "Upload" },
        },
        {
          name: 'rich-text',
          path: "form/rich-text",
          component: "form/rich-text/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "富文本", icon: "Edit" },
        },
        {
          name: 'remote',
          path: "form/remote",
          component: "form/remote/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "远程表单", icon: "Search" },
        },
        {
          name: 'icon',
          path: "form/icon",
          component: "form/icon/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "选择icon", icon: "ElementPlus" },
        },
        {
          name: 'tree',
          path: "form/tree",
          component: "form/tree/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "树形组件", icon: "CaretTop" },
        },
      ]
    },
    {
      name: 'table',
      path: '/table',
      redirect: "noRedirect",
      component: "Layout",
      hidden: false,
      alwaysShow: true,
      meta: { title: "表格", icon: "Grid" },
      children: [
        {
          name: 'menu',
          path: "table/menu",
          component: "table/menu/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "菜单管理", icon: "MenuIcon" },
        },
        {
          name: 'table-vue',
          path: "table/index",
          component: "table/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "表格", icon: "Grid" },
        }
      ]
    },
    {
      name: 'echart',
      path: '/echart',
      redirect: "noRedirect",
      component: "Layout",
      hidden: false,
      alwaysShow: true,
      meta: { title: "echart", icon: "PieChart" },
      children: [
        {
          name: 'echart-vue',
          path: "echart/index",
          component: "echart/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "echart", icon: "PieChart" },
        },
        {
          name: 'light-charts',
          path: "echart/light-charts",
          component: "echart/light-charts",
          hidden: false,
          alwaysShow: true,
          meta: { title: "k线图", icon: "DataLine" },
        }
      ]
    },
    {
      name: 'map',
      path: '/map',
      redirect: "noRedirect",
      component: "Layout",
      hidden: false,
      alwaysShow: true,
      meta: { title: "地图", icon: "MapLocation" },
      children: [
        {
          name: 'map-vue',
          path: "map/index",
          component: "map/index",
          hidden: false,
          alwaysShow: true,
          meta: { title: "百度地图", icon: "LocationInformation" },
        }
      ]
    },
]
// export const routesList = [
//   {
//     name: "/index",
//     path: "/index",
//     hidden: true,
//     component: "Layout",
//     meta: { title: "首页模块", icon: "#", noCache: false, link: null },
//   },
//   {
//     name: "/system",
//     path: "/system",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "系统管理", icon: "system", noCache: false, link: null },
//     children: [
//       {
//         name: "Role",
//         path: "role",
//         hidden: false,
//         component: "system/role/index",
//         meta: { title: "角色管理", icon: "people", noCache: false, link: null },
//       },
//       {
//         name: "Menu",
//         path: "menu",
//         hidden: false,
//         component: "system/menu/index",
//         meta: { title: "菜单管理", icon: "list", noCache: false, link: null },
//       },
//       {
//         name: "Dict",
//         path: "dict",
//         hidden: false,
//         component: "system/dict/index",
//         meta: { title: "字典管理", icon: "dict", noCache: false, link: null },
//       },
//     ],
//   },
//   {
//     name: "/product",
//     path: "/product",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "产品", icon: "shopping", noCache: false, link: null },
//     children: [
//       {
//         name: "List",
//         path: "list",
//         hidden: false,
//         component: "product/index",
//         meta: {
//           title: "投资产品",
//           icon: "shopping",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Add",
//         path: "add",
//         hidden: true,
//         component: "product/add-product",
//         meta: { title: "新增产品", icon: "form", noCache: false, link: null },
//       },
//       {
//         name: "Edit/:productId",
//         path: "edit/:productId",
//         hidden: true,
//         component: "product/add-product",
//         meta: { title: "编辑产品", icon: "edit", noCache: false, link: null },
//       },
//     ],
//   },
//   {
//     name: "/application",
//     path: "/application",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "应用", icon: "redis", noCache: false, link: null },
//     children: [
//       {
//         name: "Channel-user",
//         path: "channel-user",
//         hidden: false,
//         component: "system/user/index",
//         meta: { title: "渠道管理员", icon: "user", noCache: true, link: null },
//       },
//       {
//         name: "Apply-settings",
//         path: "apply-settings",
//         hidden: false,
//         component: "application/apply-settings",
//         meta: { title: "应用设置", icon: "system", noCache: true, link: null },
//       },
//       {
//         name: "Apply-edit",
//         path: "apply-edit",
//         hidden: true,
//         component: "application/apply-edit",
//         meta: {
//           title: "应用设置编辑",
//           icon: "log",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Sms-logs",
//         path: "sms-logs",
//         hidden: false,
//         component: "application/sms-logs",
//         meta: {
//           title: "短信发送记录",
//           icon: "message",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Domain",
//         path: "domain",
//         hidden: false,
//         component: "application/domain-name",
//         meta: {
//           title: "域名管理",
//           icon: "redis-list",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Regist-settings",
//         path: "regist-settings",
//         hidden: false,
//         component: "application/regist-settings",
//         meta: {
//           title: "注册赠送设置",
//           icon: "swagger",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Single-task-list",
//         path: "single-task-list",
//         hidden: false,
//         component: "application/task/single-task-list",
//         meta: {
//           title: "单任务列表",
//           icon: "time-range",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Single-task-add",
//         path: "single-task-add",
//         hidden: true,
//         component: "application/task/task-add-and-edit",
//         meta: {
//           title: "新增单任务",
//           icon: "time-range",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Single-task-edit/:taskId",
//         path: "single-task-edit/:taskId",
//         hidden: true,
//         component: "application/task/task-add-and-edit",
//         meta: {
//           title: "编辑任务",
//           icon: "time-range",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Recharge-channel",
//         path: "recharge-channel",
//         hidden: false,
//         component: "application/recharge-channel",
//         meta: { title: "充值渠道", icon: "dict", noCache: true, link: null },
//       },
//       {
//         name: "Recharge-add",
//         path: "recharge-add",
//         hidden: true,
//         component: "application/recharge-add-edit",
//         meta: { title: "创建充值渠道", icon: "#", noCache: true, link: null },
//       },
//       {
//         name: "Recharge-edit",
//         path: "recharge-edit",
//         hidden: true,
//         component: "application/recharge-add-edit",
//         meta: { title: "编辑充值渠道", icon: "#", noCache: true, link: null },
//       },
//       {
//         name: "Withdraw-channel",
//         path: "withdraw-channel",
//         hidden: false,
//         component: "application/withdraw-channel",
//         meta: { title: "提现渠道", icon: "dict", noCache: true, link: null },
//       },
//       {
//         name: "Withdraw-add",
//         path: "withdraw-add",
//         hidden: true,
//         component: "application/withdraw-add-edit",
//         meta: { title: "创建提现渠道", icon: "#", noCache: true, link: null },
//       },
//       {
//         name: "Withdraw-edit",
//         path: "withdraw-edit",
//         hidden: true,
//         component: "application/withdraw-add-edit",
//         meta: { title: "编辑提现渠道", icon: "#", noCache: true, link: null },
//       },
//     ],
//   },
//   {
//     name: "/member",
//     path: "/member",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "用户", icon: "peoples", noCache: false, link: null },
//     children: [
//       {
//         name: "User",
//         path: "user",
//         hidden: false,
//         component: "member/user/index",
//         meta: { title: "用户列表", icon: "user", noCache: false, link: null },
//       },
//       {
//         name: "User-invest",
//         path: "user-invest",
//         hidden: false,
//         component: "member/user-invest/index",
//         meta: { title: "用户投资", icon: "redis", noCache: true, link: null },
//       },
//       {
//         name: "Equipment",
//         path: "equipment",
//         hidden: false,
//         component: "member/equipment/index",
//         meta: { title: "设备列表", icon: "phone", noCache: true, link: null },
//       },
//       {
//         name: "Youtube-share",
//         path: "youtube-share",
//         hidden: false,
//         component: "member/youtube-share/index",
//         meta: {
//           title: "YouTube分享",
//           icon: "guide",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "User-rewards",
//         path: "user-rewards",
//         hidden: false,
//         component: "member/user-rewards/index",
//         meta: {
//           title: "用户奖励记录",
//           icon: "form",
//           noCache: true,
//           link: null,
//         },
//       },
//     ],
//   },
//   {
//     name: "/contents",
//     path: "/contents",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "内容", icon: "education", noCache: false, link: null },
//     children: [
//       {
//         name: "Reason-manage",
//         path: "reason-manage",
//         hidden: false,
//         component: "contents/reason-manage",
//         meta: { title: "理由管理", icon: "log", noCache: false, link: null },
//       },
//       {
//         name: "Article",
//         path: "article",
//         hidden: false,
//         component: "contents/article-manage",
//         meta: { title: "图文内容", icon: "row", noCache: false, link: null },
//       },
//       {
//         name: "Lantern-slide",
//         path: "lantern-slide",
//         hidden: false,
//         component: "contents/lantern-slide",
//         meta: { title: "幻灯片", icon: "monitor", noCache: false, link: null },
//       },
//       {
//         name: "Announce",
//         path: "announce",
//         hidden: false,
//         component: "contents/announce",
//         meta: { title: "公告管理", icon: "online", noCache: false, link: null },
//       },
//       {
//         name: "Push-content",
//         path: "push-content",
//         hidden: false,
//         component: "contents/push-content",
//         meta: {
//           title: "推送内容管理",
//           icon: "guide",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Share-content",
//         path: "share-content",
//         hidden: false,
//         component: "contents/share-content",
//         meta: { title: "分享内容", icon: "link", noCache: false, link: null },
//       },
//       {
//         name: "Data-carousel",
//         path: "data-carousel",
//         hidden: false,
//         component: "contents/data-carousel",
//         meta: { title: "轮播内容", icon: "zip", noCache: false, link: null },
//       },
//     ],
//   },
//   {
//     name: "/accounting",
//     path: "/accounting",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "财务", icon: "money", noCache: false, link: null },
//     children: [
//       {
//         name: "Recharge-order",
//         path: "recharge-order",
//         hidden: false,
//         component: "accounting/recharge-order",
//         meta: {
//           title: "充值订单",
//           icon: "clipboard",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Withdraw-order",
//         path: "withdraw-order",
//         hidden: false,
//         component: "accounting/withdraw-order",
//         meta: {
//           title: "提现订单",
//           icon: "clipboard",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Channel-pay",
//         path: "channel-pay",
//         hidden: true,
//         component: "accounting/channel-pay",
//         meta: { title: "渠道打款", icon: "build", noCache: true, link: null },
//       },
//     ],
//   },
//   {
//     name: "/channel",
//     path: "/channel",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "渠道", icon: "tree", noCache: false, link: null },
//     children: [
//       {
//         name: "Customer",
//         path: "customer",
//         hidden: false,
//         component: "channel/customer",
//         meta: {
//           title: "客服管理",
//           icon: "message",
//           noCache: false,
//           link: null,
//         },
//       },
//       {
//         name: "Seo-links",
//         path: "seo-links",
//         hidden: false,
//         component: "channel/seo-links",
//         meta: { title: "推广链接", icon: "link", noCache: false, link: null },
//       },
//     ],
//   },
//   {
//     name: "/marketing",
//     path: "/marketing",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "营销", icon: "international", noCache: false, link: null },
//     children: [
//       {
//         name: "Red-packet",
//         path: "red-packet",
//         hidden: false,
//         component: "marketing/red-packet",
//         meta: { title: "红包", icon: "example", noCache: false, link: null },
//       },
//       {
//         name: "Red-packet-links",
//         path: "red-packet-links",
//         hidden: false,
//         component: "marketing/red-packet-links",
//         meta: { title: "红包链接", icon: "link", noCache: false, link: null },
//       },
//     ],
//   },
//   {
//     name: "/report",
//     path: "/report",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "报表", icon: "chart", noCache: false, link: null },
//     children: [
//       {
//         name: "Channel-report",
//         path: "channel-report",
//         hidden: false,
//         component: "report/index",
//         meta: { title: "渠道报表", icon: "chart", noCache: true, link: null },
//       },
//     ],
//   },
//   {
//     name: "/syslog",
//     path: "/syslog",
//     hidden: false,
//     redirect: "noRedirect",
//     component: "Layout",
//     alwaysShow: true,
//     meta: { title: "日志管理", icon: "log", noCache: false, link: null },
//     children: [
//       {
//         name: "Syslog-login",
//         path: "syslog-login",
//         hidden: false,
//         component: "syslog/index",
//         query: '{"log":"pclogin"}',
//         meta: {
//           title: "PC登录日志",
//           icon: "monitor",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Syslog-pcoperate",
//         path: "syslog-pcoperate",
//         hidden: false,
//         component: "syslog/index",
//         query: '{"log":"pcoperate"}',
//         meta: {
//           title: "PC操作日志",
//           icon: "monitor",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Syslog-applogin",
//         path: "syslog-applogin",
//         hidden: false,
//         component: "syslog/index",
//         query: '{"log":"applogin"}',
//         meta: {
//           title: "APP登录日志",
//           icon: "phone",
//           noCache: true,
//           link: null,
//         },
//       },
//       {
//         name: "Syslog-appoperate",
//         path: "syslog-appoperate",
//         hidden: false,
//         component: "syslog/index",
//         query: '{"log":"appoperate"}',
//         meta: {
//           title: "APP操作日志",
//           icon: "phone",
//           noCache: true,
//           link: null,
//         },
//       },
//     ],
//   },
// ];
