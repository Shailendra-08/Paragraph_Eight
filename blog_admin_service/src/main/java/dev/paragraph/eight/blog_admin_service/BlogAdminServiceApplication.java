package dev.paragraph.eight.blog_admin_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BlogAdminServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogAdminServiceApplication.class, args);
	}

}
