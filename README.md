# PR Analysis with LLM

This repository contains a reusable GitHub Action workflow that automatically analyzes pull requests using OpenAI's GPT-4 model to provide comprehensive code reviews.

## Overview

The workflow fetches the PR diff and changed files, sends them to OpenAI's API, and posts a detailed analysis as a comment on the PR. The analysis covers:

- Summary of changes
- Technical analysis
- Security review
- Code quality assessment
- Actionable recommendations

## Setup

### Prerequisites

- An OpenAI API key with access to GPT-4

### Configuration

1. Add your OpenAI API key as a repository secret named `OPENAI_API_KEY`

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
      OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```


## How It Works

1. When a PR is opened or updated, the workflow:
   - Checks out the code
   - Sets up the GitHub CLI
   - Fetches the PR diff and list of changed files
   - Sends this information to OpenAI's GPT-4
   - Posts the analysis as a comment on the PR

2. The analysis is structured into sections:
   - 📝 Summary
   - 🔍 Technical Analysis
   - 🔒 Security Review
   - 💡 Code Quality
   - 🎯 Recommendations

## Customization

You can customize the system prompt and analysis structure by modifying the OpenAI API request in the workflow file.

## Limitations

- The workflow has a token limit based on the OpenAI model used
- Very large PRs may exceed this limit and result in incomplete analysis
- The analysis is AI-generated and should be reviewed by human developers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
