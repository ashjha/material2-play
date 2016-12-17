import { Component, OnInit } from '@angular/core';
import { CoreService} from '../shared/core.service'
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
modules;
  constructor(
    private core : CoreService
  ) { }

  ngOnInit() {
    this.core.onShow("Hey !","Welcome to role management Welcome to role managementWelcome to role management Welcome to role management",1)
    this.modules=[
      {name:'Grade'},
      {name:'Department'},
      {name:'Designation'},
      {name:'Setting'},
      ];
  }

  tasks = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        { name: 'Cook Dinner', completed: false },
        { name: 'Read the Material Design Spec', completed: false },
        { name: 'Upgrade Application to Angular2', completed: false }
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        { name: 'Organic Eggs', completed: false },
        { name: 'Protein Powder', completed: false },
        { name: 'Almond Meal Flour', completed: false }
      ]
    }
  ];

  // allComplete(task ): boolean {
  //   let subtasks = task.subtasks;
  //   return subtasks.every(t => t.completed) ? true
  //       : subtasks.every(t => !t.completed) ? false
  //        .completed;
  // }

  // someComplete(tasks ): boolean {
  //   const numComplete = tasks.filter(t => t.completed).length;
  //   return numComplete > 0 && numComplete < tasks.length;
  // }

  // setAllCompleted(tasks , completed: boolean) {
  //   tasks.forEach(t => t.completed = completed);
  // }

}
