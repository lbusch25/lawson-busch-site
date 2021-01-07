package com.web.lawsonbusch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class LawsonBuschApplication implements ErrorController {

	public static void main(String[] args) {
		SpringApplication.run(LawsonBuschApplication.class, args);
	}

	private static final String ERROR_PATH = "/error";
	private static final String DEFAULT_FORWARD = "forward:/index.html";

	@RequestMapping(value = ERROR_PATH)
	public String error() {
		return DEFAULT_FORWARD;
	}

	@Override
	public String getErrorPath() {
		return ERROR_PATH;
	}
}
