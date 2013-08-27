var Util = require("../../util");

function list (options, callback) {
    var self = this;

    var url = Util.createUrl.apply(self, ["channels", options]);
    var reqOptions = {
        url: url,
    };

    self.Client.request(reqOptions, callback);
}

function insert (options, callback) {
    callback(null, {"error": "Not yet implemented"});
}

function deleteItem (options, callback) {
    callback(null, {"error": "Not yet implemented"});
}

module.exports = {
    list: list,
    insert: insert,
    delete: deleteItem
};
