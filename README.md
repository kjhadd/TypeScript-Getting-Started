# TypeScript-Getting-Started

This is the official repository for my Pluralsight course titled [*TypeScript: Getting Started*](https://app.pluralsight.com/library/courses/typescript-getting-started/table-of-contents). 
The *main* branch contains code as it 
exists at the start of the course. There are separate branches named after the modules in the course that contain the code as it 
exists at the end of that module.

I will update this repo below with any problems or small issues reported between updates to the actual course.

Thanks for watching and good luck on your TypeScript projects!

## Workarounds
Some project dependencies are quite old. To get this hunk-of-junk working need to:

```shell
export NODE_OPTIONS=--openssl-legacy-provider
```

Undo by:
```shell
unset NODE_OPTIONS
```