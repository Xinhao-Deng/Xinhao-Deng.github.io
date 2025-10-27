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

👋 I am currently an **Algorithm Expert at Ant Group** and a **Joint Postdoctoral Researcher with Tsinghua University and Ant Group**. I received my Ph.D. in June 2025 from the Institute for Network Sciences and Cyberspace, Tsinghua University, under the supervision of Prof. [Qi Li](https://sites.google.com/site/qili2012/home), and was fortunate to also receive mentorship from Profs. [Jianping Wu](https://www.tsinghua.edu.cn/info/1166/93896.htm), [Ke Xu](https://www.cs.tsinghua.edu.cn/info/1126/3581.htm), and [Mingwei Xu](https://www.insc.tsinghua.edu.cn/info/1157/2465.htm).

✨ My research interests lie in LLM/Agent security (e.g., privacy preservation and security enhancement) and network traffic analysis (e.g., website fingerprinting and network attack detection). I have published papers in leading conferences and journals, including S&P, CCS, NDSS, KDD, WWW, and TIFS.

📮 I actively collaborate with researchers across institutions. For potential collaborations, please feel free to contact me at **[dengxinhao@tsinghua.edu.cn](mailto:dengxinhao@tsinghua.edu.cn)**.

# 📝 Papers  

## 📌 2025

- **[Preprint]** Yixiang Zhang, <b><u>Xinhao Deng</u></b>, Zhongyi Gu, Yihao Chen, Ke Xu, Qi Li, Jianping Wu.  
  *Exposing LLM User Privacy via Traffic Fingerprint Analysis: A Study of Privacy Risks in LLM Agent Interactions.*  
  [[PDF](https://arxiv.org/pdf/2510.07176)]

- **[Preprint]** <b><u>Xinhao Deng</u></b>, Xiyuan Zhao, Qilei Yin, Zhuotao Liu, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.  
  *Towards Robust Multi-tab Website Fingerprinting.*  
  [[PDF](https://arxiv.org/pdf/2501.12622)]

- **[TST'25]** <b><u>Xinhao Deng</u></b>, Jingyou Chen, Linxiao Yu, Yixiang Zhang, Zhongyi Gu, Changhao Qiu, Xiyuan Zhao, Ke Xu, Qi Li.  
  *Beyond a Single Perspective: Towards a Realistic Evaluation of Website Fingerprinting Attacks.*  
  *Tsinghua Science and Technology (TST), 2025.*  
  [[PDF](https://arxiv.org/pdf/2510.14283)]

- **[NDSS’26]** <b><u>Xinhao Deng</u></b>, Yixiang Zhang, Qi Li, Zhuotao Liu, Yabo Wang, Ke Xu.  
  *Enhancing Website Fingerprinting Attacks against Traffic Drift.*  
  *Network and Distributed System Security Symposium (NDSS), 2026.*

- **[CCS’25]** Yuqi Qing, Qilei Yin, <b><u>Xinhao Deng</u></b>, Xiaoli Zhang, Peiyang Li, Zhuotao Liu, Kun Sun, Ke Xu, Qi Li.  
  *Training Robust Classifiers for Classifying Encrypted Traffic under Dynamic Network Conditions.*  
  *ACM SIGSAC Conference on Computer and Communications Security (CCS), 2025.*

- **[WWW’25]** Yifei Cheng, Yujia Zhu, Baiyang Li, Peishuai Sun, Yong Ding, <b><u>Xinhao Deng</u></b>, Qingyun Liu.  
  *HOLMES & WATSON: A Robust and Lightweight HTTPS Website Fingerprinting through HTTP Version Parallelism.*  
  *ACM Web Conference (WWW), 2025.*

- **[KDD’25]** Li Gao, Chuanpu Fu, <b><u>Xinhao Deng</u></b>, Ke Xu, Qi Li.  
  *Wedjat: Detecting Sophisticated Evasion Attacks via Real-time Causal Analysis.*  
  *ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2025.*


## 📌 2024

- **[Preprint]** Tianyu Cui, Yanling Wang, Chuanpu Fu, Yong Xiao, Sijia Li, <b><u>Xinhao Deng</u></b>, Yunpeng Liu, Qinglin Zhang, Ziyi Qiu, Peiyang Li, Zhixing Tan, Junwu Xiong, Xinyu Kong, Zujie Wen, Ke Xu, Qi Li.  
  *Risk Taxonomy, Mitigation, and Assessment Benchmarks of Large Language Model Systems.*  
  [[PDF](https://arxiv.org/pdf/2401.05778)]

- **[CCS’24]** <b><u>Xinhao Deng</u></b>, Qi Li, Ke Xu.  
  *Robust and Reliable Early-Stage Website Fingerprinting Attacks via Spatial-Temporal Distribution Analysis.*  
  *ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024.*  
  [[PDF](https://arxiv.org/pdf/2407.00918)] | [[Code](https://github.com/Xinhao-Deng/Website-Fingerprinting-Library)]  
  *Artifact Evaluation:* 🏅Available · 🏅Reusable · 🏅Reproduced

- **[CCS’24]** Xiyuan Zhao\*, <b><u>Xinhao Deng</u></b>\* (Equal Contribution), Qi Li, Yunpeng Liu, Zhuotao Liu, Kun Sun, Ke Xu.  
  *Towards Fine-Grained Webpage Fingerprinting at Scale.*  
  *ACM SIGSAC Conference on Computer and Communications Security (CCS), 2024.*  
  [[PDF](https://arxiv.org/pdf/2409.04341)] | [[Code](https://zenodo.org/records/13383332)]  
  *Artifact Evaluation:* 🏅Available · 🏅Functional · 🏅Reproduced

- **[TNSM’24]** <b><u>Xinhao Deng</u></b>, Mingwei Xu, Qi Li, Weijie Wu, Yuan Yang, Menghao Zhang, Yu Zhou, Jianping Wu.  
  *Exploring Dynamic Rule Caching Under Dependency Constraints for Programmable Switches: Theory, Algorithm, and Implementation.*  
  *IEEE Transactions on Network and Service Management (TNSM), 2024.*  
  [[PDF](https://ieeexplore.ieee.org/document/10582912)]

- **[NDSS’24]** Yuqi Qing, Qilei Yin, <b><u>Xinhao Deng</u></b>, Yihao Chen, Zhuotao Liu, Kun Sun, Ke Xu, Jia Zhang, Qi Li.  
  *Low-Quality Training Data Only? A Robust Framework for Detecting Encrypted Malicious Network Traffic.*  
  *Network and Distributed System Security Symposium (NDSS), 2024.*  
  [[PDF](https://arxiv.org/pdf/2309.04798.pdf)] | [[Code](https://github.com/XXnormal/RAPIER)]


## 📌 Before 2024

- **[S&P’23]** <b><u>Xinhao Deng</u></b>, Qilei Yin, Zhuotao Liu, Xiyuan Zhao, Qi Li, Mingwei Xu, Ke Xu, Jianping Wu.  
  *Robust Multi-tab Website Fingerprinting Attacks in the Wild.*  
  *IEEE Symposium on Security and Privacy (S&P), 2023.*  
  [[PDF](http://www.thucsnet.com/wp-content/papers/xinhao_sp2023.pdf)] | [[Code](https://github.com/Xinhao-Deng/Multitab-WF-Datasets)] | [[Dataset](https://github.com/Xinhao-Deng/Multitab-WF-Datasets)]

- **[SecureComm’23]** Guoqiang Zhang, Jiahao Cao, Mingwei Xu, <b><u>Xinhao Deng</u></b>.  
  *Unsupervised and Adaptive Tor Website Fingerprinting.*  
  *EAI SecureComm, 2023.*  
  [[PDF](https://link.springer.com/chapter/10.1007/978-3-031-64954-7_11)]

- **[TIFS’22]** Qi Li, <b><u>Xinhao Deng</u></b>, Zhuotao Liu, Yuan Yang, Xiaoyue Zou, Mingwei Xu, Jianping Wu.  
  *Dynamic Network Function Enforcement via Joint Flow and Function Scheduling.*  
  *IEEE Transactions on Information Forensics and Security (TIFS), 2022.*  
  [[PDF](https://ieeexplore.ieee.org/document/9680702)]

- **[Computers & Security’22]** Jie Sun, Lingchen Zhao, Zhuotao Liu, Qi Li, <b><u>Xinhao Deng</u></b>, Qian Wang, Yong Jiang.  
  *Practical Differentially Private Online Advertising.*  
  *Computers & Security, 2022.*  
  [[PDF](https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X)]

- **[TNSM’19]** Shu Yang, Laizhong Cui, <b><u>Xinhao Deng</u></b>, Qi Li, Yulei Wu, Mingwei Xu, Jianping Wu.  
  *FISE: A Forwarding Table Structure for Enterprise Networks.*  
  *IEEE Transactions on Network and Service Management (TNSM), 2019.*  
  [[PDF](https://www.sciencedirect.com/science/article/abs/pii/S016740482100328X)]


# 🎖 Honors and Awards
- Outstanding Doctoral Dissertation of Tsinghua University 2025. (清华大学优秀博士学位论文)
- Science and Technology Award, Chinese Institute of Electronics. 2024.（中国电子学会科技进步一等奖）
- Student Travel Grant of ACM CCS 2024.
- 1st-class Scholarship of Tsinghua University. 2024 & 2022.（清华大学一等奖学金）
- Tsinghua-Longfor Scholarship. 2023.（清华-龙湖奖学金）
- China National Scholarship. 2019.（国家奖学金）

# 📑 Academic Services
- **Conference Reviewer**: SecureComm'23, ACSAC'22, ACSAC'20.
- **Journal Reviewer**: TIFS, TNSM.
- **Artifact Evaluation Committee**: Security'25, CCS'24, ACSAC'22.
- **External Reviewer**: S&P'25, CCS'24, NDSS'24, Security'23, WWW'23.