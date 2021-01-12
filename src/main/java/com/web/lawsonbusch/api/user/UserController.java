package com.web.lawsonbusch.api.user;

import com.web.lawsonbusch.api.BaseAPIController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController extends BaseAPIController {

	@RequestMapping("/users/test")
	public String testMapping() {
		return "User api test works!";
	}
}
