# Configuration Module

# get()
Get the value of a VLC configuration option.
### Syntax
```lua
local option = vlc.config.get(name)
```
### Parameters
- `name` Name of the vlc config option

# set()
Se the value of a VLC config option.
### Syntax
```lua
vlc.config.set(name, value)
```
### Parameters
`name` Name of the vlc config option
`value` Value to set

# datadir()
Get the VLC data directory.
### Syntax
```lua
local dataDir = vlc.config.datadir()
```
### Parameters
None

# datadir_list()
Get the list of possible data directories in order of priority, appended by `name`.
### Syntax
```lua
local dirList = vlc.config.datadir_list(name)
```
### Parameters
`name`

# userdatadir()
Get the current user's VLC data directory.
### Syntax
```lua
local udataDir = vlc.config.userdatadir()
```
### Parameters
None

# homedir()
Get the current user's home directory.
### Syntax
```lua
local homeDir = vlc.config.homedir()
```
### Parameters
None

# configdir()
Get the current user's VLC config directory.
### Syntax
```lua
local configDir = vlc.config.configdir()
```
### Parameters
None

# cachedir()
Get the current user's VLC cache directory.
### Syntax
```lua
local cacheDir = vlc.config.cachedir()
```
### Parameters
None
