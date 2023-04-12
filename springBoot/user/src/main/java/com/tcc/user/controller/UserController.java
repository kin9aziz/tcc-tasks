package com.tcc.user.controller;

import com.tcc.user.model.SignRole;
import com.tcc.user.model.UserModel;
import com.tcc.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<UserModel>> getUsers(){
        return ResponseEntity.ok().body(userService.getUsers(30));
    }
//    @GetMapping("/user/save")
//    public ResponseEntity<UserModel> saveUser(@RequestBody UserModel user){
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveUser(user));
//    }
//    @GetMapping("/role/save")
//    public ResponseEntity<UserModel> saveRole(@RequestBody String roleName){
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
//        return ResponseEntity.created(uri).body(userService.saveRole(roleName));
//    }
}
