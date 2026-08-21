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
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div id="about" class="section-anchor" aria-hidden="true"></div>

I am a final-year Ph.D. candidate in Electrical Engineering and Computer Science (EECS) at the University of Kansas, advised by Prof. [Fengjun Li](https://ittc.ku.edu/~fli/) and Prof. [Bo Luo](https://www.ittc.ku.edu/~bluo/). I expect to graduate in December 2026 and am actively seeking full-time opportunities beginning in 2027. My research focuses on the security and privacy of machine learning systems, including model protection, deepfake defense, and image copyright protection. I am also broadly interested in machine learning systems and applications, particularly recommender systems and large language models.

## Education {#education}

- Ph.D. in Computer Science, University of Kansas (*Aug 2021 – Dec 2026 (Expected)*)
- M.Eng. in Computer Technology, University of Chinese Academy of Sciences (*Sep 2017 – Jul 2020*)
- B.Eng. in Network Engineering, Shandong University of Science and Technology (*Sep 2013 – Jun 2017*)

## Experience {#experience}

- Applied Scientist Intern, Amazon, Seattle, WA (May 2025 – Aug 2025)
  - Developed an end-to-end LLM-based session-aware recommendation pipeline that generated short-term viewer profiles and re-ranked retrieved video candidates based on inferred viewer intent.
- Applied Scientist Intern, Amazon, Seattle, WA (Jun 2024 – Sep 2024)
  - Developed an LLM-based emotion-aware recommendation pipeline that extracted emotion signatures from large-scale user reviews and integrated them into semantic video representations for retrieval and ranking.
- Software Development Engineer Intern, Baidu, Beijing (Jan 2021 – May 2021)
  - Developed a cross-compiled SDK for ARM-based translation devices by re-wrapping Baidu Translation's x86 SDK functionality and encapsulating online API calls to Baidu Translation services.

## Publications {#publications}

1. **<u>Liangqin Ren</u>**, Zeyan Liu, Ye Wang, Yuxin Chen, Fengjun Li, and Bo Luo. PhantomSeal: Proactive Deepfakes Defense with Identity/Context Protection and Forensic Tracing. In Proceedings of the ACM SIGSAC Conference on Computer and Communications Security (CCS), The Hague, Netherlands, 2026. [[PDF](https://arxiv.org/pdf/2607.20564), [Code](https://github.com/LiangqinRen/PhantomSeal)]
2. Xu, Xin, Zhen Yang, Quanwei Cai, Jingqiang Lin, **<u>Liangqin Ren</u>**, Bo Chen, and Yongfeng Huang. Enforcing cryptographic distributed-VCS access control with no trust on servers. Journal of Information Security and Applications (JISA), 93 (2025): 104103. [[Elsevier](https://www.sciencedirect.com/science/article/pii/S2214212625001401), [PDF](https://arxiv.org/pdf/2607.29417)]
3. Yuying Li, Zeyan Liu, Junyi Zhao, **<u>Liangqin Ren</u>**, Fengjun Li, Jiebo Luo, and Bo Luo. The Adversarial AI-Art: Understanding, Generation, Detection, and Benchmarking. In Proceedings of the European Symposium on Research in Computer Security (ESORICS), Bydgoszcz, Poland, 2024. [[Springer](https://link.springer.com/chapter/10.1007/978-3-031-70879-4_16), [PDF](https://arxiv.org/pdf/2404.14581)]
4. **<u>Liangqin Ren</u>**, Zeyan Liu, Fengjun Li, Kaitai Liang, Zhu Li, and Bo Luo. PrivDNN: A Secure Multi-Party Computation Framework for Deep Learning using Partial DNN Encryption. In Proceedings of Privacy Enhancing Technologies Symposium (PETS), Bristol, UK, 2024. [[PoPETs](https://petsymposium.org/popets/2024/popets-2024-0089.php), [PDF](https://arxiv.org/pdf/2607.21895), [Code](https://github.com/LiangqinRen/PrivDNN)]

## Services {#services}

- Reviewer for TDSC (2025-2026) and ISCAS 2025.
- Session Moderator for SecureComm 2022.

## Teaching {#teaching}

- Teaching Assistant, EECS 556 Introduction to Information and Computer Security, University of Kansas (Fall 2026)
- Teaching Assistant, EECS 348/448 Software Engineering, University of Kansas (Fall 2022 – Spring 2026)
