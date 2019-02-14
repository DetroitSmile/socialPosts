"use strict";

const socialposts = {
    templateUrl: "app/socialposts/socialposts.html",
    controller: [function () {
        const vm = this;
        vm.postLibrary = [
            {title: "Somebody", thought: "once told me"},
            {title: "The world", thought: "is gonna roll me"},
            {title: "I ain't", thought: "the sharpest tool in the shed"}
        ];
        vm.formToggle = false;
        vm.addPost = function(newPost) {
            vm.postLibrary.push({...newPost});
            vm.formToggle = false;
            console.log(newPost);
        }
        vm.removePost = function(index) {
            vm.postLibrary.splice(index, 1)
        }
        vm.showForm = function() {
        vm.formToggle = true;
        }
    }]
}

angular 
    .module("SocialApp")
    .component("socialposts", socialposts)