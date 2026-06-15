/* Zaokit corporate site — bilingual (zh / en) */
(function () {
  "use strict";

  var DICT = {
    zh: {
      "skip": "跳到正文",
      "nav.products": "产品", "nav.capabilities": "能力", "nav.about": "关于", "nav.contact": "联系",

      "hero.eyebrow": "AI 原生 · 内容与算力基础设施",
      "hero.title1": "把一个想法", "hero.title2": "变成生产力",
      "hero.sub": "Zaokit 构建从内容创作到算力供给的完整产品矩阵——让创意一句话成形，让企业把 AI 算力当水电一样调度，让合规接入大模型不再有门槛。",
      "hero.cta1": "探索产品矩阵", "hero.cta2": "联系我们 →",
      "hero.stat1n": "4", "hero.stat1l": "条产品线",
      "hero.stat2n": "企业级", "hero.stat2l": "高可用 · 可开票",
      "hero.stat3n": "私有化", "hero.stat3l": "可独立部署",

      "products.kicker": "产品矩阵", "products.title": "一个公司，四个支点",
      "products.desc": "从面向创作者的内容工厂，到面向企业的算力中枢与合规接入，覆盖 AI 落地的关键环节。",
      "products.p1.tag": "内容创作", "products.p1.name": "Zaokit 创作平台",
      "products.p1.desc": "一句话生成小红书图文、PPT 演示与漫画故事。AI 内容工厂，输入文字，输出视觉。", "products.p1.link": "zaokit.app",
      "products.p2.tag": "企业算力", "products.p2.name": "AI Token Hub",
      "products.p2.desc": "企业 AI 算力的总闸与电表。把算力当水电一样统一计量、统一分配，号池优先、API 兜底。", "products.p2.link": "tokenhub.zaokit.ai",
      "products.p3.tag": "合规接入", "products.p3.name": "Claude API 服务",
      "products.p3.desc": "正规商业渠道接入 Claude，企业级高并发高可用，支持对公结算与增值税专票。", "products.p3.link": "cc.zaokit.com",
      "products.p4.tag": "合规接入", "products.p4.name": "Codex API 服务",
      "products.p4.desc": "正规商业渠道接入 OpenAI，含网络加速与合规结算，让企业稳定调用前沿模型。", "products.p4.link": "cx.zaokit.com",

      "cap.kicker": "为什么选择 Zaokit", "cap.title": "把前沿能力，变成可交付的确定性",
      "cap.c1.t": "AI 原生", "cap.c1.d": "从产品到工程链路都以大模型为核心构建，而非简单套壳。Agent 驱动的生成引擎贯穿每条产品线。",
      "cap.c2.t": "企业级可靠", "cap.c2.d": "高并发、高可用架构，多 Key 轮询与自动容灾，蓝绿部署。为生产环境而生。",
      "cap.c3.t": "合规与开票", "cap.c3.d": "正规商业渠道，支持对公结算与增值税专票，彻底解决企业接入与报销的合规痛点。",
      "cap.c4.t": "私有化部署", "cap.c4.d": "关键能力支持私有化与独立部署，数据自主可控，满足企业安全与合规要求。",

      "about.kicker": "关于 Zaokit", "about.title": "造Kit —— 为 AI 时代造工具",
      "about.p1": "Zaokit 相信，AI 的价值不在于演示，而在于稳定地交付结果。我们把复杂的模型能力收敛成可靠、好用、合规的产品，让个人创作者与企业团队都能即取即用。",
      "about.p2": "从一张图、一份演示，到一整套企业算力调度与合规接入——我们在内容与算力两端同时发力，做 AI 落地的基础设施。",
      "about.quote": "“输入文字，输出生产力。”", "about.quoteby": "— Zaokit 的产品信条",

      "contact.title": "让我们聊聊你的 AI 需求",
      "contact.desc": "无论是内容创作、企业算力调度，还是合规接入大模型，我们都能提供专业方案。",
      "contact.btn": "support@zaokit.com", "contact.btn2": "体验创作平台 →",

      "footer.tag": "AI 内容与算力基础设施",
      "footer.products": "产品", "footer.company": "公司",
      "footer.about": "关于我们", "footer.cap": "核心能力", "footer.contact": "联系我们",
      "footer.changelog": "更新日志", "footer.privacy": "隐私政策", "footer.terms": "使用条款",
      "footer.social": "社交媒体", "footer.discord": "Discord", "footer.twitter": "X (Twitter)", "footer.youtube": "YouTube",
      "footer.rights": "保留所有权利。"
    },
    en: {
      "skip": "Skip to content",
      "nav.products": "Products", "nav.capabilities": "Capabilities", "nav.about": "About", "nav.contact": "Contact",

      "hero.eyebrow": "AI-native · Content & Compute Infrastructure",
      "hero.title1": "Turn an idea", "hero.title2": "into output",
      "hero.sub": "Zaokit builds a full product matrix spanning content creation to compute supply — shaping ideas in one sentence, letting teams meter AI compute like a utility, and removing the barriers to compliant access to frontier models.",
      "hero.cta1": "Explore products", "hero.cta2": "Get in touch →",
      "hero.stat1n": "4", "hero.stat1l": "product lines",
      "hero.stat2n": "Enterprise", "hero.stat2l": "HA · invoiceable",
      "hero.stat3n": "Self-host", "hero.stat3l": "deploy your own",

      "products.kicker": "Product Matrix", "products.title": "One company, four pillars",
      "products.desc": "From a content factory for creators to a compute hub and compliant model access for enterprises — covering the key links of putting AI to work.",
      "products.p1.tag": "Content", "products.p1.name": "Zaokit Studio",
      "products.p1.desc": "Generate social posts, slide decks and comics from one sentence. An AI content factory: text in, visuals out.", "products.p1.link": "zaokit.app",
      "products.p2.tag": "Compute", "products.p2.name": "AI Token Hub",
      "products.p2.desc": "The master switch and meter for enterprise AI compute. Meter and allocate it like a utility — account pool first, API as fallback.", "products.p2.link": "tokenhub.zaokit.ai",
      "products.p3.tag": "Access", "products.p3.name": "Claude API Service",
      "products.p3.desc": "Compliant commercial access to Claude with enterprise-grade concurrency and uptime, corporate billing and VAT invoices.", "products.p3.link": "cc.zaokit.com",
      "products.p4.tag": "Access", "products.p4.name": "Codex API Service",
      "products.p4.desc": "Compliant commercial access to OpenAI with network acceleration and proper billing — stable calls to frontier models.", "products.p4.link": "cx.zaokit.com",

      "cap.kicker": "Why Zaokit", "cap.title": "Turning frontier capability into deliverable certainty",
      "cap.c1.t": "AI-native", "cap.c1.d": "Built around large models from product to engineering — not a thin wrapper. Agent-driven generation runs through every line.",
      "cap.c2.t": "Enterprise-grade", "cap.c2.d": "High-concurrency, high-availability architecture with multi-key rotation, automatic failover and blue-green deploys.",
      "cap.c3.t": "Compliant & invoiced", "cap.c3.d": "Legitimate commercial channels with corporate billing and VAT invoices — solving access and reimbursement pain points.",
      "cap.c4.t": "Self-hosted", "cap.c4.d": "Core capabilities support private, standalone deployment — your data stays under your control, meeting security needs.",

      "about.kicker": "About Zaokit", "about.title": "Zaokit — building tools for the AI era",
      "about.p1": "We believe the value of AI lies not in demos but in reliably delivering results. We distill complex model capability into dependable, usable, compliant products that creators and enterprise teams can pick up instantly.",
      "about.p2": "From a single image or deck to a full enterprise compute-orchestration and compliant-access stack — we work both ends, content and compute, as the infrastructure for putting AI to work.",
      "about.quote": "“Text in, productivity out.”", "about.quoteby": "— The Zaokit product creed",

      "contact.title": "Let's talk about your AI needs",
      "contact.desc": "Whether it's content creation, enterprise compute orchestration, or compliant access to large models — we have a solution.",
      "contact.btn": "support@zaokit.com", "contact.btn2": "Try the studio →",

      "footer.tag": "AI content & compute infrastructure",
      "footer.products": "Products", "footer.company": "Company",
      "footer.about": "About us", "footer.cap": "Capabilities", "footer.contact": "Contact",
      "footer.changelog": "Changelog", "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Service",
      "footer.social": "Social", "footer.discord": "Discord", "footer.twitter": "X (Twitter)", "footer.youtube": "YouTube",
      "footer.rights": "All rights reserved."
    }
  };

  var I18N = {
    lang: "zh",
    init: function () {
      var saved = null;
      try { saved = localStorage.getItem("zaokit_lang"); } catch (e) {}
      var lang = saved || (navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0 ? "zh" : (saved ? saved : "zh"));
      this.apply(lang);
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
      var btn = document.getElementById("lang-switch");
      if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";
      try { localStorage.setItem("zaokit_lang", lang); } catch (e) {}
    },
    switchLang: function () { this.apply(this.lang === "zh" ? "en" : "zh"); }
  };

  window.I18N = I18N;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { I18N.init(); });
  } else {
    I18N.init();
  }
})();
