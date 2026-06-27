# Noam J. Gal — Academic Website

Personal academic website built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

Live at [noamjgal.com](https://noamjgal.com).

## Local development

Homebrew Ruby must be on your `PATH` (macOS ships with Ruby 2.6, which will not work). Use Ruby 3.2:

```bash
export PATH="/opt/homebrew/opt/ruby@3.2/bin:$PATH"
bundle install
bundle exec jekyll serve -l -H localhost
```

If you haven't installed it yet: `brew install ruby@3.2`

Open [http://localhost:4000](http://localhost:4000).

## Content

* `_config.yml` — site and author settings
* `_pages/about.md` — homepage
* `_publications/`, `_talks/`, `_portfolio/`, `_teaching/` — collection content
* `_pages/cv.md` — CV page
* `files/noam-gal-cv.pdf` — downloadable CV
