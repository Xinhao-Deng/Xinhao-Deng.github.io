---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<!-- ── Top Navigation Bar ── -->
<div class="xd-nav">
  <div class="xd-nav-inner">
    <a class="xd-nav-logo" href="#about">Xinhao Deng</a>
    <div class="xd-nav-links">
      <a class="xd-nav-btn" href="#about" data-section="about">About</a>
      <a class="xd-nav-btn" href="#projects" data-section="projects">Projects</a>
      <a class="xd-nav-btn" href="#publications" data-section="publications">Publications</a>
      <a class="xd-nav-btn" href="#awards" data-section="awards">Awards</a>
      <a class="xd-nav-btn" href="#services" data-section="services">Services</a>
    </div>
  </div>
</div>

<script>
(function() {
  // Smooth scroll for nav links — stay on same page
  document.querySelectorAll('.xd-nav-btn, .xd-nav-logo').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          var offset = 62;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });

  // Highlight active section on scroll
  var sections = ['about', 'projects', 'publications', 'awards', 'services'];
  var navBtns = document.querySelectorAll('.xd-nav-btn[data-section]');
  function onScroll() {
    var scrollY = window.scrollY + 70;
    var current = sections[0];
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
        current = id;
      }
    });
    navBtns.forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-section') === current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
</script>

<!-- ── About / Bio ── -->
<span id="about"></span>

<div class="xd-bio">
  <h2>Xinhao Deng &nbsp;<span style="font-size:.72em;font-weight:400;color:#6b7db0;background:linear-gradient(135deg,rgba(25,137,191,.1),rgba(25,137,191,.05));padding:2px 8px;border-radius:4px;">邓欣豪</span></h2>

  <div class="xd-bio-body">
    <img src="../images/xinhao.jpg" class="xd-avatar" alt="Xinhao Deng">

    <p>
      I am currently an <strong>Algorithm Expert at Ant Group</strong> and a <strong>Postdoctoral Researcher jointly affiliated with Tsinghua University and Ant Group</strong>.
      I received my Ph.D. in June 2025 from the Institute for Network Sciences and Cyberspace at Tsinghua University,
      advised by Prof. <a href="https://sites.google.com/site/qili2012/home">Qi Li</a>,
      while also benefiting greatly from the mentorship of Profs.
      <a href="https://www.tsinghua.edu.cn/info/1166/93896.htm">Jianping Wu</a>,
      <a href="https://www.cs.tsinghua.edu.cn/info/1126/3581.htm">Ke Xu</a>,
      and <a href="https://www.insc.tsinghua.edu.cn/info/1157/2465.htm">Mingwei Xu</a>.
    </p>

    <p>
      My research primarily explores the security of LLMs and LLM agents, focusing particularly on attack and defense techniques across the LLM agent lifecycle (e.g., <a href="https://github.com/antgroup/ClawAegis">OpenClaw</a>).
      Additionally, I work on network traffic analysis, with an emphasis on website and traffic fingerprinting for LLM agents.
      My research has been published in top-tier conferences and journals, including IEEE S&amp;P, ACM CCS, NDSS, KDD, WWW, IEEE INFOCOM, IEEE TIFS, and IEEE/ACM ToN.
    </p>

    <div class="xd-callout">
      <p>
        Our team is currently <strong>recruiting interns and full-time members</strong> focusing on agent security.
        Interested candidates are warmly welcome to reach out.
        I am also always happy to discuss potential research collaborations.
        Feel free to contact me at <a href="mailto:xinhaodeng.thu@gmail.com">xinhaodeng.thu@gmail.com</a>.
      </p>
    </div>
  </div>

  <div class="xd-contact-row">
    <a href="mailto:xinhaodeng.thu@gmail.com">Email</a>
    <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank">Google Scholar</a>
    <a href="https://github.com/Xinhao-Deng" target="_blank">GitHub</a>
    <a href="https://orcid.org/0000-0002-4366-4777" target="_blank">ORCID</a>
  </div>
</div>

