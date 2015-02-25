{"filter":false,"title":"factory.js","tooltip":"/js/factory.js","undoManager":{"mark":30,"position":30,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":160,"column":2},"action":"insert","lines":["myApp.factory('ItemsService', function($firebase) {","    var ref = new Firebase(\"https://appcookbook.firebaseio.com/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ---- Breakfast ----","// -------------------","myApp.factory('ItemsServiceBS', function($firebase) {","    var ref = new Firebase(\"https://appcookbook.firebaseio.com/breakfast/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ------ Lunch ------","// -------------------","myApp.factory('ItemsServiceLU', function($firebase) {","    var ref = new Firebase(\"https://appcookbook.firebaseio.com/lunch/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ----- Dessert -----","// -------------------","myApp.factory('ItemsServiceDS', function($firebase) {","    var ref = new Firebase(\"https://appcookbook.firebaseio.com/dessert/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ---- Beverage -----","// -------------------","myApp.factory('ItemsServiceBV', function($firebase) {","    var ref = new Firebase(\"https://appcookbook.firebaseio.com/beverage/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":28},"end":{"row":1,"column":63},"action":"remove","lines":["https://appcookbook.firebaseio.com/"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":64},"action":"insert","lines":["https://application1.firebaseio.com/"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":62},"action":"remove","lines":["https://appcookbook.firebaseio.com"]},{"start":{"row":34,"column":28},"end":{"row":34,"column":64},"action":"insert","lines":["https://application1.firebaseio.com/"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":64},"end":{"row":34,"column":65},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":64},"end":{"row":34,"column":65},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":63},"end":{"row":34,"column":64},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":28},"end":{"row":67,"column":62},"action":"remove","lines":["https://appcookbook.firebaseio.com"]},{"start":{"row":67,"column":28},"end":{"row":67,"column":64},"action":"insert","lines":["https://application1.firebaseio.com/"]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":63},"end":{"row":67,"column":64},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":100,"column":28},"end":{"row":100,"column":63},"action":"remove","lines":["https://appcookbook.firebaseio.com/"]},{"start":{"row":100,"column":28},"end":{"row":100,"column":64},"action":"insert","lines":["https://application1.firebaseio.com/"]}]}],[{"group":"doc","deltas":[{"start":{"row":133,"column":28},"end":{"row":133,"column":63},"action":"remove","lines":["https://appcookbook.firebaseio.com/"]},{"start":{"row":133,"column":28},"end":{"row":133,"column":64},"action":"insert","lines":["https://application1.firebaseio.com/"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":64},"end":{"row":34,"column":73},"action":"remove","lines":["breakfast"]},{"start":{"row":34,"column":64},"end":{"row":34,"column":65},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":65},"end":{"row":34,"column":66},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":66},"end":{"row":34,"column":67},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":67},"end":{"row":34,"column":68},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":68},"end":{"row":34,"column":69},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":69},"end":{"row":34,"column":70},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":27},"end":{"row":33,"column":29},"action":"remove","lines":["BS"]},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":32},"end":{"row":33,"column":33},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":32,"column":22},"action":"remove","lines":["// -------------------","// ---- Breakfast ----","// -------------------"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":0},"end":{"row":158,"column":2},"action":"remove","lines":["","// -------------------","// ------ Lunch ------","// -------------------","myApp.factory('ItemsServiceLU', function($firebase) {","    var ref = new Firebase(\"https://application1.firebaseio.com/lunch/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ----- Dessert -----","// -------------------","myApp.factory('ItemsServiceDS', function($firebase) {","    var ref = new Firebase(\"https://application1.firebaseio.com/dessert/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})","","// -------------------","// ---- Beverage -----","// -------------------","myApp.factory('ItemsServiceBV', function($firebase) {","    var ref = new Firebase(\"https://application1.firebaseio.com/beverage/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})"]}]}],[{"group":"doc","deltas":[{"start":{"row":59,"column":2},"end":{"row":60,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":0},"end":{"row":61,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":0},"end":{"row":89,"column":2},"action":"insert","lines":["myApp.factory('ItemsServiceToRead', function($firebase) {","    var ref = new Firebase(\"https://application1.firebaseio.com/toread/\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    var getItems = function() {","        return bookmarks;","    };","    ","    ","    var addItem = function(item) {","        bookmarks.$add(item);","    };","    ","    var removeItem = function(id) {","        bookmarks.$remove(id);","    };","    ","    var updateItem = function(id) {","        bookmarks.$save(id);","    }","    ","    return {","        getItems: getItems,","        addItem: addItem,","        removeItem: removeItem,","        upadeItem: updateItem","    }","})"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":28},"end":{"row":61,"column":29},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":61,"column":27},"end":{"row":61,"column":28},"action":"remove","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":65},"end":{"row":62,"column":66},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":62,"column":64},"end":{"row":62,"column":65},"action":"remove","lines":["t"]}]}]]},"ace":{"folds":[],"scrolltop":845,"scrollleft":0,"selection":{"start":{"row":62,"column":64},"end":{"row":62,"column":64},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424893702547,"hash":"8596e4494c7a6028ec549bdd006c70285c9ba2b8"}