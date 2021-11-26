package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Task {
	private int Task_id;
	private int CreatorId ;
	private int OwnerId;
	private String Name;
	private String Description;
	private String Status;
	private String Priority;
	private String Notes;
	private boolean Bookmarked;
	
	private String CreatedOn;
	private String Status_Changed_On;
	
	public int getTaskId() {
		return Task_id;
	}
	public void setTaskId(int task_Id) {
		Task_id = task_Id;
	}
	public String getName() {
		return Name;
	}
	public void setTaskName(String Taskname) {
		Name = Taskname;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getPriority() {
		return Priority;
	}
	public void setPriority(String priority) {
		Priority = priority;
	}
	public String getNotes() {
		return Notes;
	}
	public void setNotes(String notes) {
		Notes = notes;
	}
	public boolean getBookmarked() {
		return Bookmarked;
	}
	public void setBookmark(boolean bookmarked) {
		Bookmarked = bookmarked;
	}
	public int getCreatorId() {
		return CreatorId;
	}
	public void setCreatorId(int creatorId) {
		CreatorId = creatorId;
	}
	public int getOwnerId() {
		return OwnerId;
	}
	public void setOwnerId(int ownerId) {
		OwnerId = ownerId;
	}
	public String getCreatedOn() {
		return CreatedOn;
	}
	public void setCreatedOn(String createdOn) {
		CreatedOn = createdOn;
	}
	public String getStatus_Changed_On() {
		return Status_Changed_On;
	}
	public void setStatusChangedOn(String status_Changed_On) {
		Status_Changed_On = status_Changed_On;
	}
	
	public void setIsBookmarked(Boolean isBookmarked) {
		// TODO Auto-generated method stub
		
	}
	public void setStatus_Changed_On(String status_Changed_On2) {
		// TODO Auto-generated method stub
		
	}
	
		
	}
	
	

