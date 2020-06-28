(function ($, undefined) {
  "use strict";
  var img = document.createElement('IMG');
  img.src = "https://img.icons8.com/fluent/48/000000/question-mark.png";
  img.className = "jstree-questionmark";
  img.style.mxWidth = '100%';
  img.style.maxHeight = '20px';
  img.style.position = 'absolute';
  img.style.right = '0';
  img.style.top = '0';
  img.style.zIndex = '9';
  img.style.cursor = 'pointer';

  $.jstree.defaults.questionmark = $.noop;
  $.jstree.plugins.questionmark = function (options, parent) {
    this.bind = function () {
      console.log(parent)
      parent.bind.call(this);
      this.element
        .on("click.jstree", ".jstree-questionmark", $.proxy(function (e) {
          var node =  this.get_node(e.target)
          const position = $(e.target).offset();
          e.stopImmediatePropagation();
          this.settings.questionmark.call(this, node);
          this.activate_node(node, e);
          this.show_contextmenu(node, position.left - 110, position.top + 20);
          console.log(position)
          console.log($(e.target).offset())
        }, this));
    };
    this.teardown = function () {
      if(this.settings.questionmark) {
        this.element.find(".jstree-questionmark").remove();
      }
      parent.teardown.call(this);
    };


    this.redraw_node = function(obj, deep, callback, force_draw) {
      obj = parent.redraw_node.call(this, obj, deep, callback, force_draw);
      if(obj) {
        var tmp = img.cloneNode(true);
        obj.append(tmp);
      }
      return obj;
    };
  };
})(jQuery);
