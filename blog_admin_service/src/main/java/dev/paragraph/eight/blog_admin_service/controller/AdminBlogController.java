package dev.paragraph.eight.blog_admin_service.controller;

import dev.paragraph.eight.blog_admin_service.dto.GenerateBlogRequest;
import dev.paragraph.eight.blog_admin_service.dto.GeneratedBlogResponse;
import dev.paragraph.eight.blog_admin_service.services.BlogGenerationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminBlogController {

    private final BlogGenerationService blogGenerationService;

    public AdminBlogController(BlogGenerationService blogGenerationService) {
        this.blogGenerationService = blogGenerationService;
    }

    @PostMapping("/generate-blog")
    public GeneratedBlogResponse generateBlog(
            @Valid @RequestBody GenerateBlogRequest request
    ) {
        return blogGenerationService.generate(request.getProblemStatement());
    }
}
