angular.module('Controllers',["taskService"])
    .controller('mainCtrl', mainCtrl)
    mainCtrl.$inject = ["myService"];

function mainCtrl(myService){
    
    this.userTasks = myService.tasks.userTasks;
    this.userName = myService.tasks.user;
    this.addTask = myService.addTask;
	this.delTask = myService.delTask;
	/*this.editTask = myService.editTask;
	this.showEdit = myService.showEdit;*/
	
    this.canEdit= true;
    
    this.showEdit = function ($index) {
        this.canEdit = false;
        this.count = $index; 
        this.editValue = this.userTasks[this.count].name
     
    };
	
    this.editTask = function(value) {
        this.canEdit = true;
        this.userTasks[this.count].name = value;
		document.querySelector('.col-lg-offset-8').value = '';
  
    };
};