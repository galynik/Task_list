angular.module('taskService', []).factory("myService", myService)

function myService() {
	var tasks = {
			user: "Petronchak Galyna",
		   /* canEdit: true,*/
			userTasks: [
				{
					name: "Learn JavaScript!"
					, done: false
            }
				, {
					name: "Learn Angular!"
					, done: false
            }
				, {
					name: "Go to sleep!"
					, done: false
            }
				, {
					name: "Drink coffe!"
					, done: false
            }
        ]
		}
		
	function addTask(taskName) {
		tasks.userTasks.push({
			name: taskName, 
			done: false
			
		})
		document.querySelector('.form-control').value = '';
	};

	function delTask($index) {
		tasks.userTasks.splice($index, 1);
	};
	/*function showEdit($index){
	   tasks.userTasks.canEdit=false;
       var count = $index; 
       var editValue = tasks.userTasks[count].name;
	};
	
	 function editTask ($index, value) {
	 var count = $index; 
	 tasks.userTasks.canEdit=true;
     tasks.userTasks[count].name = value;
	 document.querySelector('.col-lg-offset-8').value = '';
    };*/
	return {
		tasks: tasks
		, addTask: addTask
		, delTask: delTask
		, /*showEdit: showEdit,
		editTask: editTask*/
	};
};