<!-- ── Open Source Projects ── -->
<span id="projects"></span>
<div class="xd-section-header"><h2>Open Source Projects</h2></div>

<ul class="project-list">
  <li class="project-card">
    <div class="project-info">
      <span class="project-name"><a href="https://github.com/antgroup/ClawAegis" target="_blank">ClawAegis</a></span>
      <a class="project-news-badge" href="https://mp.weixin.qq.com/s/7fuQB5zJ_ll1jAIsf5JmKQ" target="_blank">News</a>
      &nbsp;&nbsp;
      <span class="project-desc">A lightweight built-in security plugin for OpenClaw that enforces defense-in-depth runtime protection across the full LLM agent lifecycle — from initialization to execution.</span>
    </div>
  </li>
  <li class="project-card">
    <div class="project-info">
      <span class="project-name"><a href="https://github.com/FIND-Lab/AgentWard" target="_blank">AgentWard</a></span>
      <a class="project-news-badge" href="https://mp.weixin.qq.com/s/Fkq85NPh7wZv6Vw9ISEJjg" target="_blank">News</a>
      &nbsp;&nbsp;
      <span class="project-desc">A full-stack security operating system for trustworthy AI agent deployment, unifying onboarding, secure reasoning, and trusted execution through a heterogeneous defense-in-depth architecture.</span>
    </div>
  </li>
  <li class="project-card">
    <div class="project-info">
      <span class="project-name"><a href="https://github.com/Xinhao-Deng/Website-Fingerprinting-Library" target="_blank">WFlib</a></span>
      <a class="project-news-badge" href="https://mp.weixin.qq.com/s/Yvj9AaAX8pa6jWMvFEu7Rg" target="_blank">News</a>
      &nbsp;&nbsp;
      <span class="project-desc">A PyTorch-based open-source benchmark library implementing 11 state-of-the-art deep learning website fingerprinting attacks on a unified, reproducible framework with multi-dataset support.</span>
    </div>
  </li>
</ul>

<!-- ── Publications ── -->
<span id="publications"></span>
<div class="xd-section-header"><h2>Publications</h2></div>

<div class="xd-year-label">2026</div>

<div class="paper-entry">
  <span class="venue-badge venue-preprint">Preprint</span>
  <b><u>Xinhao Deng</u></b>, Yixiang Zhang, Jiaqing Wu, Jiaqi Bai, Sibo Yi, Zhuoheng Zou, Yue Xiao, Rennai Qiu, Jianan Ma, Jialuo Chen, Xiaohu Du, Xiaofang Yang, Shiwen Cui, Changhua Meng, Weiqiang Wang, Jiaxing Song, Ke Xu, Qi Li.<br>
  <span class="paper-title">Taming OpenClaw: Security Analysis and Mitigation of Autonomous LLM Agent Threats.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2603.11619" target="_blank">PDF</a></span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-preprint">Preprint</span>
  <b><u>Xinhao Deng</u></b>, Jiaqing Wu, Miao Chen, Yue Xiao, Ke Xu, Qi Li.<br>
  <span class="paper-title">Automating Agent Hijacking via Structural Template Injection.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2602.16958" target="_blank">PDF</a></span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">ToN'26</span>
  <b><u>Xinhao Deng</u></b>, Xiyuan Zhao, Qilei Yin, Zhuotao Liu, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.<br>
  <span class="paper-title">Towards Robust Multi-tab Website Fingerprinting.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2501.12622" target="_blank">PDF</a></span><br>
  IEEE/ACM Transactions on Networking, 2026.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">WWW'26</span>
  Xiyuan Zhao, <b><u>Xinhao Deng</u></b>, Tianyu Cui, Yixiang Zhang, Ke Xu, Qi Li.<br>
  <span class="paper-title">Robust LLM-Based Website Fingerprinting under Dynamic Real-World Conditions.</span><br>
  ACM Web Conference (WWW), 2026.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">INFOCOM'26</span>
  Yifei Cheng, Yujia Zhu, Baiyang Li, <b><u>Xinhao Deng</u></b>, Yitong Cai, Yaochen Ren, Qingyun Liu.<br>
  <span class="paper-title">STAR: Semantic-Traffic Alignment and Retrieval for Zero-Shot HTTPS Website Fingerprinting.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2512.17667" target="_blank">PDF</a></span><br>
  IEEE INFOCOM, 2026.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">NDSS'26</span>
  <b><u>Xinhao Deng</u></b>, Yixiang Zhang, Qi Li, Zhuotao Liu, Yabo Wang, Ke Xu.<br>
  <span class="paper-title">Enhancing Website Fingerprinting Attacks against Traffic Drift.</span>
  <span class="paper-links"><a class="link-pdf" href="https://www.ndss-symposium.org/wp-content/uploads/2026-s59-paper.pdf" target="_blank">PDF</a></span><br>
  Network and Distributed System Security Symposium (NDSS), 2026.
