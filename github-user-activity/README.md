# GitHub User Activity CLI

A small command-line tool that fetches and displays a GitHub user's recent public activity using the GitHub Events API.

- Zero external dependencies (uses Node.js built-in `fetch`).
- Simple, human-readable output for common event types (push, create, delete, star/watch, etc.).

## Requirements

- Node.js 18 or newer (built-in `fetch` is required).
- Internet connection.

Tip: If you hit GitHub API rate limits, provide a personal access token via `GITHUB_TOKEN` (see "Authentication & Rate Limits" below).

## Installation

Clone the repo and optionally install (no external packages required):

```bash
git clone https://github.com/MahyarKaliji/backend-projects/tree/main/github-user-activity
cd github-user-activity
npm install    # optional; there are no external deps
```

To make the CLI available system-wide:

```bash
npm link
# then run:
github-activity <username>
```

Or run directly with Node:

```bash
node ./index.js <username>
```

You can also use the npm script (if present) to run the tool:

```bash
npm run github-activity -- <username>
```

## Usage

Basic usage (positional arg required):

```bash
node ./index.js torvalds
# or (if linked)
github-activity torvalds
```

If using the npm script, pass args after `--`:

```bash
npm run github-activity -- torvalds
```

## Output Examples

Typical output lines produced by the CLI:

```bash
- Pushed to torvalds/linux
- Created a branch in torvalds/linux
- Starred octocat/Hello-World
- Deleted a tag from someuser/repo
- PullRequest on someuser/repo
```

Event handling in the tool:

- `PushEvent` → "Pushed to {repo}"
- `CreateEvent` → "Created a {ref_type} in {repo}"
- `DeleteEvent` → "Deleted a {ref_type} from {repo}"
- `WatchEvent` → "Starred {repo}"
- Other events → fallback: `{EventType} on {repo}`

## Authentication & Rate Limits

- Unauthenticated requests to the GitHub API are rate-limited (low limit, e.g., 60 requests/hour as of GitHub public API policy).
- To increase rate limits, set a personal access token in the environment variable `GITHUB_TOKEN`.

Set `GITHUB_TOKEN` (Linux / macOS):

```bash
export GITHUB_TOKEN=your_token_here
```

PowerShell (Windows):

```bash
$env:GITHUB_TOKEN="your_token_here"
```

CMD (Windows):

```bash
set GITHUB_TOKEN=your_token_here
```

Note: This project does not yet read `GITHUB_TOKEN` automatically — consider adding token-based `Authorization` header if you need authenticated requests.

## Error Handling

- If the username does not exist, the CLI prints: `User not found! Please check the username and try again`.
- Network or HTTP errors print a short message with the HTTP status code.
- If no activity array is returned, the CLI prints: `No recent activity found`.

## Project Structure

- `index.js` — CLI entry point; fetches events and prints formatted output.
- `package.json` — metadata and scripts.
- (Optional) other files if present in repo.

## Development Notes

- Requires Node.js 18+ for built-in fetch.
- No external dependencies — small and portable.
- Improvements you may want to add:
  - Use `GITHUB_TOKEN` to authenticate requests and handle rate-limiting.
  - Add a `--limit` or `--since` flag to control how much history is fetched/displayed.
  - Add colored output for better readability.
  - Add a `--json` flag to output raw JSON for scripting.

## Example Workflow

1. Run the CLI for a user:

```bash
node ./index.js octocat
```

2. Expected short output (example):

```bash
- Pushed to octocat/Hello-World
- Created a branch in octocat/Hello-World
- Starred someuser/somerepo
```

## Contributing

Contributions and improvements are welcome. Suggested small tasks:

- Add token-based authentication (read `GITHUB_TOKEN` and set `Authorization` header).
- Improve event parsing and add more event-specific messages.
- Add unit tests.
