(function ($, undefined) {
  "use strict";
  $.jstree.defaults.customcontextmenu = $.noop;
  $.jstree.plugins.customcontextmenu = function (options, parent) {
    this.bind = function () {
      parent.bind.call(this);
      this.element
        .on("click.jstree", ".jstree-custom-context-menu", $.proxy(function (e) {
          e.preventDefault();

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
        var tmp = '<div class="jstree-custom-context-menu"><span>...</span></div>';
        $(obj).append($(tmp));
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
          var node = this.get_node(e.target);
          const { isOpenDetails = false } = node.state;

          e.stopImmediatePropagation();

          if (isOpenDetails) {
            e.preventDefault();
            return;
          }

          this.settings.details.confirm_fn.bind(this, node);
          node.state = {
            ...node.state,
            isOpenDetails: true,
          };
          this._append_details(node)
        }, this));
    };

    this._append_details = function (node, nodeDOM) {

      if (!nodeDOM) {
        nodeDOM = this.get_node(node, true);
      }

      $(nodeDOM).find('.jstree-anchor').after('' +
        '<div class="jstree-details-container">' +
          '<div class="jstree-details-input">' +
            '<span class="jstree-details-input-label">Details</span>' +
            '<textarea class="jstree-details-input-text"></textarea>' +
          '</div>' +
          '<div class="jstree-details-actions">' +
            '<button class="jstree-details-confirm"><i class="fa fa-check" aria-hidden="true"></i></button>' +
            '<button class="jstree-details-close"><i class="fa fa-times" aria-hidden="true"></i></button>' +
          '</div>'+
        '</div>'
      );
      this._addDetailsListeners(node, nodeDOM);

      return nodeDOM;
    };

    this._addDetailsListeners = function (node, nodeDOM) {
      const selectorId = `#${node.id}`;

      $('#jstree2').on('click.foo', `${selectorId} .jstree-details-close`, () => this._removeDetails(node));
      $('#jstree2').on('click.foo', `${selectorId} .jstree-details-confirm`, () => {
        var insertData = $(nodeDOM).find('.jstree-details-input-text').val();
        this.settings.details.confirm_fn(node, insertData)
      });
      $('.jstree-details-input-text').on('keyup', (e) => {
        e.stopPropagation();
      });
    };

    this._removeDetails = function (node) {
      const nodeDom  = this.get_node(node, true);
      $(nodeDom).find('.jstree-details-container').remove();
      $(nodeDom).find('.jstree-details-input-text').off('keyup');

      $(nodeDom).off('click.foo');
      node.state = {
        ...node.state,
        isOpenDetails: false,
      }
    };

    this.teardown = function () {
      if(this.settings.details) {
        this.element.find(".jstree-details-container").remove();
      }
      parent.teardown.call(this);
    };

    this.redraw_node = function(nodeDom, deep, callback, force_draw) {
      nodeDom = parent.redraw_node.call(this, nodeDom, deep, callback, force_draw);

      const node = this.get_node(nodeDom);
      const { isOpenDetails } = node.state;

      // TODO fix issue with excess details
      if(nodeDom) {
        $(nodeDom).append($('<i class="jstree-details fa fa-info-circle"></i>'));
        if(isOpenDetails) {
          nodeDom = this._append_details(node, nodeDom);
        }
      }

      return nodeDom;
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
          $(obj).append("<span style='left:-" + (level * this.settings.numbering.liMarginLeft)  + "px; top: 30px;' class='"+className+"'>"+ org +"</span>");
        }
      }

      return obj;
    };
  };
})(jQuery);
