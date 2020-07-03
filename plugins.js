(function ($, undefined) {
  "use strict";
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
        var tmp = '<div class="jstree-custom-context-menu"><span>...</span></div>';
        $(obj).find('.jstree-anchor').append($(tmp));
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
          var isOpenedDetails = $(e.target).hasClass('active');

          e.stopImmediatePropagation();
          if (isOpenedDetails) {
            e.preventDefault();
            return;
          }

          this.removeDetails();

          $(e.target).addClass('active');

          var node = this.get_node(e.target);
          this.settings.details.confirm_fn.bind(this, node);
          this.append_detais(node)
        }, this));
    };

    this.append_detais = function (node) {

      var node = this.get_node(node, true);
      var nodeId = $(node).attr('id');

      $('#' + nodeId + '_anchor').after('' +
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

      $('#jstree2').on('click.foo', '#' + nodeId + ' .jstree-details-close', this.removeDetails);
      $('#jstree2').on('click.foo', '#' + nodeId + ' .jstree-details-confirm', () => {
        var insertData = $(node).find('.jstree-details-input-text').val();
        this.settings.details.confirm_fn(node, insertData)
      });
      $('.jstree-details-input-text').on('keyup', (e) => {
        e.stopPropagation();
      });
    };
    // Todo make dynamic

    this.removeDetails = function () {
      $('#jstree2').find('.jstree-details-container').remove();
      $('#jstree2 .jstree-details').removeClass('active');
      $('#jstree2').off('click.foo');
      $('.jstree-details-input-text').off('keyup');
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
          $(obj).append("<span style='left:-" + (level * this.settings.numbering.liMarginLeft)  + "px; top: 30px;' class='"+className+"'>"+ org +"</span>");
        }
      }

      return obj;
    };
  };
})(jQuery);
