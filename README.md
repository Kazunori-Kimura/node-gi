node-gi
===============

`.gitignore`ファイルをコマンドラインで生成します。
[www.gitignore.io](http://www.gitignore.io/) のAPIをラッピングしています。

Create .gitignore files for your project.


Install
----------

`npm install -g node-gi`


Usage
----------

Usage:
    gi [options] keyword...

Options:
    -h, --help     output usage information
    -V, --version  output the version number
    -l, --list     Show gitignore.io operating system, programming language, or IDE keyword types


Examples:

- Show ouput on the command line

```sh
$ gi linux,java
```

    # Created by http://www.gitignore.io

    ### Linux ###
    .*
    !.gitignore
    *~

    ### Java ###
    *.class
    # Package Files #
    *.jar
    *.war
    *.ear

- Append Operating System and IDE settings to global .gitignore

```sh
$ gi linux,eclipse >> ~/.gitignore
```

- Append programming languages to your project .gitignore file

```sh
$ gi java,python >> .gitignore
```

