(function ($, undefined) {
  "use strict";
  var img = document.createElement('IMG');
  img.src = "https://img.icons8.com/fluent/48/000000/question-mark.png";
  img.className = "jstree-custom-context-menu";
  img.style.mxWidth = '100%';
  img.style.maxHeight = '20px';
  img.style.position = 'absolute';
  img.style.right = '0';
  img.style.top = '0';
  img.style.zIndex = '9';
  img.style.cursor = 'pointer';

  $.jstree.defaults.customcontextmenu = $.noop;
  $.jstree.plugins.customcontextmenu = function (options, parent) {
    this.bind = function () {
      parent.bind.call(this);
      this.element
        .on("click.jstree", ".jstree-custom-context-menu", $.proxy(function (e) {
          e.stopImmediatePropagation();

          var node = this.get_node(e.target);
          var position = $(e.target).offset();
          this.settings.customcontextmenu.call(this, node);
          this.activate_node(node, e);
          this.show_contextmenu(node, position.left - 110, position.top + 20);
        }, this));
    };
    this.teardown = function () {
      if(this.settings.customcontextmenu) {
        this.element.find(".jstree-custom-context-menu").remove();
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

(function ($, undefined) {
  "use strict";
  $.jstree.defaults.details = {
    confirm_fn: null,
  };
  $.jstree.plugins.details = function (options, parent) {
    this.bind = function () {
      parent.bind.call(this);
      this.element
        .on("click.jstree", ".jstree-details", $.proxy(function (e) {
          e.stopImmediatePropagation();

          var node = this.get_node(e.target);
          this.settings.details.confirm_fn.bind(this, node);
          this.append_detais(node)
        }, this));
    };
    this.append_detais = function (node) {
      this.removeDetails();

      var node = this.get_node(node, true);
      var nodeId = $(node).attr('id');


      $('#jstree2').on('click.foo', '#' + nodeId + ' .jstree-details-close', this.removeDetails);
      $('#jstree2').on('click.foo', '#' + nodeId + ' .jstree-details-confirm', () => {
        var data = $(node).find('.jstree-details-text').val();
        this.settings.details.confirm_fn(node, data, () => setTimeout(() => this.removeDetails(), 500))
      });

      $('#' + nodeId + '_anchor').after('' +
        '<div class="jstree-details-actions">' +
        '<textarea class="jstree-details-text"></textarea>' +
        '<button class="jstree-details-confirm">ok</button>' +
        '<button class="jstree-details-close">close</button>' +
        '</div>'
      );
    };
    // Todo make dynamic
    this.removeDetails = function () {
      $('#jstree2').find('.jstree-details-actions').remove();
      $('#jstree2').off('click.foo');
    };

    this.teardown = function () {
      if(this.settings.details) {
        this.element.find(".jstree-details").remove();
      }
      parent.teardown.call(this);
    };


    this.redraw_node = function(obj, deep, callback, force_draw) {
      obj = parent.redraw_node.call(this, obj, deep, callback, force_draw);
      if(obj) {
        $(obj).append($('<i class="jstree-details fa fa-info-circle"></i>'));
      }
      return obj;
    };
  };
})(jQuery);

// auto numbering
(function ($, undefined) {
  "use strict";
  var className = 'jstree-numbering';


  $.jstree.defaults.numbering = {
    //marin of node li
    liMarginLeft: 24
  };
  $.jstree.plugins.numbering = function (options, parent) {
    this.teardown = function () {
      if(this.settings.questionmark) {
        this.element.find(".jstree-numbering").remove();
      }
      parent.teardown.call(this);
    };

    this.get_number = function (obj) {
      obj = this.get_node(obj);
      var idList = this.get_json("#", {flat:true}).map(({id}) => id);

      return $.inArray(obj.id, idList) + 1;
    };

    this.redraw_node = function (obj, deep, callback, force_draw) {
      var tmp = null;
      var org = this.get_number(obj);

      obj = parent.redraw_node.call(this, obj, deep, callback, force_draw);
      if(obj) {
        for(var i = 0; i < obj.childNodes.length; i++) {
          if(obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
            tmp = obj.childNodes[i];
            break;
          }
        }
        if(tmp) {
          const level = Number($(obj).attr('aria-level')) - 1;
          $(obj).append("<span style='left:-" + (level * this.settings.numbering.liMarginLeft)  + "px;' class='"+className+"'>"+ org +"</span>");
        }
      }

      return obj;
    };
  };
})(jQuery);

(function ($, jstree, undefined) {
  "use strict";

  if($.jstree.plugins.node_customize) { return; }

  /**
   * the settings object.
   * key is the attribute name to select the customizer function from switch.
   * switch is a key => function(el, node) map.
   * default: function(el, node) will be called if the type could not be mapped
   * @name $.jstree.defaults.node_customize
   * @plugin node_customize
   */
  $.jstree.defaults.node_customize = {
    "key": "type",
    "switch": {},
    "default": null
  };

  $.jstree.plugins.node_customize = function (options, parent) {
    this.redraw_node = function (obj, deep, callback, force_draw) {
      var el = parent.redraw_node.apply(this, arguments);

      if (el) {

        var node = this.get_node(obj);
        var config = this.settings.node_customize;
        var key = config.key;

        var type =  (node && node.original && node.original[key]);
        var customizer = (type && config.switch[type]) || config.default;

        if(customizer) {
          customizer(el, node);
        }
      }
      return el;
    };
  }
})(jQuery);
