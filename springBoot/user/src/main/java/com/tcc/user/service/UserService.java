package com.tcc.user.service;

import com.tcc.user.model.UserModel;

import java.util.List;

public interface UserService {
    UserModel saveUser(UserModel userModel);
    UserModel updateUser(UserModel userModel);
    UserModel getUser(String username);
    List<UserModel> getUsers(int limit);
}
