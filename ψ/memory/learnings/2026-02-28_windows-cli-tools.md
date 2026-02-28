# Path Resolution and Execution Contexts on Windows

- When working on Windows with `winget`, never assume newly installed CLI tools are immediately available on the `PATH`. Always be prepared to search the `AppData/Local/Microsoft/WinGet/Packages` tree for the raw `.exe` if a shell restart isn't possible.
- Wrap command line strings containing `&&` or `&` in `cmd.exe /c "..."` when executing from the `run_command` tool in Windows, as PowerShell parses the ampersand as a background operator rather than a chain operator.
