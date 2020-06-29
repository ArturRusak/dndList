const actions = {
  text: 'Actions',
  children: [
    {
      text: 'Fetch data'
    },
    {
      text: 'Downdload data'
    }
  ]
};

const flow = {
  id: '2',
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
    'data': [actions, flow]
  },
  'dnd': {
    'always_copy': true
  },
  "plugins": ["dnd", "unique", ]
});

$('#jstree2').jstree({
  'core': {
    "check_callback": function (...props) {
      if (props === "clone_node") {
        console.log(111)
      }
      if (props === "move_node") {
        console.log(111)
      }
    },
    'data': []
  },
  "unique": {
    "duplicate": function () {
      console.log('DUPLIcate')
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
  "plugins": ["dnd", "wholerow", "contextmenu", "unique", "customcontextmenu"]
});


function removeTree(id) {
  const instanceTree = $(id).jstree(true);
  const jsonNodes = instanceTree.get_json('#', {flat: true});

  $.each(jsonNodes, (index, val) => {
    const nodeID = $(val).attr('id');
    instanceTree.delete_node(nodeID);
  })
}

$(document).on('click', () => {
  $('#jstree2').jstree(true).get_json('#', {flat: true});
});

