package hu.atka.dongon.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/test")
public class TestController {
	@GetMapping
	public ResponseEntity<String> testEndpoint() {
		return ResponseEntity.ok("Hello world");
	}
}
