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
