package dev.paragraph.eight.blog_admin_service.dto;



import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class GenerateBlogRequest {
    public @NotBlank String getProblemStatement() {
        return problemStatement;
    }

    public void setProblemStatement(@NotBlank String problemStatement) {
        this.problemStatement = problemStatement;
    }

    @NotBlank
    private String problemStatement;
}
