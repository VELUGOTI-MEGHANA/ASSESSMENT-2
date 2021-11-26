package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.impl.TaskDaoImpl;

public class MyController {
	@Autowired
	TaskDaoImpl d1;
	
	@Autowired
	Task task1;
	@RequestMapping("/created")
	public String createTask(@RequestParam("taskid") int taskid,@RequestParam("ownerid") int ownerid, 
			                 @RequestParam("creatorid") int creatorid, @RequestParam("name") String name, 
			                 @RequestParam("desc") String desc, @RequestParam("status") String status, 
			                 @RequestParam("priority") String priority, @RequestParam("notes") String notes, 
			                 @RequestParam("isbookmarked") boolean bookmarked, @RequestParam("createdon") String createdon, 
			                 @RequestParam("changedon") String changedon, Model model) {
		
		model.addAttribute("taskid", taskid);
		model.addAttribute("taskname", name);
		
		model.addAttribute("desc", desc);
		model.addAttribute("status", status);
		model.addAttribute("priority", priority);
		model.addAttribute("notes", notes);
		model.addAttribute("isbookmarked", bookmarked);
		model.addAttribute("creatorid", creatorid);
		model.addAttribute("ownerid", ownerid);
		model.addAttribute("createdon", createdon);
		model.addAttribute("changedon", changedon);
		task1.setTaskId(taskid);
		task1.setTaskName(name);
		task1.setDescription(desc);
		task1.setStatus(status);
		task1.setPriority(priority);
		task1.setNotes(notes);
		task1.setBookmark(bookmarked);
		task1.setOwnerId(ownerid);
		task1.setCreatorId(creatorid);
		task1.setCreatedOn(createdon);
		task1.setStatusChangedOn(changedon);
		int row = d1.save(task1);
		if(row == 1)
		   return "Task is created succesfully";
		else
			return "Task is not created";
		}
	

}

