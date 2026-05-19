# 生物醫學資訊學研究技術 — 互動式教程

**🌐 Live demo / 線上瀏覽**: <https://charlene717.github.io/biomedinfo-interactive-tutorial/>


Biomedical Informatics Research Techniques — Interactive Tutorial

從研究設計到發表，14 個主題涵蓋生物醫學資訊學研究的完整流程，搭配中英文雙語、互動模擬、R/Python 程式碼範例與單元測驗。

## 主題列表 (14 topics)

### 核心研究流程 (Core Pipeline)
1. **研究設計與假說** — Research Design & Hypothesis (PICO / FINER)
2. **文獻檢索與系統性回顧** — Literature Search & Systematic Review (PRISMA)
3. **公開資料庫探索** — Public Database Mining (NCBI / Ensembl / UCSC / GEO / TCGA / UK Biobank)
4. **研究倫理與資料治理** — Ethics & Data Governance (IRB / HIPAA / GDPR / FAIR)
5. **樣本量與統計檢定力** — Sample Size & Statistical Power
6. **統計假設檢定** — Hypothesis Testing (t-test / Wilcoxon / chi-square / ANOVA)
7. **多重檢定校正** — Multiple Testing Correction (Bonferroni / BH-FDR / q-value)
8. **偏差、干擾與批次效應** — Bias, Confounding & Batch Effects
9. **存活分析** — Survival Analysis (Kaplan-Meier / Cox PH)

### 進階主題 (Advanced)
10. **因果推論** — Causal Inference (DAG / Propensity Score / Mendelian Randomization)
11. **Meta 分析** — Meta-analysis & Systematic Reviews
12. **可重現研究** — Reproducible Research (Git / Docker / Snakemake / Quarto)
13. **數據視覺化原則** — Data Visualization Principles
14. **科學寫作與發表** — Scientific Writing & Publishing (IMRaD / peer review / preprints)

## 結構

```
biomedinfo-interactive-tutorial-main/
├── index.html              # 主目錄
├── styles.css              # 共用樣式
├── i18n.js                 # 雙語切換 + 互動元素
├── research-design.html    # Step 1
├── literature-review.html  # Step 2
├── databases.html          # Step 3
├── ethics.html             # Step 4
├── sample-size.html        # Step 5
├── statistical-tests.html  # Step 6
├── multiple-testing.html   # Step 7
├── bias-confounding.html   # Step 8
├── survival.html           # Step 9
├── causal-inference.html   # Advanced
├── meta-analysis.html      # Advanced
├── reproducibility.html    # Advanced
├── visualization.html      # Advanced
└── scientific-writing.html # Advanced
```

## 使用方式

直接打開 `index.html` 即可在瀏覽器閱讀。所有頁面預設為繁體中文，右上角可切換英文。
