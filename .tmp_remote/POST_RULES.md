# POST_RULES — правила создания постов SOLIS Partners

## Принципы

1. **Коротко и ценно** — максимум 3-4 абзаца. Читатель должен получить пользу за 20 секунд.
2. **Конкретная норма** — всегда ссылка на закон: статья, пункт, год редакции.
3. **Практичность** — что это значит для бизнеса прямо сейчас.
4. **CTA** — каждый пост заканчивается призывом: ссылка на сайт или @SOLISlegal.

## Приоритет ссылок (ОБЯЗАТЕЛЬНО)

- Если тема про **AIFC / МФЦА / MFCI / AFSA / регистрацию компании в AIFC**: основной CTA только на `https://aifc.solispartners.kz/`.
- `https://www.solispartners.kz/` использовать как вторичную ссылку и только для общих тем, не связанных с AIFC.
- Опечатку **MFCI** всегда трактовать как **МФЦА / AIFC**.
- В постах про AIFC добавлять UTM-ссылку по каналу.

Рекомендуемые UTM-ссылки:
- LinkedIn: `https://aifc.solispartners.kz/?utm_source=linkedin&utm_medium=organic&utm_campaign=aifc_launch&utm_content=post`
- Telegram: `https://aifc.solispartners.kz/?utm_source=telegram&utm_medium=organic&utm_campaign=aifc_launch&utm_content=post`
- Instagram: `https://aifc.solispartners.kz/?utm_source=instagram&utm_medium=organic&utm_campaign=aifc_launch&utm_content=bio`
- Email: `https://aifc.solispartners.kz/?utm_source=email&utm_medium=newsletter&utm_campaign=aifc_launch&utm_content=digest`

---

## Форматы постов

### 1. НОРМА (одна статья или изменение)
```
📌 [ТЕМА] — [закон, статья]

[1-2 предложения: суть нормы простым языком]

Что это значит для вас:
• [последствие 1]
• [последствие 2]
• [последствие 3]

⚖️ [ст. X Закона РК «О...» от дд.мм.гггг]

🔗 https://aifc.solispartners.kz/ | @SOLISlegal
```

### 2. СРАВНЕНИЕ (было / стало)
```
⚡️ [БЫЛО vs СТАЛО] — [тема]

❌ Раньше: [старое правило одним предложением]
✅ Теперь: [новое правило одним предложением]

Риск для бизнеса: [1 предложение]
Что делать: [1 конкретное действие]

📎 [норма]
🔗 https://aifc.solispartners.kz/ | @SOLISlegal
```

### 3. ЧЕК-ЛИСТ (5-7 пунктов)
```
✅ [5/6/7 вещей, которые нужно проверить в [теме]]

1. [пункт]
2. [пункт]
...

Если хоть один пункт не закрыт — есть риск.

🔗 https://aifc.solispartners.kz/ | @SOLISlegal
```

### 4. КЕЙС (ситуация → норма → решение)
```
⚖️ Кейс: [название ситуации]

Ситуация: [2-3 предложения — проблема]

Норма: [ст. X ГК/ТК/НК и т.д.]

Вывод: [1-2 предложения — что нужно сделать]

🔗 https://aifc.solispartners.kz/ | @SOLISlegal
```

### 5. LINKEDIN (расширенный)
Те же форматы, но добавить:
- **Первое предложение** — цепляющее, без вводных слов
- **Хэштеги** в конце: #КазахстанскоеПраво #Бизнес #SOLIS #LegalTech
- Длина: до 700 символов

---

## Правила языка

- Писать на **русском** (основной) + можно дублировать ключевую мысль на **казахском**
- Без юридического жаргона без объяснения
- "Вы" с заглавной — деловой тон, но не сухой
- Не использовать: "данный", "осуществляет", "в соответствии с вышеизложенным"
- Использовать: "значит", "проще говоря", "на практике это"

---

## Визуальные карточки

Скрипт: `python3 /home/clawd/.openclaw/scripts/post_card_generator.py`

