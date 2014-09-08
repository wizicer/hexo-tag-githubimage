## Introduction

This is a [hexo](https://github.com/tommy351/hexo)
tag plugin which allows you to embed an image stored on your Github repository with specific branch.

## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-tag-githubimage --save
```

And add this plugin in your ``_config.yml``.

```
plugins:
  - hexo-tag-githubimage
```

## Usage

```
{% ghimg imageId [class1,class2] [JSONImageAttibutes] %}
```

Example:

```
{% ghimg /wizicer/IcerSite/dev/source/images/icer.png center,custom_class1,custom_class2 {"width":450,"height":450,"alt":"Image Alt"} %}
```

Will output:

```
<img width="450" height="450" alt="Image Alt" src="https://raw.githubusercontent.com/wizicer/IcerSite/dev/source/images/icer.png" class="center custom_class1 custom_class2">
```

__IMPORTANT__

Classes must be comma-separated and without spaces. Same as JSONImageAttibutes.

