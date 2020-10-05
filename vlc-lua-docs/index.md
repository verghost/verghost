# VLC Lua Docs
These are docs intended to help with creating custom Lua scripts to extend VLC functionality.

#### **Disclaimers**
1. I might refer to "lists", "arrays" or "objects" a lot in these docs, but that is by habbit. In lua these are all just [tables](https://www.lua.org/pil/11.html). Bascially, this is NOT in any way a Lua tutorial.
2. All info in these docs is sourced from [This README file](http://www.videolan.org/developers/vlc/share/lua/README.txt), [VideoLAN Forums](https://forum.videolan.org/), [the Wiki](https://wiki.videolan.org/), [code from existing VLC addons](https://addons.videolan.org) and of course my own tinkering and looking at the source code.

## How to install custom Lua scripts
Lua scripts are installed in the /Lua folder of the VLC install directory under subdirectories according to their type
- Windows (all users): %ProgramFiles%\VideoLAN\VLC\lua\
- Windows (current user): %APPDATA%\VLC\lua\
- Linux (all users): /usr/lib/vlc/lua/
- Linux (current user): ~/.local/share/vlc/lua/
- Mac OS X (all users): /Applications/VLC.app/Contents/MacOS/share/lua/
- Mac OS X (current user): /Users/%your_name%/Library/Application Support/org.videolan.vlc/lua/

## Types of scripts
There are a few different types of lua scripts, each with their own purpose, functionality and install directory
- Interfaces (/lua/intf)
- Extensions  (/lua/extensions)
- Art fetchers (/lua/meta/art)
- Playlist parsers (/lua/playlist)
- Services Discovery (/lua/sd)

## The Global VLC Object
This object is accessible through Lua scripts as `vlc` and contains several "modules" that are accessed via their own symbols (ex. `vlc.config`). Some modules just contain a constructor or instance method for an object type, while others contain useful functions or data fields. These modules provide access to VLC data and functinoality as well as some helpful utilities.
Different modules are available in different types of Lua scripts.

## Modules (Alphabetical order)

| Name | Symbol(s) | Description | Availability |
|:---- |:------ |:----------- |:------------ |
| [Config](https://verghost.com/vlc-lua-docs/config) | `config` | Access and modify VLC configuration options | All types |
| [Dialog](https://verghost.com/vlc-lua-docs/dialog) | `dialog` | Interface to the DialogUI object | Unknown
| [Equalizer](https://verghost.com/vlc-lua-docs/equalizer) | `equalizer` | Access and modify equalizer settings and presets | Not in extension / Unkown |
| [i18n and l10n](https://verghost.com/vlc-lua-docs/iandl) | `gettext` | Alias for libvlc [gettext](https://en.wikipedia.org/wiki/Gettext) (_ function) | All types |
| [Errno](https://verghost.com/vlc-lua-docs/errno) | `errno` | Error values | Unknown |
| [HTTPd](https://verghost.com/vlc-lua-docs/httpd)  | `httpd` | Interface to the VLC HTTP Daemon constructor | Interface |
| [Input/Output](https://verghost.com/vlc-lua-docs/io)  | `io` | Input/Output (i.e. file read/write, directories, etc...) | Unknown |
| [Messages](https://verghost.com/vlc-lua-docs/msg)  | `msg` | Output to the Messages console (Tools->Messages) | Unknown |
| [Miscellaneous](https://verghost.com/vlc-lua-docs/misc)  | `misc` | Uncategroized functionality | Interface |
| [Network](https://verghost.com/vlc-lua-docs/net)  | `net` | Various network methods | Interface and Extension |
| [Objects](https://verghost.com/vlc-lua-docs/object)  | `object` | Provides access to various objects | Unknown |
| [OSD](https://verghost.com/vlc-lua-docs/osd)  | `osd` | On-screen display functionality (ex. Display OSD messages, modify channels) | Unknown |
| [Player](https://verghost.com/vlc-lua-docs/player)  | `player` | Interface to VLC player | Unknown |
| [Playlist](https://verghost.com/vlc-lua-docs/playlist)  | `playlist` | Access and modify playlists | Unknown |
| [Random](https://verghost.com/vlc-lua-docs/rand)  | `rand` | Get random numbers/bytes | Unknown |
| [Services discovery](https://verghost.com/vlc-lua-docs/sd)  | `sd` | Functions for service discovery scripts (i.e. add nodes, items) | Service Discovery |
| [Stream](https://verghost.com/vlc-lua-docs/stream)  | `stream`, `memory_stream`, `directory_stream` | Access to data streams and methods to read/modify them | Unknown |
| [Strings](https://verghost.com/vlc-lua-docs/strings)  | `strings` | String utils (ex. parse URI/URL, handle special chars) | Unknown |
| [Variables](https://verghost.com/vlc-lua-docs/var)  | `var` | Interface to VLC internal variables(?) | Unknown |
| [Video](https://verghost.com/vlc-lua-docs/video)  | `video` | Change video interface | Unknown |
| [VLM](https://verghost.com/vlc-lua-docs/vlm)  | `vlm` | VideoLAN Manager object instance method | Unknown |
| [Volume](https://verghost.com/vlc-lua-docs/volume)  | `volume` | Modify volume | Unknown |
| [Windows](https://verghost.com/vlc-lua-docs/win)  | `win` | Access to Windows console | Windows builds only |
| [XML](https://verghost.com/vlc-lua-docs/xml)  | `xml` | [XML](https://en.wikipedia.org/wiki/XML) reader | Unknown |

## Events
While a custom script is running, a number of different functions (which may or may not be defined in the custom script) are called by VLC. For those familiar with JavaScript in web browsers, these function calls can be thought of like [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events).
Like modules, events differ by the type of script.

## Luac
TODO
