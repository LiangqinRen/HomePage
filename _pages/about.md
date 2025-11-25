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

I am a Ph.D. candidate in Electrical Engineering and Computer Science (EECS) at the University of Kansas, advised by Prof. [Fengjun Li](https://ittc.ku.edu/~fli/) and Prof. [Bo Luo](https://www.ittc.ku.edu/~bluo/). My research interests focus on security and privacy of machine learning systems, including model protection, Deepfake defenses, and copyright protection.

## Education

- Ph.D. in Computer Science, University of Kansas (*Aug 2021 – Present*)
- M.Eng. in Computer Technology, University of Chinese Academy of Sciences (*Aug 2017 – Jun 2020*)
- B.Eng. in Network Engineering, Shandong University of Science and Technology (*Aug 2013 – Jun 2017*)

## Publications

- Yuying Li, Zeyan Liu, Junyi Zhao, **Liangqin Ren**, Fengjun Li, Jiebo Luo, and Bo Luo. The Adversarial AI-Art: Understanding, Generation, Detection, and Benchmarking. In Proceedings of the European Symposium on Research in Computer Security (ESORICS), Bydgoszcz, Poland, 2024. [[Link](https://link.springer.com/chapter/10.1007/978-3-031-70879-4_16), [PDF](https://www.ittc.ku.edu/~bluo/pubs/li2024esorics.pdf), [Codes](https://github.com/AdvAIArtProject/AdvAIArt)]
- **Liangqin Ren**, Zeyan Liu, Fengjun Li, Kaitai Liang, Zhu Li, and Bo Luo. PrivDNN: A Secure Multi-Party Computation Framework for Deep Learning using Partial DNN Encryption. In Proceedings of Privacy Enhancing Technologies Symposium (PETS), Bristol, UK, 2024. [[Link](https://petsymposium.org/popets/2024/popets-2024-0089.php), [PDF](../files/2024_pets_privdnn.pdf), [Codes](https://github.com/LiangqinRen/PrivDNN)]

## Teaching

- Teaching Assistant, EECS 348 Software Engineering I, University of Kansas (Fall 2024 – Spring 2025, Instructor: Prof. [David Johnson](https://eecs.ku.edu/people/david-johnson))

- Teaching Assistant, EECS 348 Software Engineering I, University of Kansas (Fall 2022 – Spring 2024, Instructor: Prof. [Hossein Saiedian](https://people.eecs.ku.edu/~saiedian/))

## Services

- Reviewer for TDSC 2025, ISCAS 2025, KSEM 2024, ISCAS 2024.
- Session Moderator for SecureComm 2022.

## Internships

- Applied Scientist Intern, Amazon, Seattle, WA (May 2025 – Aug 2025)
  - Leveraged LLMs to infer user context patterns and enhanced retrieval candidate ranking by incorporating contextual information.
- Applied Scientist Intern, Amazon, Seattle, WA (Jun 2024 – Sep 2024)
  - Extracted user emotions from video reviews using NLP and LLM techniques and applied them to enhance long-tail recommendation performance.
- Software Development Engineer Intern, Baidu, Beijing (Jan 2021 – Jun 2021)
  - Developed Baidu translation SDKs for mobile devices, enabling integration of machine translation into Android and iOS applications.
