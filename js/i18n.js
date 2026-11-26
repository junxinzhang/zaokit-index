/* Zaokit corporate site — bilingual (zh / en) */
(function () {
  "use strict";

  var DICT = {
    zh: {
      "meta.title": "Zaokit — 让 AI 真正开始干活",
      "meta.desc": "Zaokit 提供 AI 内容创作、Claude 与 OpenAI API 接入、企业 AI 用量管理、Claude 工作环境托管和大模型私有化部署，以及面向企业的安全、运维与网络解决方案。",
      "meta.og": "从内容创作到企业落地，稳定、开箱即用的 AI 产品与解决方案。",
      "skip": "跳到正文",
      "nav.featured": "精选", "nav.all": "全部产品", "nav.why": "优势", "nav.about": "关于", "nav.contact": "联系",

      "hero.title": "让 AI 真正开始干活。",
      "hero.sub": "从内容创作到企业落地，Zaokit 提供稳定、开箱即用的 AI 产品与解决方案。",
      "hero.cta1": "了解产品", "hero.cta2": "联系我们",

      "cat.create": "创作与沟通", "cat.access": "模型接入与管理", "cat.host": "托管与部署", "cat.ent": "企业方案", "cat.more": "更多服务",

      "canvas.prompt": "“把这篇新品介绍做成小红书图文，配三张图。”", "canvas.c1": "你",

      "featured.title": "精选产品。", "featured.sub": "从内容创作，到企业级模型接入与部署。",
      "common.learn": "了解更多",

      "studio.name": "Zaokit 创作平台",
      "studio.title": "把文字变成好看的视觉内容。",
      "studio.desc": "粘贴一篇文章或一个链接，生成封面、小红书图文、插画、漫画和演示文稿。",
      "studio.cta": "开始创作", "studio.more": "查看更新",
      "studio.short": "把文章或链接变成封面、图文、漫画和演示。",

      "cc.name": "Zaokit Claude API 服务",
      "cc.title": "稳定接入 Claude API。",
      "cc.desc": "兼容 Anthropic 官方 API 格式，多线路路由与自动故障转移，支持企业合同和正式发票。",
      "cc.short": "兼容 Anthropic 官方 API 格式，支持企业合同和正式发票。",

      "cx.name": "Zaokit Codex API 服务",
      "cx.title": "稳定接入 OpenAI 模型，可开专票。",
      "cx.desc": "支持 OpenAI 与 Codex API 接入，兼容官方接口协议，专线优化，支持对公结算和增值税专用发票。",
      "cx.short": "OpenAI 与 Codex 接入，支持增值税专用发票。",

      "hub.title": "全公司的 AI 用量，一处管好。",
      "hub.desc": "多家模型统一接入，按部门和模型计量、分配额度，一张账单看清所有用量。",
      "hub.m1": "设计部", "hub.m2": "研发部", "hub.m3": "市场部",
      "hub.short": "多模型统一接入，按部门计量和分配用量。",

      "ops.name": "Zaokit 工作环境托管",
      "ops.title": "你的 Claude 工作环境，交给我们托管。",
      "ops.desc": "在 9 个国家的本地网络中提供隔离的 Mac Studio / Mac mini 环境，并配有一对一工程顾问。",
      "ops.short": "托管你的 Claude 工作环境：隔离的 Mac 环境，配一对一工程顾问。",

      "local.title": "大模型，跑在你自己的机器上。",
      "local.desc": "我们把开源大模型部署到你的 Mac、Windows 或 Linux 设备上，提供多机统一网关和 OpenAI 兼容 API，一次性交付。",
      "local.cta": "查看部署方案",
      "local.short": "开源大模型私有化部署与性能调优。",

      "all.title": "全部产品与方案。", "all.sub": "按你要解决的问题来找。",
      "vrt.short": "macOS 实时语音转写与翻译，适合跨语言会议。",
      "sec.short": "为企业 AI 应用提供安全防护。",
      "devops.short": "在一个页面查看研发交付与运维状态。",
      "sdwan.short": "SD-WAN 链路健康监控、告警与趋势分析。",
      "cmdb.name": "蓝鲸 CMDB 定制方案", "cmdb.short": "为蓝鲸 CMDB 提供精细化的权限与用户管理。",
      "meter.name": "Meterinfo 电表轮换管理系统", "meter.short": "管理电表从登记、轮换到更换的全过程。",
      "gift.name": "Apple 礼品卡充值服务", "gift.short": "支持美区、日区、港区等多个地区。",

      "why.title": "好用，还要放心用。", "why.sub": "为什么团队选择 Zaokit。",
      "why.c1.t": "AI 原生", "why.c1.d": "我们的 AI 产品围绕大模型能力设计，而不是在旧流程上加一个按钮。",
      "why.c2.t": "稳定可靠", "why.c2.d": "API 服务采用多线路路由与自动故障转移，为生产环境而设计。",
      "why.c3.t": "对公可开票", "why.c3.d": "API 服务与 Token Hub 支持企业合同、对公结算和发票，报销与入账都走得通。",
      "why.c4.t": "数据自主", "why.c4.d": "需要时可私有化部署，模型和数据都留在你自己的环境里。",

      "about.kicker": "关于 Zaokit",
      "about.s1": "Zaokit，取“造 Kit”之意：", "about.s2": "为 AI 时代造好用的工具。",
      "about.p": "我们相信，AI 的价值不在演示，而在每天稳定地交付结果。所以我们把复杂的模型能力，做成个人和团队拿来就能用的产品。",

      "contact.title": "聊聊你的需求。",
      "contact.desc": "无论是内容创作、模型接入、私有化部署还是企业定制，都欢迎告诉我们你想解决的问题。",
      "contact.btn": "发送邮件", "contact.btn2": "先试试创作平台",

      "footer.company": "公司", "footer.about": "关于我们", "footer.changelog": "更新日志",
      "footer.privacy": "隐私政策", "footer.terms": "使用条款", "footer.contact": "联系我们",
      "footer.social": "关注我们", "footer.rights": "保留所有权利。",
      "footer.note": "Claude 是 Anthropic 的商标；OpenAI 和 Codex 是 OpenAI 的商标；Apple、Mac、Mac Studio、Mac mini 和 macOS 是 Apple Inc. 的商标；其他商标归各自所有者所有。Zaokit 与上述公司无隶属关系。"
    },
    en: {
      "meta.title": "Zaokit — AI that actually gets work done",
      "meta.desc": "Zaokit offers AI content creation tools, Claude and OpenAI API access, enterprise AI usage management, managed Claude workspaces and private LLM deployment, plus security, operations and network solutions for enterprises.",
      "meta.og": "Reliable, out-of-the-box AI products and solutions, from content creation to enterprise rollout.",
      "skip": "Skip to content",
      "nav.featured": "Featured", "nav.all": "All products", "nav.why": "Why Zaokit", "nav.about": "About", "nav.contact": "Contact",

      "hero.title": "AI that actually gets work done.",
      "hero.sub": "From content creation to enterprise rollout, Zaokit builds reliable AI products and solutions that work out of the box.",
      "hero.cta1": "Explore products", "hero.cta2": "Contact us",

      "cat.create": "Create & communicate", "cat.access": "Model access & management", "cat.host": "Hosting & deployment", "cat.ent": "Enterprise solutions", "cat.more": "More services",

      "canvas.prompt": "“Turn this product launch article into a social post with three images.”", "canvas.c1": "You",

      "featured.title": "Featured products.", "featured.sub": "From content creation to enterprise model access and deployment.",
      "common.learn": "Learn more",

      "studio.name": "Zaokit Studio",
      "studio.title": "Turn words into visuals.",
      "studio.desc": "Paste an article or a link to get covers, social image packs, illustrations, comics and slides.",
      "studio.cta": "Start creating", "studio.more": "See what’s new",
      "studio.short": "Turn articles or links into covers, image packs, comics and slides.",

      "cc.name": "Zaokit Claude API Service",
      "cc.title": "Reliable access to the Claude API.",
      "cc.desc": "Compatible with the Anthropic API format, with multi-path routing, automatic failover, enterprise contracts and formal invoices.",
      "cc.short": "Anthropic API compatible, with enterprise contracts and formal invoices.",

      "cx.name": "Zaokit Codex API Service",
      "cx.title": "Reliable access to OpenAI models. VAT special invoices.",
      "cx.desc": "Access to the OpenAI and Codex APIs, compatible with the official protocol, with optimized routing, corporate billing and VAT special invoices.",
      "cx.short": "OpenAI and Codex access, with VAT special invoices.",

      "hub.title": "All your company’s AI usage, in one place.",
      "hub.desc": "Connect multiple model providers, meter and allocate quotas by department and model, and see all usage on a single bill.",
      "hub.m1": "Design", "hub.m2": "Engineering", "hub.m3": "Marketing",
      "hub.short": "Multiple models in one hub, with usage metered by department.",

      "ops.name": "Zaokit Managed Workspace",
      "ops.title": "Your Claude workspace, managed for you.",
      "ops.desc": "Isolated Mac Studio and Mac mini environments on local networks in 9 countries, with a one-on-one engineering consultant.",
      "ops.short": "Managed Claude workspaces on isolated Macs, with a one-on-one engineering consultant.",

      "local.title": "Large models, running on your own machines.",
      "local.desc": "We deploy open-source models on your Mac, Windows or Linux hardware, with a unified multi-node gateway and an OpenAI-compatible API — delivered as a one-time project.",
      "local.cta": "See deployment plans",
      "local.short": "Private deployment and tuning of open-source LLMs.",

      "all.title": "All products and solutions.", "all.sub": "Find them by the problem you need to solve.",
      "vrt.short": "Real-time speech transcription and translation on macOS, made for cross-language meetings.",
      "sec.short": "Protection for enterprise AI applications.",
      "devops.short": "Delivery and operations status on a single page.",
      "sdwan.short": "SD-WAN link health monitoring, alerts and trends.",
      "cmdb.name": "BlueKing CMDB Custom Solution", "cmdb.short": "Fine-grained permissions and user management for BlueKing CMDB.",
      "meter.name": "Meterinfo Meter Rotation Management", "meter.short": "Every step of a meter’s life, from registration and rotation to replacement.",
      "gift.name": "Apple Gift Card Top-up Service", "gift.short": "Available for US, Japan, Hong Kong and other regions.",

      "why.title": "Easy to use. Safe to rely on.", "why.sub": "Why teams choose Zaokit.",
      "why.c1.t": "AI-native", "why.c1.d": "Our AI products are built around what large models do well, not bolted onto old workflows.",
      "why.c2.t": "Reliable", "why.c2.d": "Our API services use multi-path routing and automatic failover, built for production.",
      "why.c3.t": "Business invoicing", "why.c3.d": "Our API services and Token Hub support enterprise contracts, corporate billing and invoices, so finance can sign off.",
      "why.c4.t": "Your data, your control", "why.c4.d": "Deploy privately when you need to, keeping models and data in your own environment.",

      "about.kicker": "About Zaokit",
      "about.s1": "Zaokit comes from 造 (zào, “to make”) + kit:", "about.s2": "building useful tools for the AI era.",
      "about.p": "We believe AI proves its value not in demos, but in delivering results reliably, every day. So we turn complex model capabilities into products that individuals and teams can simply pick up and use.",

      "contact.title": "Let’s talk.",
      "contact.desc": "Content creation, model access, private deployment or a custom enterprise build — tell us the problem you want to solve.",
      "contact.btn": "Email us", "contact.btn2": "Try Zaokit Studio first",

      "footer.company": "Company", "footer.about": "About", "footer.changelog": "Changelog",
      "footer.privacy": "Privacy policy", "footer.terms": "Terms of use", "footer.contact": "Contact",
      "footer.social": "Follow us", "footer.rights": "All rights reserved.",
      "footer.note": "Claude is a trademark of Anthropic. OpenAI and Codex are trademarks of OpenAI. Apple, Mac, Mac Studio, Mac mini and macOS are trademarks of Apple Inc. Other trademarks belong to their respective owners. Zaokit is not affiliated with these companies."
    }
  };

  function setMeta(sel, val) {
    var el = document.querySelector(sel);
    if (el && val) el.setAttribute("content", val);
  }

  var I18N = {
    lang: "zh",
    init: function () {
      var saved = null;
      try { saved = localStorage.getItem("zaokit_lang"); } catch (e) {}
      var nav = (navigator.language || "").toLowerCase();
      this.apply(saved || (nav.indexOf("zh") === 0 ? "zh" : "en"));
      var btn = document.getElementById("lang-switch");
      if (btn) btn.addEventListener("click", function () { I18N.switchLang(); });
    },
    apply: function (lang) {
      if (!DICT[lang]) lang = "zh";
      this.lang = lang;
      var dict = DICT[lang];
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.textContent = dict[key];
      });
      document.title = dict["meta.title"];
      setMeta('meta[name="description"]', dict["meta.desc"]);
      setMeta('meta[property="og:title"]', dict["meta.title"]);
      setMeta('meta[property="og:description"]', dict["meta.og"]);
      var btn = document.getElementById("lang-switch");
      if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";
      try { localStorage.setItem("zaokit_lang", lang); } catch (e) {}
    },
    switchLang: function () { this.apply(this.lang === "zh" ? "en" : "zh"); },
    dict: DICT
  };

  window.I18N = I18N;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { I18N.init(); });
  } else {
    I18N.init();
  }
})();
