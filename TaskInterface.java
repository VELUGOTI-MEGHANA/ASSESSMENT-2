package com.example.demo;

import java.util.List;

public interface TaskInterface {
	public int save(Object object);
	public List<Task> getAllTasks();
	public int setpriority(int taskid, String Priority);
	int setBookmarked(int taskid, boolean bookmarked);
	public int setNotes(int taskid,String tasknotes);
	public int setuser(int taskid, int ownerid);
	public List<Task> searchtask(int taskid);
    public List<Task> trackstatus(String status);
    public int addTask(Task task);
	
}
