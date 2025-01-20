---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Xinhao Deng is currently a 5th-year Ph.D. candidate at the <a href="https://www.insc.tsinghua.edu.cn/">Institute for Network Sciences and Cyberspace</a>,
Tsinghua University, advised by <a target="_blank" rel="noopener" href="https://sites.google.com/site/qili2012/home">Prof. Qi Li</a>.
His research focuses on network security and privacy, including website fingerprinting attacks, malicious traffic detection and mitigation, and the application of deep learning to security and privacy.


<font color="red">This year, I am actively seeking opportunities in the job market.</font>

# 🔥 News
- [2025.01] &nbsp;Our HTTPS traffic analysis paper is accepted by WWW 2025! Congratulations, Yifei!
- [2024.11] &nbsp;Our evasion attack detection paper is accepted by KDD 2025 (Research Track)! Congratulations, Li and Chuanpu!
- [2024.08] &nbsp;Two papers are awarded all three badges from ACM CCS 2024 artifact evaluation committee.
- [2024.07] &nbsp;Our fine-grained webpage fingerprinting paper is accepted by ACM CCS 2024! Congratulations, Xiyuan!
- [2024.06] &nbsp;Our P4 rule caching paper is accepted by IEEE Transactions on Network and Service Management (TNSM)!
- [2024.05] &nbsp;Our reliable WF attack paper is accepted by ACM CCS 2024!

# 📝 Papers

