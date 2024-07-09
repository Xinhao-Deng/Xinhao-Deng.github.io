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

Xinhao Deng is currently a 4th-year Ph.D. candidate at the <a href="https://www.insc.tsinghua.edu.cn/">Institute for Network Sciences and Cyberspace</a>,
Tsinghua University, advised by <a target="_blank" rel="noopener" href="https://sites.google.com/site/qili2012/home">Prof. Qi Li</a>.
His research focuses on network security and privacy, including website fingerprinting attacks, malicious traffic detection and mitigation, and the application of deep learning to security and privacy.

<b> I am currently looking for job opportunities. If you have a suitable position, please contact me (email: dengxh23[at]mails[dot]tsinghua[dot]edu[dot]cn).</b>

# 🔥 News
- *2024.07*: &nbsp;Our fine-grained webpage fingerprinting paper is accepted by ACM CCS 2024! Congratulations, Xiyuan!
- *2024.06*: &nbsp;Our rule caching for programmable switches paper is accepted by IEEE Transactions on Network and Service Management (TNSM)!
- *2024.05*: &nbsp;Our reliable WF attack paper is accepted by ACM CCS 2024!
- *2024.04*: &nbsp;I am selected to be part of the ACM CCS 2024 Artifact Evaluation Committee (AEC).
- *2023.10*: &nbsp;I passed Ph.D. Qualifying Examination and became a Ph.D. Candidate.
- *2023.08*: &nbsp;Our malicious traffic detection paper is accepted by ISOC NDSS 2024! Congratulations, Yuqi!

# 📝 Publications & Preprints

