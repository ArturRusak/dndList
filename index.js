const flow_list = [
  {
    "text": "Item 1",
    "iconMark": "W",
    "filters": {
      "labels": ["CRM", "Paid"],
    },
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
        '<span class="target-list-title-label red-bg">Query</span>' +
        '<span class="target-list-title-title">Query</span>' +
        '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "flow",
    "data": {
      "data": "Item data"
    }
  },
  {
    "text": "Item 2",
    "iconMark": "W",
    "filters": {
      "labels": ["CRM", "Paid"],
    },
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label red-bg">Item 2</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "flow",
    "data": {
      "data": "Item data"
    }
  },
  {
    "text": "Item 3",
    "iconMark": "W",
    "filters": {
      "labels": ["CRM", "Paid"],
    },
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label red-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "flow",
    "data": {
      "data": "Item data"
    }
  },
];

const conditions_list = [
  {
    "text": "If",
    "iconMark": "If",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label salad-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "condition",
    "data": {
      "data": "conditions data"
    }
  },
  {
    "text": "For",
    "iconMark": "Fo",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "condition",
    "data": {
      "data": "conditions data"
    }
  },
];

const actions_list = [
  {
    "text": "Pull Data",
    "iconMark": "Q",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "New Query",
    "iconMark": "Q",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "API Data",
    "iconMark": "A",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "To Source",
    "iconMark": "S",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "To Target",
    "iconMark": "T",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "Map",
    "iconMark": "M",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "Join",
    "iconMark": "J",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
  {
    "text": "Replicate",
    "iconMark": "R",
    "targetNodeHTML": '' +
      '<div class="target-list-title-container" style="display: none;">' +
      '<span class="target-list-title-label blue-bg">Workflow</span>' +
      '<span class="target-list-title-title">Test</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '<span class="target-list-title-title">Query</span>' +
      '<span class="target-list-title-item">Product</span>' +
      '</div>',
    "type": "action",
    "data": {
      "data": "test data"
    }
  },
];

function getRandomClass(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function getColorByKey(key, obj) {
  return obj[key.toUpperCase()];
}

/**
 * Preparation of node,
 * setting of icon for (Actions, Conditions)
 */
function prepareNodes(dataList) {
  const bgClassList = ['red-bg', 'blue-bg', 'orange-bg', 'purple-bg', 'salad-bg', 'yellow-bg'];
  const filtersColorMap = {
    CRM: "#8BE268",
    PAID: "#67CAE2",
  };

  const updatedList = dataList.map((item) => {
    const randomClassName = getRandomClass(bgClassList);
    let { text, iconMark, className, type, filters, targetNodeHTML } = item;
    let filterLabelsHtml = null;
    className = className ? className : randomClassName;

    if (type !== "flow") {
      const firstChart = text.charAt(0).toUpperCase();

      iconMark = iconMark ? iconMark : firstChart;

      return {
        ...item,
        text: `
            <div class="title-wrapper">
              <div class="source-list-title-container">
                <span class='title-icon ${className}'>${iconMark}</span><div class='title'>${text}</div>
              </div>
              ${targetNodeHTML ? targetNodeHTML : ''}
            </div>
            `
      };
    }

    if (filters && filters.labels) {
      const filtersHTMLList = filters.labels.map((label) => {
        const color = getColorByKey(label, filtersColorMap);
        return `<span style="border: 1px solid ${color}; color: ${color}; border-radius: 3px;">${label}</span>`
      });
      filterLabelsHtml = filters.labels.length && `<div class="title-filters" >${filtersHTMLList.join('')}</div>`;
    }

    return {
      ...item,
      text: `
        <div class="title-wrapper">
            <div class="source-list-title-container">
               <span class='title-icon ${className}'>
                    ${iconMark}
                </span>
                <div class="title-container">
                    <span class="title">${text}</span>
                        ${filterLabelsHtml ? filterLabelsHtml : ''}
                </div>
            </div>
            ${targetNodeHTML ? targetNodeHTML : ''}
        </div>`
    };
  });

  return updatedList;
}


$('#actions_list').jstree({
  'core': {
    'theme': {
      "responsive": true,
    },
    'check_callback': function (oporation) {var isChangePosition = oporation === 'move_node' || oporation === 'copy_node';

      if(isChangePosition){
        return false;
      }
    },
    'data': prepareNodes(actions_list),
  },
  "themes": {
    "icons": false
  },
  "types": {
    "default": {
      "icon" : false
    },
    "action" : {
      "icon" : false,
    },
  },
  'dnd': {
    'always_copy': true
  },
  "plugins": ["dnd", "unique", "changed", "types"]
});

$('#condition_list').jstree({
  'core': {
    'theme': {
      "responsive": true,
    },
    'check_callback': function (oporation) {
      var isChangePosition = oporation === 'move_node' || oporation === 'copy_node';

      if(isChangePosition){
        return false;
      }
    },
    'data': prepareNodes(conditions_list),
  },
  "themes": {
    "icons": false
  },
  "types": {
    "default": {
      "icon" : false
    },
    "condition" : {
      "icon" : false
    },
  },
  'dnd': {
    'always_copy': true
  },
  "plugins": ["dnd", "unique", "changed", "types"]
});

$('#flows_list').jstree({
  'core': {
    'theme': {
      "responsive": true,
    },
    'check_callback': function (oporation) {
      var isChangePosition = oporation === 'move_node' || oporation === 'copy_node';

      if(isChangePosition){
        return false;
      }
    },
    'data': prepareNodes(flow_list),
  },
  "themes": {
    "icons": false
  },
  "types": {
    "default": {
      "icon" : false
    },
    "flow" : {
      "icon" : false
    },
  },
  'dnd': {
    'always_copy': true
  },
  "plugins": ["dnd", "unique", "changed", "types"]
});

$('#jstree2').jstree({
  'core': {
    'animation': 200,
    'theme': {
      "responsive": true,
    },
    'check_callback': true,
    'data': []
  },
  "numbering": {
    "liMarginLeft": 66
  },
  "themes": {
    "icons": false
  },
  "details": {
    "confirm_fn": function (node, data) {
      if (data && data.length) {
        alert(`iD -> ${node.id}; Message: ${data}`);
        setTimeout(() => $('#jstree2').jstree(true).removeDetails(node), 500)
      }
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

$(document).on("dnd_start.vakata", (data, element, helper) => {
  console.log(data, element.helper)
});

$('#jstree2').on('changed.jstree', () => {
  $('#jstree2').jstree(true).redraw(true);
});

$('#jstree2').on('copy_node.jstree', (e, data) => {
  data.node.data = $.extend(true, {}, data.original.data);
  $('#jstree2').jstree(true).redraw(true);
});

//open close by click on item
$('#jstree2').on('select_node.jstree', function (e, data) {
  const { node } = data;
  const isClickByLink = $(data.event.currentTarget).hasClass('jstree-anchor');

  if (!node.state.opened && node.children.length && isClickByLink) {
    data.instance.open_node(node, () => {}, 500);
    return;
  } else if (isClickByLink) {
    data.instance.close_node(node, true);
  }
});


