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

console.log(JSON.stringify(actions))

$('#jstree').jstree({
  'core': {
    'data': [actions, flow]
  },
  'dnd': {
    'always_copy': true
  },
  "plugins" : [ "dnd",  "unique", ]
});

$('#jstree2').jstree({
  'core': {
    "check_callback" : function (...props) {
      console.log(props)
      if(props === "move_node") {
        console.log(111)
      }
    },
    'data': [actions, flow]
  },
  "unique": {
    "duplicate": function () {
      console.log('DUPLIcate')
    }
  },
  "plugins" : [ "dnd", "wholerow", "unique", ]
});