amis.define('docs/renderers/Each.md', function(require, exports, module, define) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"each\" href=\"#each\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Each</h2><p>基于现有变量循环输出渲染器</p>\n<ul>\n<li><code>type</code> 请设置 <code>each</code>。</li>\n<li><code>value</code> 格式为数组。</li>\n<li><code>items</code> 使用<code>value</code>中的数据，循环输出渲染器。</li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 360px\"><script type=\"text/schema\" height=\"360\" scope=\"body\">{\n    \"type\": \"each\",\n    \"value\": [\"A\", \"B\", \"C\"],\n    \"items\": {\n        \"type\": \"tpl\",\n        \"tpl\": \"<span class='label label-default'><%= data.item %></span> \"\n    }\n}\n</script></div>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Each.md\">/docs/renderers/Each.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Each",
          "fragment": "each",
          "fullPath": "#each",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
