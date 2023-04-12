package com.tcc.user.service.implementation;

import com.tcc.user.model.UserModel;
import com.tcc.user.repository.UserRepository;
import com.tcc.user.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class UserServiceImplementation implements UserService {
    private final UserRepository userRepository;
    @Override
    public UserModel saveUser(UserModel user) {
        log.info("Save New User {} to database", user.getUsername());
        return userRepository.save(user);
    }

    @Override
    public UserModel updateUser(UserModel userModel) {
        log.info("Update user :::{}", userModel.getName());
        return userRepository.save(userModel);
    }

    @Override
    public UserModel getUser(String username) {
        log.info("Get {} information", username);
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public List<UserModel> getUsers(int limit) {
        log.info("Get All users limit {}", limit);
        return userRepository.findAll(PageRequest.of(0, limit)).toList();
    }

}
