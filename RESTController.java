package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Task;
import com.example.demo.impl.TaskDaoImpl;



@RestController
public class RESTController {
	@Autowired
	Task tk;
	
	@Autowired
	TaskDaoImpl d1;

	@RequestMapping(value = "/tasks", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTask() {
		return d1.getAllTasks();
	}
	
	@RequestMapping(value="/taskid/{taskid}/priority/{priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask(@PathVariable("taskid") int task_id, @PathVariable("priority") String priority, Model model) {
		model.addAttribute("taskid", task_id);
		model.addAttribute("priority", priority);
		int row = d1.setpriority(task_id, priority);
		return d1.getAllTasks();
	}
	@RequestMapping(value="/taskid/{taskid}/notes/{notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask1(@PathVariable("taskid") int taskid, @PathVariable("notes") String notes, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("notes",notes);
		int row = d1.setNotes(taskid, notes);
		return d1.getAllTasks();
	}
	@RequestMapping(value="/taskid/{taskid}/bookmarked/{bookmarked}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTaskl(@PathVariable("task_id") int taskid, @PathVariable("bookmarked") boolean bookmarked, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("bookmarked", bookmarked);
		int row = d1.setBookmarked(taskid, bookmarked);
		return d1.getAllTasks();
	}
	@RequestMapping(value="/taskid/{taskid}/ownerid/{ownerid}",method = RequestMethod.GET,produces = {"application/json","application/xml"})	
	public List<Task> printTask3(@PathVariable("taskid") int taskid, @PathVariable("ownerid") int ownerid, Model model) {
	model.addAttribute("taskid", taskid);
	model.addAttribute("ownerid", ownerid);
	int row = d1.setuser(taskid, ownerid);
	return d1.getAllTasks();
	}
	@RequestMapping(value="/taskid/{taskid}",method = RequestMethod.GET,produces = {"application/json","application/xml"})	
	public List<Task> printTask3(@PathVariable("taskid") int taskid,Model model) {
	model.addAttribute("taskid", taskid);
	List<Task> row = d1.searchtask(taskid);
	return d1.searchtask(taskid);
	}

	@RequestMapping(value="/status/{status}",method = RequestMethod.GET,produces = {"application/json","application/xml"})	
	public List<Task> printTask4(@PathVariable("status") String status,Model model) {
	model.addAttribute("status", status);

	return d1.trackstatus(status);
	}

	@PostMapping(value= "/addtask", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task task) throws Exception
	{
	   d1.addTask(task);
	   return task;
	}
	
}
