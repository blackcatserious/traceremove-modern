# Audit: traceremove-modern

## Summary

Первичный аудит кода и инфраструктуры traceremove-modern.  
Включает выявленные проблемы, TODO, технический долг и план поэтапных исправлений.

---

## Найденные проблемы

- **Битые или устаревшие внешние ссылки** (см. links_report.md)
- Жёстко захардкоженные домены (`traceremove.*`) в статических ресурсах → mixed-content или ошибки при деплое на другие домены
- Недостаток базовой SEO-разметки (нет sitemap.xml, robots.txt, meta/og)
- Отсутствует продвинутый контроль заголовков (Referrer-Policy, X-Content-Type-Options, X-Frame-Options)
- Верстка на ряде брейкпоинтов нестабильна (смещения карточек, проблемы с box-sizing/media)
- Нет автоматизированной проверки ссылок в CI
- Нет сборки release-zip

---

## План фиксов (по этапам/PR):

1. **PR #1:**  
   - Документировать найденные проблемы и broken links  
   - Добавить CI для link-check + артефакт

2. **PR #2:**  
   - Исправить абсолютные ссылки на относительные для всей статики  
   - Минимальный CSS-патч для layout, box-sizing, responsive, overflow

3. **PR #3:**  
   - Добавить public/sitemap.xml, robots.txt, базовые <title>/<meta> и OG, canonical

4. **PR #4:**  
   - vercel.json — cache/security headers (Referrer-Policy, X-Content-Type-Options, X-Frame-Options)

5. **PR #5 (optional):**  
   - CI для сборки artifacts/traceremove-dev.zip (release-zip)

---

## Примечания

- Не менять стек/архитектуру.
- Все фиксы — отдельными, прозрачными коммитами и PR.