(&#42;Equal Contribution)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='images/papers/Oscar.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Towards Fine-Grained Webpage Fingerprinting at Scale.</b>

Xiyuan Zhao&#42;, <b><u>Xinhao Deng</u></b>&#42;, Qi Li, Yunpeng Liu, Zhuotao Liu, Kun Sun, Ke Xu.
 
ACM Conference on Computer and Communications Security (CCS), 2024. (<em>CCF-A/TH-CPL-A</em>)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TNSM 2024</div><img src='images/papers/DROPS.png' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Exploring Dynamic Rule Caching Under Dependency Constraints for Programmable Switches: Theory, Algorithm, and Implementation.</b>

<b><u>Xinhao Deng</u></b>, Mingwei Xu, Qi Li, Weijie Wu, Yuan Yang, Menghao Zhang, Yu Zhou, Jianping Wu.
 
IEEE Transactions on Network and Service Management (TNSM), 2024.

<a href="https://ieeexplore.ieee.org/document/10582912">
    <font color="red">[PDF]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='images/papers/Holmes.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Robust and Reliable Early-Stage Website Fingerprinting Attacks via Spatial-Temporal Distribution Analysis.</b>

<b><u>Xinhao Deng</u></b>, Qi Li, Ke Xu.
 
ACM Conference on Computer and Communications Security (CCS), 2024. (<em>CCF-A/TH-CPL-A</em>)

<a href="https://arxiv.org/pdf/2407.00918">
    <font color="red">[PDF]</font>
</a>
<a href="https://github.com/Xinhao-Deng/Website-Fingerprinting-Library">
    <font color="red">[Code]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NDSS 2024</div><img src='images/papers/RAPIER.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.</b>

Yuqi Qing&#42;, Qilei Yin&#42;, <b><u>Xinhao Deng</u></b>, Yihao Chen, Zhuotao Liu, Kun Sun, Ke Xu, Jia Zhang, Qi Li.

Network and Distributed System Security Symposium (NDSS), 2024. (<em>CCF-A/TH-CPL-A</em>)

<a href="https://arxiv.org/pdf/2309.04798.pdf">
    <font color="red">[PDF]</font>
</a>
<a href="https://github.com/XXnormal/RAPIER">
    <font color="red">[Code]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">S&P 2023</div><img src='images/papers/ARES.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Robust Multi-tab Website Fingerprinting Attacks in the Wild.</b>

<b><u>Xinhao Deng</u></b>, Qilei Yin, Zhuotao Liu, Xiyuan Zhao, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.

IEEE Symposium on Security and Privacy (S&P), 2023. (<em>CCF-A/TH-CPL-A</em>)

<a href="http://www.thucsnet.com/wp-content/papers/xinhao_sp2023.pdf">
    <font color="red">[PDF]</font>
</a>
<a href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets">
    <font color="red">[Code]</font>
</a>
<a href="https://github.com/Xinhao-Deng/Multitab-WF-Datasets">
    <font color="red">[Dataset]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SecureComm 2023</div><img src='images/papers/UAF.png' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Unsupervised and Adaptive Tor Website Fingerprinting.</b>

Guoqiang Zhang, Jiahao Cao, Mingwei Xu, <b><u>Xinhao Deng</u></b>.

EAI SecureComm, 2023.


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIFS 2022</div><img src='images/papers/FuncE.png' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Dynamic Network Function Enforcement via Joint Flow and Function Scheduling.</b>

Qi Li, <b><u>Xinhao Deng</u></b>, Zhuotao Liu, Yuan Yang, Xiaoyue Zou, Mingwei Xu, Jianping Wu.

IEEE Transactions on Information Forensics and Security (TIFS), 2022. (<em>CCF-A/TH-CPL-A</em>)

<a href="https://ieeexplore.ieee.org/document/9680702">
    <font color="red">[PDF]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computers & Security 2022</div><img src='images/papers/PrivateCTR.png' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Practical differentially private online advertising.</b>

Jie Sun, Lingchen Zhao, Zhuotao Liu, Qi Li, <b><u>Xinhao Deng</u></b>, Qian Wang, Yong Jiang.

Computers & Security, 2022.

<a href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X">
    <font color="red">[PDF]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TNSM 2019</div><img src='images/papers/FISE.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<b>FISE: A Forwarding Table Structure for Enterprise Networks.</b>

Shu Yang, Laizhong Cui, <b><u>Xinhao Deng</u></b>, Qi Li, Yulei Wu, Mingwei Xu, Jianipng Wu.

IEEE Transactions on Network and Service Management (TNSM), 2019.

<a href="https://ieeexplore.ieee.org/abstract/document/8894136">
    <font color="red">[PDF]</font>
</a>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='images/papers/Security4LLM.png' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

<b>Risk Taxonomy, Mitigation, and Assessment Benchmarks of Large Language Model Systems.</b>

Tianyu Cui, Yanling Wang, Chuanpu Fu, Yong Xiao, Sijia Li, <b><u>Xinhao Deng</u></b>, Yunpeng Liu, Qinglin Zhang, Ziyi Qiu, Peiyang Li, Zhixing Tan, Junwu Xiong, Xinyu Kong, Zujie Wen, Ke Xu, Qi Li.

arXiv preprint, 2024.

<a href="https://arxiv.org/pdf/2401.05778">
    <font color="red">[PDF]</font>
</a>

</div>
</div>

# 💻 Internship Experience
## Bytedance 
<em> Research Intern, Summer 2022 </em>

Utilizing Graph Contrastive Learning to detect malicious users and abnormal behaviors on social platforms such as TikTok and Watermelon Video.

## Microsoft Research Asia
<em> Research Intern, Summer 2020 </em>

Predicting potential friendships in social networks based on GCNs enables the implementation of an accurate friend recommendation system.


# 🎖 Honors and Awards
- Tsinghua-Longfor Scholarship for Excellent Students. 2023.
- Tsinghua-Yangtze River Delta Scholarship for Excellent Students. 2023
- Tsinghua-Toyota Scholarship for Excellent Students. 2022
- China National Scholarship. 2019.
- Gold Medal, ACM International Collegiate Programming Contest (ACM-ICPC) Asia Regional. 2018.

# 📑 Academic Services
- **Conference Reviewer**: SecureComm'23, ACSAC'22, ACSAC'20.
- **Journal Reviewer**: TIFS, TNSM.
- **Artifact Evaluation Committee**: CCS'24, ACSAC'22.
- **External Reviewer**: S&P'25, CCS'24, NDSS'24, Security'23, S&P'22, WWW'22.