package com.tcc.user;

import com.tcc.user.model.UserModel;
import com.tcc.user.model.enumeration.RoleType;
import com.tcc.user.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService){
		return args -> {
			userService.saveUser(new UserModel(null, "Super Admin Account", "superadmin", "superadmin", "default.png", RoleType.SUPER_ADMIN, new ArrayList<>()));
			userService.saveUser(new UserModel(null, "Admin Account", "admin", "admin", "default.png", RoleType.ADMIN, new ArrayList<>()));
			userService.saveUser(new UserModel(null, "User Account", "user", "user", "default.png", RoleType.USER, new ArrayList<>()));
		};
	}

}
