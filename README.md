# Please Log Out

A gnome-shell extension to show logout button on the system menu, hiding action buttons for settings, lockscreen, poweroff/suspend.

## Installation on Arch Linux

Type

```
makepkg
```

to generate the package.

Install it with `pacman -U`.

## Notes

* This extension does not entirely block users from shutting down the computer. For that, adding some rules to the [polkit](https://www.freedesktop.org/wiki/Software/polkit/) is the appropriate way to go.
* For this extension to be enabled by default, you should [modify system-wide dconf profiles](https://wiki.gnome.org/Projects/dconf/SystemAdministrators).
