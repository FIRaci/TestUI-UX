# Journal: Add 119 HCI Quiz Questions

**Date:** 2026-06-24

## Changes
- Merged 119 questions from `add-questions.js` into `js/quiz-data.js` (115 → 234 total)
- Updated static question count text (115 → 234) on index.html
- Disambiguated duplicate question texts for IDs 70/79 and 160/162

## Commits
1. `c56bcf3` — feat: add 119 HCI quiz questions (total 234) across chapters 1-12
2. `3b13948` — fix: update question count display and disambiguate duplicate questions

## Decisions
- Kept `add-questions.js` as reference (not deleted)
- Pushed both commits to `origin/main`

## Current State
- 234 questions, 12 chapters, all parse-valid
- `add-questions.js` is fully merged and now redundant
