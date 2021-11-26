package com.example.demo.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.Task;
import com.example.demo.TaskInterface;
@Component
public class TaskDaoImpl implements TaskInterface{
	@Autowired
	DbConnection db;
	
	int row = 0;
	
	@Autowired
	Task task = null;

	public int save(Object object) {
		
		try {
			 task = (Task) object;
			 PreparedStatement ps = db.getConnection().prepareStatement("Insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
			 ps.setInt(1, task.getTaskId());
			 ps.setInt(2, task.getOwnerId());
			 ps.setInt(3, task.getCreatorId());
			 ps.setString(4, task.getName());
			 ps.setString(5, task.getDescription());
			 ps.setString(6, task.getStatus());
			 ps.setString(7, task.getPriority());
			 ps.setString(8, task.getNotes());
			 ps.setBoolean(9, task.getBookmarked());
			
			 ps.setString(10, task.getCreatedOn());
			 ps.setString(11, task.getStatus_Changed_On());
			 row = ps.executeUpdate();
			 db.closeConnection();
}catch(SQLException e) 
		{
	System.out.println(e);
	}
		
		return row;
	}
	public List<Task> getAllTasks(){
	List<Task> taskList = new ArrayList<>();
	try {
	PreparedStatement ps1 = db.getConnection().prepareStatement
	("select * from Task");
	ResultSet rs = ps1.executeQuery();
	while(rs.next()) {
	Task t = new Task();
	int Task_ID = rs.getInt(1);
	int Owner_ID = rs.getInt(2);
	int Creator_ID = rs.getInt(3);
	String Name = rs.getString(4);
	String Description = rs.getString(5);
	String Status = rs.getString(6);
	String Priority = rs.getString(7);
	String Notes = rs.getString(8);
	Boolean IsBookmarked = rs.getBoolean(9);
	String Created_On = rs.getString(10);
	String Status_Changed_On = rs.getString(11);
	t.setTaskId(Task_ID);
	t.setOwnerId(Owner_ID);
	t.setCreatorId(Creator_ID);
	t.setTaskName(Name);
	t.setDescription(Description);
	t.setStatus(Status);
	t.setPriority(Priority);
	t.setNotes(Notes);
	t.setIsBookmarked(IsBookmarked);
	t.setCreatedOn(Created_On);
	t.setStatus_Changed_On(Status_Changed_On);
	taskList.add(t);

	}
	}catch(SQLException se) { se.printStackTrace();}
	return taskList;
	}
	public int setpriority(int taskid, String priority) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set priority = ? where task_id = ?");
			 ps.setString(1, priority);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;

	}
	@Override
	public int setNotes(int taskid, String notes) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set notes = ? where task_id = ?");
			 ps.setString(1, notes);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;
	}
	@Override
	public int setBookmarked(int taskid, boolean bookmarked) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update task set isbookmarked = ? where task_id = ?");
			 ps.setBoolean(1, bookmarked);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;
	}
	@Override
	public int setuser(int taskid, int  ownerid) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("Update TASK  set OWNER_ID=? where TASK_ID=?");
			 ps.setInt(1, ownerid);
			 ps.setInt(2, taskid);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;
	}
	public List<Task> searchtask(int taskid) {
		List<Task> taskList=new ArrayList<>();
		try {
			
		
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("select * from TASK where TASK_ID=? ");
			 
			ps.setInt(1, taskid);
			 ResultSet rs = ps.executeQuery();
			 
			 
			 while(rs.next()) {
					Task t=new Task();
				int TASK_ID=rs.getInt(1);
				int OWNER_ID=rs.getInt(2);
				int  CREATOR_ID= rs.getInt(3);
				String NAME= rs.getString(4);
				String DESCRIPTION =rs.getString(5);
				String STATUS= rs.getString(6);
				String PRIORITY=rs.getString(7);
				String NOTES=rs.getString(8);
				Boolean IS_BOOKMARKED=rs.getBoolean(9);
				String CREATED_ON =rs.getString(10);
				String STATUS_CHANGED_ON=rs.getString(11);
				
				t.setTaskId(TASK_ID);
				t.setOwnerId(OWNER_ID);
				t.setCreatorId(CREATOR_ID);
				t.setTaskName(NAME);
				t.setDescription(DESCRIPTION);
				t.setStatus(STATUS);
				t.setPriority(PRIORITY);
				t.setNotes(NOTES);
				t.setIsBookmarked(IS_BOOKMARKED);
				t.setCreatedOn(CREATED_ON);
				t.setStatus_Changed_On(STATUS_CHANGED_ON);
				
				
				taskList.add(t);
				}
				
				}catch(SQLException e) {System.out.println(e);}
			return  taskList;
	}
	@Override

	public List<Task> trackstatus(String status) {
		List<Task> taskList=new ArrayList<>();
		try {
			
		
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("select * from TASK where STATUS=? ");
			 
			ps.setString(1, status);
			 ResultSet rs = ps.executeQuery();
			 
			 
			 while(rs.next()) {
					Task t=new Task();
				int Taskid=rs.getInt(1);
				int Owner_Id=rs.getInt(2);
				int  Creator_Id= rs.getInt(3);
				String Name= rs.getString(4);
				String Description =rs.getString(5);
				String Status= rs.getString(6);
				String Priority=rs.getString(7);
				String Notes=rs.getString(8);
				Boolean Bookmarked=rs.getBoolean(9);
				String Created_On =rs.getString(10);
				String Status_Changed_On=rs.getString(11);
				
				t.setTaskId(Taskid);
				t.setOwnerId(Owner_Id);
				t.setCreatorId(Creator_Id);
				t.setTaskName(Name);
				t.setDescription(Description);
				t.setStatus(Status);
				t.setPriority(Priority);
				t.setNotes(Notes);
				t.setBookmark(Bookmarked);
				t.setCreatedOn(Created_On);
				t.setStatus_Changed_On(Status_Changed_On);
				
				
				taskList.add(t);
				}
				
				}catch(SQLException e) {System.out.println(e);}
			return  taskList;
	}
	
	public int addTask(Task task) {
		try {
			 PreparedStatement ps = db.getConnection().prepareStatement("Insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
			 ps.setInt(1, task.getTaskId());
			 ps.setInt(2, task.getOwnerId());
			 ps.setInt(3, task.getCreatorId());
			 ps.setString(4, task.getName());
			 ps.setString(5, task.getDescription());
			 ps.setString(6, task.getStatus());
			 ps.setString(7, task.getPriority());
			 ps.setString(8, task.getNotes());
			 ps.setBoolean(9, task.getBookmarked());
			 ps.setString(10, task.getCreatedOn());
			 ps.setString(11, task.getStatus_Changed_On());
			 row = ps.executeUpdate();
			 db.closeConnection();
		}catch(SQLException e) {System.out.println(e);}
		
		return row;
		
	}
	

	}
	


		