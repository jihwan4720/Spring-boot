package com.example.demo;

public class User {

	int id,age;
	String name;
	
	public User(int id,String name,int age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public User(String name) {
		this.name = name;
	}


	public String getUsername() {
		return name;
	}


	public void setUsername(String name) {
		this.name = name;
	}
	
	
}
