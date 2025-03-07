# PR Analysis with LLM

This repository contains a reusable GitHub Action workflow that automatically analyzes pull requests using Google's Gemini model to provide comprehensive code reviews.

## Overview

The workflow fetches the PR diff and changed files, sends them to Gemini's API, and posts a detailed analysis as a comment on the PR. The analysis covers:

- Summary of changes
- Technical analysis
- Security review
- Code quality assessment
- Actionable recommendations

## Setup

### Prerequisites

- A Google API key with access to Gemini 
  > 💰 **Unlike OpenAI, Google actually gives these API keys away for free!** 
  > 
  > You can get one [here](https://aistudio.google.com/apikey)

### Configuration

1. Add your Google API key as a repository secret named `GOOGLE_API_KEY`

2. Create a workflow file in your repository that calls this reusable workflow:

```yaml
name: PR Analysis

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  analyze-pr:
    uses: houseworksinc/pr-review-bot/.github/workflows/analyze-pr.yaml
    with:
      GOOGLE_API_KEY: ${{ secrets.GOOGLE_API_KEY }}
```


## How It Works

1. When a PR is opened or updated, the workflow:
   - Checks out the code
   - Sets up the GitHub CLI
   - Fetches the PR diff and list of changed files
   - Sends this information to Google's Gemini model
   - Posts the analysis as a comment on the PR

2. The analysis is structured into sections:
   - 📝 Summary
   - 🔍 Technical Analysis
   - 🔒 Security Review
   - 💡 Code Quality
   - 🎯 Recommendations

## Customization

You can customize the system prompt and analysis structure by modifying the Gemini API request in the workflow file.

## Limitations

- The workflow has a token limit based on the Gemini model used
- Very large PRs may exceed this limit and result in incomplete analysis
- The analysis is AI-generated and should be reviewed by human developers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
