
let getSampleDocument;

(function() {
  getSampleDocument = function(name) {
    if(sampleDocuments[name]) {
      return {
        time: 1597932175259,
        blocks: sampleDocuments[name],
        version: "2.18.0",
      }
    }
  }
  
  let sampleDocuments = {
    empty: [],
    sample1: [
      {
        "type": "header",
        "data": {
          "text": "Título de nivel 1",
          "level": 1
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Párrafo común."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Otro párrafo. Éste contiene un <a href=\"http:www.google.com\">link</a>&nbsp;a google."
        }
      },
      {
        "type": "header",
        "data": {
          "text": "Título de nivel 2",
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Más párrafos comunes."
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "A continuación una lista no-ordenada:"
        }
      },
      {
        "type": "list",
        "data": {
          "style": "unordered",
          "items": [
            "Primer ítem",
            "Segundo ítem <b>destacado</b>",
            "Tercer ítem <i>con cursiva</i>"
          ]
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "Ahora una lista ordenada:"
        }
      },
      {
        "type": "list",
        "data": {
          "style": "ordered",
          "items": [
            "Ítem número uno",
            "Ítem número dos con <a href=\"http:www.google.com\">otro link</a>"
          ]
        }
      }
    ],
  };
})();

