package com.example.demo;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApiController {
	
	ArrayList<User> userlist = new ArrayList<User>();
	public UserApiController() {
		User user = new User(0,"기본 유저",20);
		userlist.add(user);
	}
	
	@GetMapping("/api/users")
	public ArrayList<User> GetTest() {
		System.out.println("Controller --Get-- 진입");
		
		return userlist;
	}
	
	@PostMapping("/api/users")
	public ArrayList<User> PostTest(int id,String name,int age) {
		System.out.println("Controller --Post-- 진입");
		System.out.println("id: " + id + "name: " + name + "age: " + age);
		
		User postUser = new User(id,name,age);
		userlist.add(postUser);
		return userlist;
	}
	
	@DeleteMapping("/api/users")
	public ArrayList<User> DeleteTest(int id) {
		System.out.println("Controller --Delete-- 진입");
		System.out.println("id: " + id);
		
		userlist.remove(id);
		System.out.println(userlist.size());
		return userlist;
	} 
	
	@PutMapping("/api/users")
	public ArrayList<User> PutTest(int id,String name, int age) {
		System.out.println("Controller --Put-- 진입");
		System.out.println("id: " + id + "name: " + name + "age: " + age);
		
		userlist.get(id).setUsername(name);
		userlist.get(id).setAge(age);
		
		return userlist;
	}
}
