"use strict";

const postform = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        addpost: "&"

    },
    templateUrl: "app/postform/postform.html"

}



angular 
    .module("SocialApp")
    .component("postform", postform)