| Тип | Команда |
|-----|---------|
| Норма | `--type norm --title "ст. 96 ГК" --body "Текст" --tag "Договоры"` |
| Сравнение | `--type vs --title "Заголовок" --left "Было" --right "Стало"` |
| Чек-лист | `--type checklist --title "5 рисков" --items "Пункт 1\|Пункт 2\|..."` |
| Кейс | `--type case --situation "Ситуация" --solution "Решение" --norm "ст. 96 ГК"` |
| LinkedIn | добавить `--wide` для формата 1200×628 |

Карточки сохраняются в: `/home/clawd/.openclaw/workspace/export/cards/`

---

## Маркетинг — обязательные элементы

| Элемент | Значение |
|---------|----------|
| AIFC сайт (primary) | https://aifc.solispartners.kz/ |
| Основной сайт (secondary) | https://www.solispartners.kz/ |
| Telegram | @SOLISlegal |
| LinkedIn | SOLIS Partners |
| Специализация | TMT (Technology, Media & Telecommunications) |
| Локация | Казахстан, Астана |

---

## Индексация AIFC-лендинга

- Sitemap для Search Console: `https://aifc.solispartners.kz/sitemap.xml`
- Robots: `https://aifc.solispartners.kz/robots.txt`
- Если в Search Console ошибка "Sitemap является HTML": отправлен неверный URL; нужно отправлять именно `.../sitemap.xml`.

---

## Когда пользователь скидывает ссылку или документ

1. Прочитать / загрузить контент
2. Определить тип поста (норма / сравнение / кейс / чек-лист)
3. Выдать **готовый текст поста** под нужную платформу
4. Выдать **команду для карточки** (копипаст для генератора)
5. Спросить: нужен ли LinkedIn-вариант дополнительно


---

## Создание изображений — ВАЖНО

**Brain НЕ генерирует картинки сам.**
**Brain создаёт промпт для Gemini / Midjourney / другого генератора.**

### Когда просят сделать картинку / карточку / пост-картинку:

1. Выдать **готовый промпт** для image-генератора
2. Напомнить: "Добавь логотип SOLIS Partners поверх готового изображения"
3. НЕ пытаться создать изображение самостоятельно

---

### Промпт для одиночной карточки Instagram 1080x1080:

Create a professional legal infographic card, Instagram square format 1080x1080px.

Background: very dark, almost black (#080808).
Accent color: teal/cyan (#64A8B9).
Text color: white.
Font style: serif for headlines, clean sans-serif for body text.

Layout:
- Top left: small teal accent bar (vertical, 6px wide, 80px tall)
- Tag pill top left: rounded rectangle, teal fill, white text "[TAG]"
- Main headline (large, serif, white): "[ЗАГОЛОВОК]"
- Horizontal divider line (teal, thin)
- Body text (3 bullet points, white, sans-serif):
  [пункт 1]
  [пункт 2]
  [пункт 3]
- Bottom bar (dark grey): right side: "solispartners.kz" and "@SOLISlegal" muted grey
- Bottom left: [LOGO PLACEHOLDER] — owner places SOLIS Partners logo here

Style: modern, minimalist, premium legal firm. No people, no stock photos. Clean geometric.

---

### Промпт для карусели Instagram (N слайдов):

Create [N] matching Instagram carousel slides, 1080x1080px each.
Identical visual style across all slides for cohesive look.

SLIDE STYLE (all slides):
- Background: #080808
- Accent: #64A8B9 (teal)
- Text: white
- Font: serif headlines, sans-serif body
- Every slide bottom bar: "solispartners.kz | @SOLISlegal" muted grey
- Every slide bottom left: [LOGO PLACEHOLDER]
- Slide counter top right: small "1 of N" / "2 of N" etc

SLIDE 1 (Cover):
Headline: [ТЕМА]
Subtitle: [подзаголовок]
Visual: bold typography, large teal accent, minimal

SLIDE 2:
Headline: [заголовок блока]
Bullet 1: [текст]
Bullet 2: [текст]
Bullet 3: [текст]
Footer note (small): [ст. X, Закон РК...]

[повторить структуру Slide 2 для каждого блока]

LAST SLIDE (CTA):
Large text: "Есть вопросы?"
Large: "solispartners.kz"
Large: "@SOLISlegal"
Minimal, clean, teal accent elements only

Style: flat design, subtle vignette only, no 3D, no gradients, no people.
Premium B2B legal brand aesthetic.
