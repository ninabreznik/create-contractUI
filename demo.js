var smartcontractapp = require('./')
var metadata = require('./metadata.json')

var opts = {
  metadata: metadata[0]
}

document.body.appendChild(smartcontractapp(opts, async (error, fns) => { 

}))
