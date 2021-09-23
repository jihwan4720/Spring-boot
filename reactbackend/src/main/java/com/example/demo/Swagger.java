package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class Swagger {
	
//	@Bean
//	public Docket docket() {
//		ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder()
//											.title("ex 1")
//											.description("ex 1");
		
//		return new Docket(DocumentationType.SWAGGER_2)
//					.apiInfo(apiInfoBuilder.build())
//					.select()
//	}
}
