package hu.atka.dongon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.atka.dongon.domain.model.User;
import hu.atka.dongon.domain.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public void save(String username, String password) {
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
		userRepository.save(user);
	}

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

}
