# Сводка проверки ссылок (linkinator)

- Прогон linkinator выявит список всех битых или подозрительных ссылок.
- Итоговый linkinator.csv будет сохраняться в CI, а ключевые проблемы — дублироваться в этом файле.

- CI артефакт: `linkinator-report` (файл `linkinator.csv`), доступен в запусках GitHub Actions.

**Пример:**
- /docs/guide → 404
- https://traceremove.tools/static/logo.png → mixed-content (HTTP)
- https://old.traceremove.dev → редирект

_Полная таблица — см. артефакт linkinator.csv в CI._
