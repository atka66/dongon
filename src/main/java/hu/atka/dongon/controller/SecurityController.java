package hu.atka.dongon.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(path = "/rest/secure/user")
public class SecurityController {

	/**
	 * Used during login from UI to check whether the authentication header was given correctly.
	 * @param principal the authenticated user provided by Spring controller magic
	 * @return response with principal in body
	 */
	@GetMapping
	public ResponseEntity<Principal> getPrincipal(Principal principal) {
		return ResponseEntity.ok(principal);
	}

}
