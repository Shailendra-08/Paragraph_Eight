package dev.paragraph.eight.gateway_api;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRoutes(RouteLocatorBuilder builder) {
        return builder.routes()

                // Blog Admin Service
                .route("blog-admin-service", r -> r
                        .path("/api/admin/**")
                        .uri("lb://BLOGADMINSERVICE")
                )

                // Blog Content Service
                .route("blog-content-service", r -> r
                        .path("/api/blogs/**")
                        .uri("lb://BLOG-CONTENT-SERVICE")
                )

                // Automation Service
                .route("automation-service", r -> r
                        .path("/api/events/**")
                        .uri("lb://AUTOMATION-SERVICE")
                )

                .build();
    }
}