</div>

<hr class="year-divider">
<div class="xd-year-label">2025</div>

<div class="paper-entry">
  <span class="venue-badge venue-preprint">Preprint</span>
  Yixiang Zhang, <b><u>Xinhao Deng</u></b>, Zhongyi Gu, Yihao Chen, Ke Xu, Qi Li, Jianping Wu.<br>
  <span class="paper-title">Exposing LLM User Privacy via Traffic Fingerprint Analysis: A Study of Privacy Risks in LLM Agent Interactions.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2510.07176" target="_blank">PDF</a></span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">TST'25</span>
  <b><u>Xinhao Deng</u></b>, Jingyou Chen, Linxiao Yu, Yixiang Zhang, Zhongyi Gu, Changhao Qiu, Xiyuan Zhao, Ke Xu, Qi Li.<br>
  <span class="paper-title">Beyond a Single Perspective: Towards a Realistic Evaluation of Website Fingerprinting Attacks.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2510.14283" target="_blank">PDF</a></span><br>
  Tsinghua Science and Technology (TST), 2025.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">CCS'25</span>
  Yuqi Qing, Qilei Yin, <b><u>Xinhao Deng</u></b>, Xiaoli Zhang, Peiyang Li, Zhuotao Liu, Kun Sun, Ke Xu, Qi Li.<br>
  <span class="paper-title">Training Robust Classifiers for Classifying Encrypted Traffic under Dynamic Network Conditions.</span>
  <span class="paper-links"><a class="link-pdf" href="https://dl.acm.org/doi/10.1145/3719027.3765073" target="_blank">PDF</a></span><br>
  ACM CCS, 2025.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">WWW'25</span>
  Yifei Cheng, Yujia Zhu, Baiyang Li, Peishuai Sun, Yong Ding, <b><u>Xinhao Deng</u></b>, Qingyun Liu.<br>
  <span class="paper-title">HOLMES &amp; WATSON: A Robust and Lightweight HTTPS Website Fingerprinting through HTTP Version Parallelism.</span>
  <span class="paper-links"><a class="link-pdf" href="https://dl.acm.org/doi/10.1145/3696410.3714578" target="_blank">PDF</a></span><br>
  ACM Web Conference (WWW), 2025.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">KDD'25</span>
  Li Gao, Chuanpu Fu, <b><u>Xinhao Deng</u></b>, Ke Xu, Qi Li.<br>
  <span class="paper-title">Wedjat: Detecting Sophisticated Evasion Attacks via Real-time Causal Analysis.</span>
  <span class="paper-links"><a class="link-pdf" href="https://dl.acm.org/doi/10.1145/3690624.3709218" target="_blank">PDF</a></span><br>
  ACM SIGKDD, 2025.
</div>

<hr class="year-divider">
<div class="xd-year-label">2024</div>

