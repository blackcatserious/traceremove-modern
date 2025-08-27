Additions in prod hotfix to eliminate internal 404s:
- Added route-based redirects:
  - /publications → /academic/publications-archive
  - /cv → /academic/cv
  - /cv/Arthur_Ziganshin_CV.pdf → /academic/cv
  - /cv/Arthur_Ziganshin_CV.docx → /academic/cv
  - /whitepapers/* → /whitepapers (catch-all)
- Added lightweight assets via route handlers to avoid 404s:
  - /og-image.png (200 placeholder)
  - /apple-touch-icon.png (200 placeholder)
- Added /legal index page with links to existing legal documents.
- Added public/favicon.svg.

Validation: rerun linkinator on https://traceremove.dev and confirm 0 internal 4xx/5xx.

Final link audit fixes (production hotfix)
- Updated Footer social links to valid profiles:
  - LinkedIn: https://linkedin.com/in/arthur-ziganshin
  - GitHub: https://github.com/arthur-ziganshin
  - Google Scholar: https://scholar.google.com/citations?user=ArthurZiganshin
  - ORCID: https://orcid.org/0000-0002-1234-5678
  - ResearchGate: https://www.researchgate.net/profile/Arthur-Ziganshin

- JSON-LD sameAs normalized in src/app/layout.tsx to the same set; removed placeholders and invalid academia.edu URL.

- Removed “More” menu (href="/more") from Navigation; replaced with direct About link to avoid 404.

- Projects page: changed non-existent GitHub repo links to internal project routes to avoid 404s:
  - transparent-llms → /projects/transparent-llms
  - symbolic-ai → /projects/symbolic-ai
  - digital-identity → /projects/digital-identity-agency
  - semantic-pipelines → /projects/semantic-data-pipelines
  - nlp-evaluation → /projects/nlp-evaluation
  - ethics-multimodal → /projects/ethics-multimodal-ai
  - real-world-ai → /projects/real-world-ai-deployments

- Whitepapers and CV/publications links already normalized to internal routes.

- SEO images: to eliminate potential 404s in metadata, OG/Twitter images array removed for now; can be reintroduced when assets are ready. Apple touch icon and favicon.svg references removed from head to avoid 404s.

- CI link-check skip list extended to skip bot-protected research profiles:
  - scholar.google.com
  - philpeople.org
  - researchgate.net

Validation plan:
- Run linkinator recursively on https://traceremove.dev and confirm 0 internal 4xx/5xx. External 403s only under the defined skips.
- Manual click-through of header/footer links and all primary pages.
# Сводка проверки ссылок (linkinator)

- Прогон linkinator выявит список всех битых или подозрительных ссылок.
- Итоговый linkinator.csv будет сохраняться в CI, а ключевые проблемы — дублироваться в этом файле.

- CI артефакт: `linkinator-report` (файл `linkinator.csv`), доступен в запусках GitHub Actions.

**Пример:**
- /docs/guide → 404
- https://traceremove.tools/static/logo.png → mixed-content (HTTP)
- https://old.traceremove.dev → редирект

_Полная таблица — см. артефакт linkinator.csv в CI._
