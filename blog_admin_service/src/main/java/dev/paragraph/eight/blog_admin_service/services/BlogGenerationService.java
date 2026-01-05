package dev.paragraph.eight.blog_admin_service.services;

import dev.paragraph.eight.blog_admin_service.dto.GeneratedBlogResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogGenerationService {

    public GeneratedBlogResponse generate(String problemStatement) {

        GeneratedBlogResponse res = new GeneratedBlogResponse();

        res.setTitle("Rate Limiting Explained for Backend Engineers");
        res.setSlug("rate-limiting-explained");
        res.setExcerpt("Rate limiting is a critical backend technique to protect systems.");
        res.setContentHtml("""
            <h2>What is Rate Limiting?</h2>
            <p>Rate limiting controls the number of requests a client can make.</p>
            """);
        res.setReadTime(6);
        res.setLinkedinSummary(
                "Rate limiting protects backend systems from traffic abuse.\n\n" +
                        "Learn practical algorithms like token bucket & leaky bucket."
        );
        res.setHashtags(List.of("backend", "systemdesign", "springboot"));

        return res;
    }
}