<div class="paper-entry">
  <span class="venue-badge venue-preprint">Preprint</span>
  Tianyu Cui, Yanling Wang, Chuanpu Fu, Yong Xiao, Sijia Li, <b><u>Xinhao Deng</u></b>, Yunpeng Liu, Qinglin Zhang, Ziyi Qiu, Peiyang Li, Zhixing Tan, Junwu Xiong, Xinyu Kong, Zujie Wen, Ke Xu, Qi Li.<br>
  <span class="paper-title">Risk Taxonomy, Mitigation, and Assessment Benchmarks of Large Language Model Systems.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2401.05778" target="_blank">PDF</a></span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">CCS'24</span>
  <b><u>Xinhao Deng</u></b>, Qi Li, Ke Xu.<br>
  <span class="paper-title">Robust and Reliable Early-Stage Website Fingerprinting Attacks via Spatial-Temporal Distribution Analysis.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2407.00918" target="_blank">PDF</a><a class="link-code" href="https://github.com/Xinhao-Deng/Website-Fingerprinting-Library" target="_blank">Code</a></span><br>
  ACM CCS, 2024.<br>
  <span class="paper-ae">Artifact Evaluation: 🏅 Available &middot; 🏅 Reusable &middot; 🏅 Reproduced</span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">CCS'24</span>
  Xiyuan Zhao*, <b><u>Xinhao Deng</u></b>* (Equal Contribution), Qi Li, Yunpeng Liu, Zhuotao Liu, Kun Sun, Ke Xu.<br>
  <span class="paper-title">Towards Fine-Grained Webpage Fingerprinting at Scale.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2409.04341" target="_blank">PDF</a><a class="link-code" href="https://zenodo.org/records/13383332" target="_blank">Code</a></span><br>
  ACM CCS, 2024.<br>
  <span class="paper-ae">Artifact Evaluation: 🏅 Available &middot; 🏅 Functional &middot; 🏅 Reproduced</span>
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">TNSM'24</span>
  <b><u>Xinhao Deng</u></b>, Mingwei Xu, Qi Li, Weijie Wu, Yuan Yang, Menghao Zhang, Yu Zhou, Jianping Wu.<br>
  <span class="paper-title">Exploring Dynamic Rule Caching Under Dependency Constraints for Programmable Switches: Theory, Algorithm, and Implementation.</span>
  <span class="paper-links"><a class="link-pdf" href="https://ieeexplore.ieee.org/document/10582912" target="_blank">PDF</a></span><br>
  IEEE Transactions on Network and Service Management (TNSM), 2024.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">NDSS'24</span>
  Yuqi Qing, Qilei Yin, <b><u>Xinhao Deng</u></b>, Yihao Chen, Zhuotao Liu, Kun Sun, Ke Xu, Jia Zhang, Qi Li.<br>
  <span class="paper-title">Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.</span>
  <span class="paper-links"><a class="link-pdf" href="https://arxiv.org/pdf/2309.04798.pdf" target="_blank">PDF</a><a class="link-code" href="https://github.com/XXnormal/RAPIER" target="_blank">Code</a></span><br>
  NDSS, 2024.
</div>

<hr class="year-divider">
<div class="xd-year-label">Before 2024</div>

