// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "a2b_link",
    "name": "A2B Link",
    "description": "Provides quick access to A2B",
    "release_notes_url": "releases/tag/v0.5.0",
    "icon_path": "assets/icon.svg",
    "version": "0.5.0+296f916",
    "min_server_version": "5.2.0",
    "server": {
        "executables": {
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    }
}
`);

export default manifest;
