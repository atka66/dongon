package hu.atka.dongon.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hu.atka.dongon.domain.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);
}
