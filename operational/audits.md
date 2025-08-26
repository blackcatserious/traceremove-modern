# Аудит traceremove.dev (начальный этап)

## Общие проблемы
- Возможные mixed-content (проверить все ресурсы и ссылки)
- Жёсткие доменные ссылки на другие сервисы traceremove.*
- Возможные битые или редиректящие ссылки (см. links_report.md)
- Местами “плавающая” вёрстка на мобильных (min-width/max-width, карточки)
- Отсутствует единая SEO-структура (meta, OG, sitemap, robots.txt)
- Нет vercel.json с security-заголовками и кэшем
- Нет CI для проверки ссылок

## CI
- Настроен workflow `.github/workflows/link-check.yml`, который запускает:
  `npx --yes linkinator https://traceremove.dev/ --recurse --format csv | tee linkinator.csv`
- Итоговый файл `linkinator.csv` прикрепляется как артефакт `linkinator-report` к запуску CI.

## Локальный прогон
- Команда для локальной проверки:
  `npx --yes linkinator https://traceremove.dev/ --recurse --format csv > linkinator.csv`
## План фиксов
1. Прогнать linkinator и зафиксировать все битые ссылки.
2. Перевести ресурсы на относительные пути, устранить mixed-content.
3. Добавить минимальный CSS-патч для стабильности вёрстки.
4. Добавить базовые SEO-файлы и теги.
5. Добавить vercel.json с security/caching.
6. Внедрить CI для проверки ссылок и release-zip.