(&#42;Equal Contribution)

### Preprints

<ol>

<li>
    Tianyu Cui, Yanling Wang, Chuanpu Fu, Yong Xiao, Sijia Li, <b><u>Xinhao Deng</u></b>, Yunpeng Liu, Qinglin Zhang, Ziyi Qiu, Peiyang Li, Zhixing Tan, Junwu Xiong, Xinyu Kong, Zujie Wen, Ke Xu, Qi Li. Risk Taxonomy, Mitigation, and Assessment Benchmarks of Large Language Model Systems.
    <a href="https://arxiv.org/pdf/2401.05778">
        <font color="red">[PDF]</font>
    </a>
</li>

</ol>

### Publications

<ol>

<li>
    <b>[WWW'25]</b> Yifei Cheng, Yujia Zhu, Baiyang Li, Peishuai Sun, Yong Ding, <b><u>Xinhao Deng</u></b>, Qingyun Liu. HOLMES & WATSON: A Robust and Lightweight HTTPS Website Fingerprinting through HTTP Version Parallelism. 
    ACM Web Conference (WWW), 2025.
</li>
<br>

<li>
    <b>[KDD'25]</b>  Li Gao, Chuanpu Fu, <b><u>Xinhao Deng</u></b>, Ke Xu, Qi Li. Wedjat: Detecting Sophisticated Evasion Attacks via Real-time Causal Analysis. 
    ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), Research Track, 2025.
</li>
<br>

<li>
    <b>[CCS'24]</b> <b><u>Xinhao Deng</u></b>, Qi Li, Ke Xu. Robust and Reliable Early-Stage Website Fingerprinting Attacks via Spatial-Temporal Distribution Analysis. ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024. <a href="https://arxiv.org/pdf/2407.00918">
            <font color="red">[PDF]</font>
        </a>
        <a href="https://github.com/Xinhao-Deng/Website-Fingerprinting-Library">
            <font color="red">[Code]</font>
        </a>
    <br> Artifact Evaluation: 🏅Available; 🏅Evaluated-Reusable; 🏅Results Reproduced
</li>

<br>
<li>
    <b>[CCS'24]</b> Xiyuan Zhao&#42;, <b><u>Xinhao Deng</u></b>&#42;, Qi Li, Yunpeng Liu, Zhuotao Liu, Kun Sun, Ke Xu. 
    Towards Fine-Grained Webpage Fingerprinting at Scale. 
    ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024.
    <a href="https://arxiv.org/pdf/2409.04341">
            <font color="red">[PDF]</font>
        </a>
        <a href="https://zenodo.org/records/13383332">
            <font color="red">[Code]</font>
        </a>
    <br> Artifact Evaluation: 🏅Available; 🏅Evaluated-Functional; 🏅Results Reproduced
</li>

<br>
<li>
    <b>[TNSM'24]</b> <b><u>Xinhao Deng</u></b>, Mingwei Xu, Qi Li, Weijie Wu, Yuan Yang, Menghao Zhang, Yu Zhou, Jianping Wu.
    Exploring Dynamic Rule Caching Under Dependency Constraints for Programmable Switches: Theory, Algorithm, and Implementation. 
    IEEE Transactions on Network and Service Management (TNSM), 2024.
    <a href="https://ieeexplore.ieee.org/document/10582912">
    <font color="red">[PDF]</font>
    </a>        
</li>

<br>
<li>
    <b>[NDSS'24]</b> Yuqi Qing&#42;, Qilei Yin&#42;, <b><u>Xinhao Deng</u></b>, Yihao Chen, Zhuotao Liu, Kun Sun, Ke Xu, Jia Zhang, Qi Li.
    Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.
    Network and Distributed System Security Symposium (NDSS), 2024. 
    <a href="https://arxiv.org/pdf/2309.04798.pdf">
        <font color="red">[PDF]</font>
    </a>
    <a href="https://github.com/XXnormal/RAPIER">
        <font color="red">[Code]</font>
    </a>
</li>

<br>
<li>
    <b>[S&P'23]</b> <b><u>Xinhao Deng</u></b>, Qilei Yin, Zhuotao Liu, Xiyuan Zhao, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.
    Robust Multi-tab Website Fingerprinting Attacks in the Wild.
    IEEE Symposium on Security and Privacy (S&P), 2023. 
    <a href="http://www.thucsnet.com/wp-content/papers/xinhao_sp2023.pdf">
        <font color="red">[PDF]</font>
    </a>
    <a href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets">
        <font color="red">[Code]</font>
    </a>
    <a href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets">
        <font color="red">[Dataset]</font>
    </a>
</li>

<br>
<li>
    <b>[SecureComm'23]</b> Guoqiang Zhang, Jiahao Cao, Mingwei Xu, <b><u>Xinhao Deng</u></b>.
    <em>Unsupervised and Adaptive Tor Website Fingerprinting.</em>
    <br> EAI SecureComm, 2023.
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-64954-7_11">
        <font color="red">[PDF]</font>
    </a>
</li>

<br>
<li>
    <b>[TIFS'22]</b> Qi Li, <b><u>Xinhao Deng</u></b>, Zhuotao Liu, Yuan Yang, Xiaoyue Zou, Mingwei Xu, Jianping Wu.
    Dynamic Network Function Enforcement via Joint Flow and Function Scheduling.
    IEEE Transactions on Information Forensics and Security (TIFS), 2022.
    <a href="https://ieeexplore.ieee.org/document/9680702">
        <font color="red">[PDF]</font>
    </a>
</li>

<br>
<li>
    <b>[Computers & Security'22]</b> Jie Sun, Lingchen Zhao, Zhuotao Liu, Qi Li, <b><u>Xinhao Deng</u></b>, Qian Wang, Yong Jiang.
    Practical Differentially Private Online Advertising.
    Computers & Security, 2022.
    <a href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X">
        <font color="red">[PDF]</font>
    </a>
</li>

<br>
<li>
    <b>[TNSM'19]</b> Shu Yang, Laizhong Cui, <b><u>Xinhao Deng</u></b>, Qi Li, Yulei Wu, Mingwei Xu, Jianipng Wu.
    FISE: A Forwarding Table Structure for Enterprise Networks.
    IEEE Transactions on Network and Service Management (TNSM), 2019.
    <a href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X">
    <font color="red">[PDF]</font>
    </a>
</li>

</ol>

# 💻 Internship Experience
## Bytedance 
<em> Research Intern </em>

<ul>
<li> Research on detecting malicious crowdsourcing behaviors on large-scale social platforms.</li>
<li> Selected for ByteDance Soaring Star Talent Program. </li>
</ul>

## Microsoft Research Asia
<em> Research Intern </em>

<ul>
<li> Research on personalized friend recommendation on large-scale social platforms.</li>
<li> Awarded the MSRA Excellent Intern Award. </li>
</ul>


# 🎖 Honors and Awards
- Student Travel Grant of ACM CCS 2024.
- 1st-class Scholarship of Tsinghua University. 2024 & 2022.
- Tsinghua-Longfor Scholarship. 2023.
- China National Scholarship. 2019.
- Gold Medal, ACM International Collegiate Programming Contest (ACM-ICPC) Asia Regional. 2018.

# 📑 Academic Services
- **Conference Reviewer**: SecureComm'23, ACSAC'22, ACSAC'20.
- **Journal Reviewer**: TIFS, TNSM.
- **Artifact Evaluation Committee**: Security'25, CCS'24, ACSAC'22.
- **External Reviewer**: S&P'25, CCS'24, NDSS'24, Security'23, WWW'23.