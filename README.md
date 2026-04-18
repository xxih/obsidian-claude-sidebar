# Claude Sidebar (xxih fork)

Run Claude Code in your Obsidian sidebar — with custom command support, GPU rendering, and zero-config task notifications.

This is a fork of [Derek Larson](https://dtlarson.com)'s excellent [original plugin](https://github.com/derek-larson14/obsidian-claude-sidebar) ([commands pairing →](https://delegatewithclaude.com/commands)) with extra features layered on top.

![Claude Sidebar](screenshot-obsidian.png)

## Features

### From the original plugin

- **Embedded terminal** — full terminal in your Obsidian sidebar
- **Auto-launches Claude** — Claude Code starts automatically
- **Multiple tabs** — run multiple Claude instances side by side
- **Folder context menu** — right-click any folder to open Claude in that directory
- **YOLO mode** — launch Claude with `--dangerously-skip-permissions` via right-click menus
- **Multi-backend** — switch between Claude Code, Codex, OpenCode, Gemini CLI, and Kimi Code

### New in this fork

- **Custom command backend** — point the sidebar at any wrapper script or alias (e.g. a `claude` launcher that configures a proxy, sets env vars, etc.) instead of being locked to the built-in backends
- **Interactive shell option** — optionally start via `zsh -ilc` so aliases/functions from `.zshrc` resolve
- **WebGL renderer** — ships `@xterm/addon-webgl` with context-loss auto-fallback; eliminates DOM-renderer ghosting and CJK width glitches
- **Task-complete notifications** — auto-installs a Claude Code `Stop` hook in `~/.claude/settings.json` that fires an `obsidian://` URI when a turn ends; matches cmux's UX without the manual setup
- **Attention-needed notifications** — spoofs `TERM_PROGRAM=iTerm.app` so Claude Code automatically emits OSC 9 on permission prompts and idle events; the plugin captures them and fires native macOS / Obsidian notifications
- **Smart routing** — in-app toast when Obsidian is focused, system notification when it's backgrounded

## Requirements

- macOS, Linux, or Windows
- Python 3
- [Claude Code](https://claude.com/claude-code)

## Installation

### Quick Install (Mac/Linux)

In your vault folder, run:

```bash
curl -sL https://github.com/xxih/obsidian-claude-sidebar/archive/refs/heads/main.tar.gz \
  | tar -xz -C .obsidian/plugins \
  && rm -rf .obsidian/plugins/claude-sidebar-xxih \
  && mv .obsidian/plugins/obsidian-claude-sidebar-main .obsidian/plugins/claude-sidebar-xxih
```

> **Note:** this fork uses plugin id `claude-sidebar-xxih` so it can live alongside the upstream `claude-sidebar` plugin without Obsidian Sync overwriting one with the other.

Then in Obsidian: Settings → Community Plugins → Refresh → Enable "Claude Sidebar".

**Windows:** see [Windows Setup](#windows-setup-experimental) (and adjust the target folder to `claude-sidebar-xxih`).

### BRAT (auto-updates)

1. Install [BRAT](https://github.com/TfTHacker/obsidian42-brat) from Community Plugins
2. BRAT settings → *Add Beta plugin* → enter `xxih/obsidian-claude-sidebar`
3. Enable "Claude Sidebar" in Settings → Community Plugins

BRAT pulls updates automatically as new commits land on `main`.

## Updating

Rerun the quick-install one-liner to overwrite with the latest `main`.

Or from a Claude session in your vault:

> Update the Claude Sidebar (xxih fork) plugin. Download main.js, manifest.json, and styles.css from https://raw.githubusercontent.com/xxih/obsidian-claude-sidebar/main/ into .obsidian/plugins/claude-sidebar-xxih/. Tell me the old and new version numbers.

### Manual

```bash
cd .obsidian/plugins/claude-sidebar-xxih
curl -LO https://raw.githubusercontent.com/xxih/obsidian-claude-sidebar/main/main.js
curl -LO https://raw.githubusercontent.com/xxih/obsidian-claude-sidebar/main/manifest.json
curl -LO https://raw.githubusercontent.com/xxih/obsidian-claude-sidebar/main/styles.css
```

Then restart Obsidian or disable/re-enable the plugin.

## Usage

https://github.com/user-attachments/assets/de98439a-8a1f-4a8a-9d02-44027d756462

- Click the bot icon in the left ribbon to open Claude
- Right-click the bot icon for YOLO mode, folder targeting, or resuming a conversation
- Right-click any folder for "Open Claude here" or "Open Claude here (YOLO)"
- Use Command Palette (`Cmd+P`) for all commands:
  - **Open Claude Code** / **New Claude Tab** / **Close Claude Tab**
  - **Toggle Focus: Editor ↔ Claude** - Quick switch between editor and Claude
  - **Run Claude from this folder** - Start Claude in the active file's directory
  - **Resume last conversation** - Pick up where you left off (`--continue`)
  - **Send File Path to Claude** / **Send Selection to Claude**
- Press `Shift+Enter` for multi-line input
- Set your own hotkeys in Settings → Hotkeys

## Platform Support

| Platform | Status |
|----------|--------|
| macOS | ✅ Supported |
| Linux | ✅ Supported |
| Windows | ⚠️ Experimental |

Want to use it on iOS or Android? See [Claude Anywhere](https://github.com/derek-larson14/claude-anywhere).

### Windows Setup (Experimental)

Windows requires additional dependencies:

1. Install Python 3 from [python.org](https://python.org)
2. Install pywinpty:
```bash
pip install pywinpty
```

3. Install the plugin (run from your vault folder in PowerShell):
```powershell
$u="https://github.com/xxih/obsidian-claude-sidebar/archive/main.zip"; Invoke-WebRequest $u -OutFile s.zip; Expand-Archive s.zip .obsidian\plugins -Force; Move-Item ".obsidian\plugins\obsidian-claude-sidebar-main" ".obsidian\plugins\claude-sidebar-xxih" -Force; Remove-Item s.zip
```

4. Then in Obsidian: Settings → Community Plugins → Refresh → Enable "Claude Sidebar"

**Note:** Windows support is experimental. Performance may be slower than macOS/Linux due to ConPTY overhead.

## How It Works

- [xterm.js](https://xtermjs.org/) for terminal emulation, with [`@xterm/addon-webgl`](https://www.npmjs.com/package/@xterm/addon-webgl) for GPU rendering
- Python's built-in `pty` module for pseudo-terminal support (macOS/Linux)
- [pywinpty](https://github.com/andfoy/pywinpty) for Windows PTY support
- Claude Code `Stop` hooks + `obsidian://` URI scheme for task-complete notifications
- `TERM_PROGRAM=iTerm.app` spoofing so agent CLIs emit OSC 9 notifications natively

## Development

The PTY scripts (`terminal_pty.py` for Unix, `terminal_win.py` for Windows) are embedded as base64 in `main.js` for Obsidian plugin directory compatibility. To rebuild after modifying:

```bash
./build.sh
```

## Contributing

Issues and PRs for this fork welcome at [github.com/xxih/obsidian-claude-sidebar](https://github.com/xxih/obsidian-claude-sidebar).

For the upstream plugin see [github.com/derek-larson14/obsidian-claude-sidebar](https://github.com/derek-larson14/obsidian-claude-sidebar).

## License

MIT
