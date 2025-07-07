# PR Review Bot

An automated PR review bot powered by Gemini AI that provides concise, actionable feedback on pull requests.

## Features

- 🤖 AI-powered code review using Google's Gemini API
- 📝 Concise feedback focused on key issues
- 🔒 Security vulnerability detection
- ⚡ Fast analysis with optimized prompts
- 🎯 Actionable recommendations

## Setup

1. Add your `GOOGLE_API_KEY` to repository secrets
2. Configure the workflow in `.github/workflows/analyze-pr.yaml`
3. Create a PR to trigger the review

## Usage

The bot automatically reviews PRs when they are:
- Opened
- Updated with new commits
- Reopened

## Configuration

The workflow can be customized by modifying the prompt template and generation parameters in the workflow file.

## Contributing

Feel free to submit issues and enhancement requests!

## License

[MIT License](LICENSE)
