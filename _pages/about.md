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

<font color="red"> I am actively seeking opportunities in the job market. Please contact me if you are interested (email: dengxh23@mails.tsinghua.edu.cn).</font>

# 🔥 News
- [2024.08] &nbsp;Two papers are awarded all three badges from ACM CCS 2024 artifact evaluation committee.
- [2024.07] &nbsp;Our fine-grained webpage fingerprinting paper is accepted by ACM CCS 2024! Congratulations, Xiyuan!
- [2024.06] &nbsp;Our rule caching for programmable switches paper is accepted by IEEE Transactions on Network and Service Management (TNSM)!
- [2024.05] &nbsp;Our reliable WF attack paper is accepted by ACM CCS 2024!
- [2024.04] &nbsp;I am selected to be part of the ACM CCS 2024 Artifact Evaluation Committee (AEC).
- [2023.10] &nbsp;I passed Ph.D. Qualifying Examination and became a Ph.D. Candidate.
- [2023.08] &nbsp;Our malicious traffic detection paper is accepted by ISOC NDSS 2024! Congratulations, Yuqi!

# 📝 Papers

(&#42;Equal Contribution)

### Preprints

<ol>
    <li>
    Tianyu Cui, Yanling Wang, Chuanpu Fu, Yong Xiao, Sijia Li, <b><u>Xinhao Deng</u></b>, Yunpeng Liu, Qinglin Zhang, Ziyi Qiu, Peiyang Li, Zhixing Tan, Junwu Xiong, Xinyu Kong, Zujie Wen, Ke Xu, Qi Li. <em>Risk Taxonomy, Mitigation, and Assessment Benchmarks of Large Language Model Systems.</em> 
    <br>
    <a href="https://arxiv.org/pdf/2401.05778">
        <font color="red">[PDF]</font>
    </a>
</li>

</ol>

### 2024
<ol>
<li>
    Xiyuan Zhao&#42;, <b><u>Xinhao Deng</u></b>&#42;, Qi Li, Yunpeng Liu, Zhuotao Liu, Kun Sun, Ke Xu. 
    <em>Towards Fine-Grained Webpage Fingerprinting at Scale.</em> 
    <br> ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024. (<em>CCF-A/TH-CPL-A</em>)
    <br> Artifact Evaluation: 🏅Available; 🏅Evaluated-Functional; 🏅Results Reproduced
    <br>
        [PDF]
        <a href="https://zenodo.org/records/13327934">
            <font color="red">[Code]</font>
        </a>
    
</li>

<li>
    <b><u>Xinhao Deng</u></b>, Mingwei Xu, Qi Li, Weijie Wu, Yuan Yang, Menghao Zhang, Yu Zhou, Jianping Wu.
    <em>Exploring Dynamic Rule Caching Under Dependency Constraints for Programmable Switches: Theory, Algorithm, and Implementation.</em> 
    <br> IEEE Transactions on Network and Service Management (TNSM), 2024.
    <br> <a href="https://ieeexplore.ieee.org/document/10582912">
    <font color="red">[PDF]</font>
    </a>        
</li>

<li>
    <b><u>Xinhao Deng</u></b>, Qi Li, Ke Xu.
    <em>Robust and Reliable Early-Stage Website Fingerprinting Attacks via Spatial-Temporal Distribution Analysis.</em>
    <br> ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024. (<em>CCF-A/TH-CPL-A</em>)
    <br> Artifact Evaluation: 🏅Available; 🏅Evaluated-Reusable; 🏅Results Reproduced
    <br>
        <a href="https://arxiv.org/pdf/2407.00918">
            <font color="red">[PDF]</font>
        </a>
        <a href="https://github.com/Xinhao-Deng/Website-Fingerprinting-Library">
            <font color="red">[Code]</font>
        </a>
    
</li>

<li>
    Yuqi Qing&#42;, Qilei Yin&#42;, <b><u>Xinhao Deng</u></b>, Yihao Chen, Zhuotao Liu, Kun Sun, Ke Xu, Jia Zhang, Qi Li.
    <em>Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.</em>
    <br> Network and Distributed System Security Symposium (NDSS), 2024. (<em>CCF-A/TH-CPL-A</em>)
    <br>
        <a href="https://arxiv.org/pdf/2309.04798.pdf">
            <font color="red">[PDF]</font>
        </a>
        <a href="https://github.com/XXnormal/RAPIER">
            <font color="red">[Code]</font>
        </a>
</li>

</ol>

### 2023

<ol>
<li>
    <b><u>Xinhao Deng</u></b>, Qilei Yin, Zhuotao Liu, Xiyuan Zhao, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.
    <em>Robust Multi-tab Website Fingerprinting Attacks in the Wild.</em>
    <br> IEEE Symposium on Security and Privacy (S&P), 2023. (<em>CCF-A/TH-CPL-A</em>)
    <br>
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

<li>
    Guoqiang Zhang, Jiahao Cao, Mingwei Xu, <b><u>Xinhao Deng</u></b>.
    <em>Unsupervised and Adaptive Tor Website Fingerprinting.</em>
    <br> EAI SecureComm, 2023.
</li>
</ol>

### 2022 and earlier

<ol>
<li>
    Qi Li, <b><u>Xinhao Deng</u></b>, Zhuotao Liu, Yuan Yang, Xiaoyue Zou, Mingwei Xu, Jianping Wu.
    <em> Dynamic Network Function Enforcement via Joint Flow and Function Scheduling.</em>
    <br> IEEE Transactions on Information Forensics and Security (TIFS), 2022. (<em>CCF-A/TH-CPL-A</em>)
    <br>
       <a href="https://ieeexplore.ieee.org/document/9680702">
            <font color="red">[PDF]</font>
        </a>
</li>

<li>
    Jie Sun, Lingchen Zhao, Zhuotao Liu, Qi Li, <b><u>Xinhao Deng</u></b>, Qian Wang, Yong Jiang.
    <em> Practical Differentially Private Online Advertising.</em>
    <br> Computers & Security, 2022.
    <br>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X">
            <font color="red">[PDF]</font>
        </a>
</li>

<li>
    Shu Yang, Laizhong Cui, <b><u>Xinhao Deng</u></b>, Qi Li, Yulei Wu, Mingwei Xu, Jianipng Wu.
    <em> FISE: A Forwarding Table Structure for Enterprise Networks.</em>
    <br> IEEE Transactions on Network and Service Management (TNSM), 2019.
    <br>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X">
        <font color="red">[PDF]</font>
    </a>
</li>

</ol>

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