<div class="paper-entry">
  <span class="venue-badge venue-top">S&amp;P'23</span>
  <b><u>Xinhao Deng</u></b>, Qilei Yin, Zhuotao Liu, Xiyuan Zhao, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.<br>
  <span class="paper-title">Robust Multi-tab Website Fingerprinting Attacks in the Wild.</span>
  <span class="paper-links"><a class="link-pdf" href="http://www.thucsnet.com/wp-content/papers/xinhao_sp2023.pdf" target="_blank">PDF</a><a class="link-code" href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets" target="_blank">Code</a><a class="link-dataset" href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets" target="_blank">Dataset</a></span><br>
  IEEE S&amp;P, 2023.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-workshop">SecureComm'23</span>
  Guoqiang Zhang, Jiahao Cao, Mingwei Xu, <b><u>Xinhao Deng</u></b>.<br>
  <span class="paper-title">Unsupervised and Adaptive Tor Website Fingerprinting.</span>
  <span class="paper-links"><a class="link-pdf" href="https://link.springer.com/chapter/10.1007/978-3-031-64954-7_11" target="_blank">PDF</a></span><br>
  EAI SecureComm, 2023.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">TIFS'22</span>
  Qi Li, <b><u>Xinhao Deng</u></b>, Zhuotao Liu, Yuan Yang, Xiaoyue Zou, Mingwei Xu, Jianping Wu.<br>
  <span class="paper-title">Dynamic Network Function Enforcement via Joint Flow and Function Scheduling.</span>
  <span class="paper-links"><a class="link-pdf" href="https://ieeexplore.ieee.org/document/9680702" target="_blank">PDF</a></span><br>
  IEEE Transactions on Information Forensics and Security (TIFS), 2022.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">C&amp;S'22</span>
  Jie Sun, Lingchen Zhao, Zhuotao Liu, Qi Li, <b><u>Xinhao Deng</u></b>, Qian Wang, Yong Jiang.<br>
  <span class="paper-title">Practical Differentially Private Online Advertising.</span>
  <span class="paper-links"><a class="link-pdf" href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X" target="_blank">PDF</a></span><br>
  Computers &amp; Security, 2022.
</div>

<div class="paper-entry">
  <span class="venue-badge venue-journal">TNSM'19</span>
  Shu Yang, Laizhong Cui, <b><u>Xinhao Deng</u></b>, Qi Li, Yulei Wu, Mingwei Xu, Jianping Wu.<br>
  <span class="paper-title">FISE: A Forwarding Table Structure for Enterprise Networks.</span>
  <span class="paper-links"><a class="link-pdf" href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X" target="_blank">PDF</a></span><br>
  IEEE Transactions on Network and Service Management (TNSM), 2019.
</div>

<!-- ── Honors & Awards ── -->
<span id="awards"></span>
<div class="xd-section-header"><h2>Honors &amp; Awards</h2></div>

<ul class="awards-list">
  <li><span class="award-year">2025</span> Outstanding Doctoral Dissertation of Tsinghua University &nbsp;<em>（清华大学优秀博士学位论文）</em></li>
  <li><span class="award-year">2024</span> Science and Technology Award (1st Class), Chinese Institute of Electronics &nbsp;<em>（中国电子学会科技进步一等奖）</em></li>
  <li><span class="award-year">2024</span> Student Travel Grant, ACM CCS 2024</li>
  <li><span class="award-year">2024</span> 1st-Class Scholarship, Tsinghua University &nbsp;<em>（清华大学一等奖学金）</em></li>
  <li><span class="award-year">2023</span> Tsinghua–Longfor Scholarship &nbsp;<em>（清华–龙湖奖学金）</em></li>
  <li><span class="award-year">2022</span> 1st-Class Scholarship, Tsinghua University &nbsp;<em>（清华大学一等奖学金）</em></li>
  <li><span class="award-year">2019</span> China National Scholarship &nbsp;<em>（国家奖学金）</em></li>
</ul>

<!-- ── Academic Services ── -->
<span id="services"></span>
<div class="xd-section-header"><h2>Academic Services</h2></div>

<table class="service-table">
  <tr>
    <td>Conference Reviewer</td>
    <td>WWW'25, SecureComm'23, ACSAC'22, ACSAC'20</td>
  </tr>
  <tr>
    <td>Journal Reviewer</td>
    <td>TIFS, TNSM</td>
  </tr>
  <tr>
    <td>Artifact Evaluation</td>
    <td>Security'25, CCS'24, ACSAC'22</td>
  </tr>
  <tr>
    <td>External Reviewer</td>
    <td>S&amp;P'25, CCS'24, NDSS'24, Security'23, WWW'23</td>
  </tr>
</table>

<!-- ── Scroll to top ── -->
<a class="xd-scroll-top" id="xd-scroll-top" href="#about" title="Back to top">↑</a>
<script>
window.addEventListener('scroll', function() {
  var btn = document.getElementById('xd-scroll-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 300);
});
</script>
