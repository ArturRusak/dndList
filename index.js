const actions = {
  text: 'Actions',
  data: {
    test: '11111'
  },
  type: 'tree',
  children: [
    {
      text: 'Fetch data',
      type: 'mytype',
      data: {
        test: 'mytype'
      }
    },
    {
      text: 'Downdload data',
      type: 'mytype',
    }
  ]
};

const flow = {
  text: 'Flow',
  children: [
    {
      text: 'Fetch data'
    },
    {
      text: 'Downdload data'
    }
  ]
};


$('#jstree').jstree({
  'core': {
    'check_callback': function (op, node, par, pos, more) {
      var isParentNode = more && more.dnd && (op === 'move_node' || op === 'copy_node') && node.parent === '#';

      if(isParentNode){
        return false;
      }
    },
    'data': [actions, flow]
  },
  "types": {
    "tree" : {
      "icon" : 'https://www.jstree.com/tree-icon.png'
    },
    "mytype" : {
      "icon" : 'glyphicon glyphicon-leaf'
    }
  },
  'dnd': {
    'always_copy': true
  },
  "plugins": ["dnd", "unique", "changed", "types"]
});

$('#jstree2').jstree({
  'core': {
    'check_callback': function (op, node, par, pos, more) {
      var isParentNode = more && more.dnd && (op === 'move_node' || op === 'copy_node') && node.parent === '#';
      if(isParentNode){
        return false;
      }
    },
    'data': []
  },
  "numbering": {
    "liMarginLeft": 24
  },
  "details": {
    "confirm_fn": function (node, data, callback) {
      // TODO add callback

      console.log(node, data, 'Callbak Data')
      callback && callback();
    }
  },
  "types": {
    "tree" : {
      "icon" : 'https://www.jstree.com/tree-icon.png'
    },
    "mytype" : {
      "icon" : 'glyphicon glyphicon-leaf'
    }
  },
  "contextmenu":{
    "show_at_node": false,
    "items": function($node) {
      return {
        "copy" : {
          "separator_before"	: false,
          "icon"				: false,
          "separator_after"	: false,
          "label"				: "Copy",
          "action"			: function (data) {
            var inst = $.jstree.reference(data.reference),
              obj = inst.get_node(data.reference);
            if(inst.is_selected(obj)) {
              inst.copy(inst.get_top_selected());
            }
            else {
              inst.copy(obj);
            }
          }
        },
        "paste" : {
          "separator_before"	: false,
          "icon"				: false,
          "_disabled"			: function (data) {
            return !$.jstree.reference(data.reference).can_paste();
          },
          "separator_after"	: false,
          "label"				: "Paste",
          "action"			: function (data) {
            var inst = $.jstree.reference(data.reference),
              obj = inst.get_node(data.reference);
            inst.paste(obj);
          }
        },
        "remove" : {
          "separator_before"	: false,
          "icon"				: false,
          "separator_after"	: false,
          "_disabled"			: false, //(this.check("delete_node", data.reference, this.get_parent(data.reference), "")),
          "label"				: "Delete",
          "action"			: function (data) {
            var inst = $.jstree.reference(data.reference),
              obj = inst.get_node(data.reference);
            if(inst.is_selected(obj)) {
              inst.delete_node(inst.get_selected());
            }
            else {
              inst.delete_node(obj);
            }
          }
        },
      }
    }
  },
  "plugins": [
    "dnd",
    "types",
    "changed",
    "contextmenu",
    "customcontextmenu",
    "numbering",
    "node_customize",
    "details"
  ]
});


function removeTree(id) {
  const instanceTree = $(id).jstree(true);
  const jsonNodes = instanceTree.get_json('#', {flat: true});

  $.each(jsonNodes, (index, val) => {
    const nodeID = $(val).attr('id');
    instanceTree.delete_node(nodeID);
  })
}

$(document).on("click", () => {
 console.log($('#jstree2').jstree(true).get_json("#", {flat: true}));

});

$('#jstree2').on('changed.jstree', () => {
  $('#jstree2').jstree(true).redraw(true);
});

$('#jstree2').on('copy_node.jstree', (e, data) => {
  data.node.data = $.extend(true, {}, data.original.data);
  $('#jstree2').jstree(true).redraw(true);
});


