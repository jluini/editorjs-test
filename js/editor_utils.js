function startEditor(editorId, options) {
  let config = {
    holder: editorId,
    autofocus: true,
    ...options
  };
  
  return new EditorJS(config);
}

function getEditorData(callback) {
  return editor.save().then((outputData) => {
    callback(outputData);
  }).catch((error) => {
    callback({error});
  });
}

function parseEditorData(data) {
  return {
    html: blocksToHtml(data.blocks)
  };
}

/******************************************/

function blocksToHtml(blocks) {
  return blocks.map(blockToHtml).join("\n");
}

function blockToHtml(block) {
  if(blockRenderers[block.type]) {
    return blockRenderers[block.type](block.data);
  } else {
    console.warn(`Unknown block type '${block.type}'`);
    return "";
  }
}

blockRenderers = {
  paragraph(data) {
    return `<p>${data.text}</p>`;
  },
  header(data) {
    return `<h${data.level}>${data.text}</h${data.level}>`;
  },
  list(data) {
    let tag = getListTag(data.style);
    if(!tag) {
      console.warn(`Unknown list style '${data.style}'`);
      return "";
    }
    
    return `<${tag}>${getListContent(data.items)}</${tag}>`
  }
};

function getListTag(style) {
  switch(style) {
    case "ordered":
      return "ol";
    case "unordered":
      return "ul";
    default:
      return false;
  }
}

function getListContent(items) {
  return items.map((item) => {
    return `<li>${item}</li>`;
  }).join("\n");
}
