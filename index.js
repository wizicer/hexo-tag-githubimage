var githubResourceUrl = "https://raw.githubusercontent.com";

/**
 * Github image tag
 *
 * Syntax:
 *   {% ghimg /githubusername/repositoryname/branchname/path/to/image [class1,class2,classN] [JSONImageAttributes] %}
 */
hexo.extend.tag.register('ghimg', function(args){
    var imageId = args[0];
    var classes = args[1] || "";
    var imgAttr = args[2] || "{}";

    classes = classes.split(',');
    imgAttr = JSON.parse(imgAttr);

    imgAttr.src   = githubResourceUrl + imageId;
    imgAttr.class = classes.join(' ');

    return "<img src='" + imgAttr.src + "' class='" + imgAttr.class + "' />";
});
